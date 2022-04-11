<template>
  <div class="ev-video-player">
    <ArtplayerComponent v-if="url" :option="option" :style="style" />
  </div>
</template>

<script>
import ArtplayerComponent from 'artplayer-vue'

export default {
  name: 'EvVideoPlayer',

  components: {
    ArtplayerComponent,
  },

  props: {
    mediumScreen: {
      type: Boolean,
      default: true,
    },

    url: {
      type: String,
      default: ''
    }
  },

  computed: {
    option() {
      return {
        url: this.url,
        title: 'Video',
        volume: 0.9,
        muted: false,
        autoplay: false,
        pip: true,
        autoSize: false,
        autoMini: true,
        screenshot: true,
        setting: true,
        loop: true,
        playbackRate: true,
        aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: this.mediumScreen,
        mutex: true,
        theme: '#ffffff',
        lang: 'en',
        moreVideoAttr: {
          crossOrigin: 'anonymous',
        },
      }
    },
  },

  data() {
    return {
      url: '',
      style: {
        width: '100%',
        height: '450px',
        margin: '0 auto',
      },
    }
  }
}
</script>

<style scoped>
.ev-video-player {
  display: flex;
  justify-content: center;
}
.art-video-player .art-video {
  background-color: #fff;
}
</style>
