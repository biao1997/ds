import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router'
// 引入初始样式
import './assets/css/base.css'
// 引入element插件
import './plugins/element.js'
import './assets/fonts/iconfont.css'
// 引入axios请求
import './api'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import moment from 'moment'

Vue.filter('dateFormat', function (input) {
  return moment.unix(input).format('YYYY-MM-DD HH:mm:ss')
})
Vue.component('tree-table', TreeTable)
// 将富文本编辑器，注册为全局可用的组件
Vue.use(VueQuillEditor)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
