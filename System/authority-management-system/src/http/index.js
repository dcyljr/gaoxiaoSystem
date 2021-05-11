//将 axios 封装成插件，按插件方式引入
// 导入所有接口
import apis from './interface'

const install = Vue => {
  if (install.installed)
    return;

  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apis
      }
    }
  })
}

export default install
