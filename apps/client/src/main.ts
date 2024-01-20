import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { VueQueryPlugin, type VueQueryPluginOptions } from "@tanstack/vue-query"

const app = createApp(App)
const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {

    },
  },
}

app.use(VueQueryPlugin, vueQueryOptions)
app.mount("#app")

