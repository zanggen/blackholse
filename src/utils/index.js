export function loadScript(url) {
    let isLoaded = false;
    return new Promise((resolve,reject) => {
      if(isLoaded) {
        resolve();
        return true;
      }
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src = url;
      script.onerror = reject;
      script.onload = function () {
        isLoaded = true;
        resolve();
      }
      document.head.appendChild(script);
    })
  }