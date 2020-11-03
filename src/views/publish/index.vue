<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
    <!-- {{formData}} -->
    <!-- 表单 -->
    <el-form
      ref="publishForm"
      :model="formData"
      :rules="publishRules"
      style="margin-left: 10px"
      label-width="100px"
    >
      <el-form-item label="标题" prop="title">
        <el-input style="width: 400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <quill-editor
          
          v-model="formData.content"
          style="width:800px ;height:400px"
        ></quill-editor>
      </el-form-item>
      <el-form-item label="封面" style="margin-top:120px">
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id">
          <!-- :key 索引值  :value id  :label 名字-->
          <el-option
            v-for="item in channels"
            :key="item.id"
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="publish(false)">发表</el-button>
      <el-button @click="publish(true)">存入草稿</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      //校验表单
      formData: {
        title: "", //标题
        content: "", //内容
        cover: {
          // 封面类型 -1:自动，0-无图，1-1张，3-3张
          type: 0,
          images: [],
        },
        channel_id: null, //频道
      },
      //校验规则
      publishRules: {
        title: [
          {
            required: true, // required 意味必填
            message: "标题不能为空", // 如果没有满足
          },
        ],
        content: [
          {
            required: true, // required 意味必填
            message: "内容不能为空",
          },
        ],
        channel_id: [
          {
            required: true, // required 意味必填
            message: "频道不能为空",
          },
        ],
      },

      channels: [],
    };
  },
  methods: {
    //发表
    publish(draft) {
      // this.$refs.publishForm.validate((isOK) => {
      //   if (isOK) {
      //     this.$axios({
      //       url:"/mp/v1_0/articles",
      //       method:'post',
      //       params:{draft: false},// true  草稿  false 发表
      //       data: this.formData
      //     }).then(() => {//成功之后 跳转到 内容列表  编程式导航
      //      this.$router.push("/home/articles")
      //     })
      //   }
      // })

      //  判断发布的内容是 新增 还是 修改 根据 articleId 来 判断
      this.$refs.publishForm.validate((isOK) => {
        if (isOK) {
          // 只有校验成功了 才去管是新增还是修改 
          let {articleId} = this.$route.params//获取Id
          this.$axios({//用三元来判断
            url: articleId ? `/mp/v1_0/articles/${articleId}` : "/mp/v1_0/articles" ,
            method: articleId ?'put'  : "post",
            params: { draft }, //true 的时候是草稿   false 的话 就是 发表
            data: this.formData,
          }).then(() => {
            //发表之后  我们要跳转到  内容列表  编程式导航
            this.$router.push("/home/articles");
          });
        }
      });
    },
    //获取频道列表
    getChannels() {
      this.$axios({
        url: "/mp/v1_0/channels",
      }).then((result) => {
        this.channels = result.data.channels;
      });
    },
    getArticleById(articleId) {
    this.$axios({
      url: `/mp/v1_0/articles/${articleId}`
    }).then((result) => {
      this.formData = result.data;
    });
  }
  },
  //根据id 获取相应的文章
  
  created() {
    this.getChannels(); //获取频道
    let { articleId } = this.$route.params;
    if (articleId) {
      // 如果存在  id 就是修改文章  通过id 获取当前的文章数据
      this.getArticleById(articleId);
    }
  },
};
</script>

<style>
</style>