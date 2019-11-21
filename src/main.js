import Vue    from "vue"
import router from "./router"
import App    from "./App"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")

// // グローバルコンポーネント
// Vue.component("Home", { template: "<p>home</p>" })
// // ローカルコンポーネント
// // 1.その場でHTML指定
// components: { Home: { template: "<p>home</p>" }}
// // 2.vueファイルを読み込む場合 → 基本的にtemplateオプションは必要ない
// import Home from "./Home.vue"
// components: { Home: { template: "<Home/>" }} // 挿入するものを明示する
// components: { "home-template": Home } // テンプレート名を上書きしたい場合
// components: { Home } // 簡単にかける

// "templateオプションはわざわざ、HTMLを指定する・明示する感じの役割"
