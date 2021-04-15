import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { OverlayScrollbarsPlugin } from "overlayscrollbars-vue"

Vue.use(OverlayScrollbarsPlugin)

// Vue setup
if (process.env.NODE_ENV == "production") {
    Vue.config.silent = true
    Vue.config.devtools = false
    Vue.config.productionTip = false
}

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
