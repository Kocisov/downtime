<template>
  <div id="app">
    <LanguageSelect/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import LanguageSelect from './components/LanguageSelect'

export default {
  name: 'App',
  data() {
    return {
      locale: 'de'
    }
  },
  methods: {
    changeLocale(locale) {
      Vue.setLocale(locale)
      this.locale = locale
    }
  },
  components: {
    LanguageSelect
  }
}
</script>


<style lang="scss">
@import url('https://rsms.me/inter/inter.css');

html {
  font-family: 'Inter', sans-serif;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

#app {
  height: 100vh;
}

body {
  background: #131317;
  padding: 0;
  margin: 0;
  color: #edf2f7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5em;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fade-in 2s;
  animation-fill-mode: forwards;
}

.fade-in--short {
  animation: fade-in 1s;
  animation-fill-mode: forwards;
}
</style>
