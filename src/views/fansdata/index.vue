<template>
  <el-card class="fansdata">
    <bread-crumb slot="header">
      <template slot="title" style="width: 400px; height: 500px"
        >图文数据</template
      >
    </bread-crumb>

    <!-- echarts -->
    <div class="echarts">
      <div
        class="echarts1"
        ref="myEcharts"
       
      ></div>
      <div
        class="echarts2"
        ref="myEcharts2"
       
      ></div>
    </div>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    var myEcharts = echarts.init(this.$refs.myEcharts);
    var myEcharts2 = echarts.init(this.$refs.myEcharts2);

    myEcharts.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" },
          ],
        },
      ],
    });
    // myecharts2
    myEcharts2.setOption({
      //   title: {
      //     text: "基础雷达图",
      //   },
      tooltip: {},
      legend: {
        data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          { name: "销售（sales）", max: 6500 },
          { name: "管理（Administration）", max: 16000 },
          { name: "信息技术（Information Techology）", max: 30000 },
          { name: "客服（Customer Support）", max: 38000 },
          { name: "研发（Development）", max: 52000 },
          { name: "市场（Marketing）", max: 25000 },
        ],
      },
      series: [
        {
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          //   areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 13000],
              name: "预算分配（Allocated Budget）",
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: "实际开销（Actual Spending）",
            },
          ],
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.fansdata {
    // height: 100%;
  .echarts {
    // padding-top: 50px;
    height: 79vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .echarts1 {
        width: 500px;
        height:500px;
    }
    .echarts2 {
        width: 850px;
        height: 500px;
    }
  }
}
</style>