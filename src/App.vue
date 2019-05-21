<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://rsms.me/inter/inter.css');

  html { font-family: 'Inter', sans-serif; }

  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  #app {
    height: 100vh;
  }

  body {
    background: #131317;
    padding: 0;
    margin: 0;
    color: #EDF2F7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5em;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
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
