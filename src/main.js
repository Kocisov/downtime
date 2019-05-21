import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AudioVisual from 'vue-audio-visual'
import Intl, { addLocaleData } from 'vue-intl'
import de from 'vue-intl/locale-data/de'
import enTranslations from './translations/en.json'
import deTranslations from './translations/de.json'

Vue.use(Intl)
Vue.use(AudioVisual)

addLocaleData(de)

Vue.config.productionTip = false

Vue.setLocale('de')
Vue.registerMessages('en', enTranslations)
Vue.registerMessages('de', deTranslations)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
