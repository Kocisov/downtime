<template>
  <div style="text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column; height: 100%;">
    <p style="text-align: center;  animation-delay: 1s;" class="fade-in">Du scheinst sehr gestresst zu sein.<br/><br/>Nimm dir 5 Minuten Downtime.<br/>Entspann dich und denk an nichts.</p>

    <div style="position: relative; animation-delay: 2.5s;" class="fade-in">
      <button @click="toggleAudio" class="audio-btn"><i class="material-icons">{{ toggleIcon }}</i></button>
      <audio style="display: none;" ref="zenTrack" src="/audio/kfc.mp3" controls></audio>
      <av-circle
        :canv-width="240"
        :canv-height="240"
        :line-width="4"
        outline-color="#FF0039"
        :outline-width="3"
        bar-color="#FF0039"
        ref-link="zenTrack"
        :rotate-graph="true"
        :progress="false"
        canv-class="zen-canvas"
        :bar-width="5"
        :radius="70"
      ></av-circle>
    </div>
  </div>
</template>

<script>
  import AudioVisual from 'vue-audio-visual'

  export default {
    name: 'zen',
    components: {
      AudioVisual
    },

    data() {
      return {
        toggleIcon: 'play_arrow',
      }
    },

    mounted() {
      this.showPlayer = true;
    },

    methods: {
      toggleAudio() {
        if (this.$refs.zenTrack.paused) {
          this.toggleIcon = 'pause'
          this.$refs.zenTrack.play()
        } else {
          this.toggleIcon = 'play_arrow'
          this.$refs.zenTrack.pause();
        }
      }
    }
  }
</script>

<style lang="scss">
  .audio-btn {
    background: none;
    border: none;
    color: #fff;


    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .material-icons {
      font-size: 64px;
    }
  }
</style>
