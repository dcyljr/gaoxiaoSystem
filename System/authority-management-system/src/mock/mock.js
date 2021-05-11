/*封装要点： 
统一 url 配置
统一 api 请求
request (请求) 拦截器，例如：带上token等，设置请求头
response (响应) 拦截器，例如：统一错误处理，页面重定向等
根据需要，结合 Vuex 做全局的 loading 动画，或者错误处理
将 axios 封装成 Vue 插件使用 */
import Mock from 'mockjs'
Mock.mock('http://localhost:8082/login', {
  data: {
    'token': '4344323121398'
  }
});
Mock.mock('http://localhost:8082/user', {
  'name': '@name', //随机生成姓名
  'email': '@email', //随机生成姓名
  'age|1-10': 5 //其他数据
});
Mock.mock('http://localhost:8082/menu', {
  'id': '@increment', //随机生成姓名
  'name': 'menu',
  'order|10-20': 12 //其他数据
});
