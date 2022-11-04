import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as ECharts from 'echarts';

const app = createApp(App)
app.config.globalProperties.$ECharts = ECharts
app.use(store).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }