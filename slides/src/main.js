import Vue from 'vue'
import App from './Slides.vue'
import Keynote from 'vue-keynote'
import 'vue-keynote/dist/vue-keynote.css'
import VueHighlightJS from 'vue-highlightjs'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueHighlightJS)
Vue.use(Keynote)

new Vue({
  el: '#app',
  render: h => h(App)
})
