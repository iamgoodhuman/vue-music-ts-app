module.exports = {
    lintOnSave: false, //如果为false，就是取消eslint规则的检查
    css: {
      loaderOptions: {
        sass: {
          // 全局引入变量和 mixin
          additionalData: `
            @import "~@/assets/scss/variable.scss";
            @import "~@/assets/scss/mixin.scss";
          `
        }
      }
    }
  }