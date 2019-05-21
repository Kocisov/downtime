<template>
  <div class="language-select">
    <div class="text" v-html="$formatMessage({id: 'changeLang'})"></div>
    <div
      class="language"
      v-bind:class="{selected: $parent.locale === 'en'}"
      v-on:click="selectLocale('en')"
    >EN</div>
    <div
      class="language"
      v-bind:class="{selected: $parent.locale === 'de'}"
      v-on:click="selectLocale('de')"
    >DE</div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelect',
  methods: {
    selectLocale(locale) {
      this.$parent.changeLocale(locale)
    }
  }
}
</script>

<style scoped>
.text {
  color: #999;
  font-size: 12px;
}

.language-select {
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 600;
}

.language {
  margin-left: 10px;
  color: #999;
  transition: color 0.2s ease-in;
  cursor: pointer;
}

.language:hover,
.selected {
  color: #fff;
}
</style>
