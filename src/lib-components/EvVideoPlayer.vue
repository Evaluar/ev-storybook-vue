<template>
  <div class="ev-video-player">
    <ArtplayerComponent :option="option" :style="style" />
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
    id: {
      type: String,
      default: '',
    },

    token: {
      type: String,
      default: '',
    },
  },

  watch: {
    id(val) {
      this.request(val)
    },
  },

  computed: {
    option() {
      return {
        url: this.url,
        title: 'Video',
        poster:
          'https://cdn.evaluar.com/website/content/uploads/20210520184451/logo-blue.svg',
        volume: 0.9,
        muted: false,
        autoplay: false,
        pip: true,
        autoSize: true,
        autoMini: true,
        screenshot: true,
        setting: true,
        loop: true,
        playbackRate: true,
        aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: true,
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
        width: '800px',
        height: '450px',
        margin: '0 auto',
      },
    }
  },

  methods: {
    async request(id) {
      const query = `
        query GetInterviewVideo($videoId: String!) {
            getInterviewVideo(videoId: $videoId) {
                url
            }
        }
      `

      try {
        const response = await fetch('https://apis.evaluardev.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token,
          },
          body: JSON.stringify({
            query,
            variables: {
              videoId: id,
            },
          }),
        })

        console.log('EvVideoPlayer', response)
        const { data } = await response.json()
        this.url = data.getInterviewVideo.url
      } catch (e) {
        throw new Error(e)
      }
    },
  },
}
</script>

<style scoped>
.art-video-player .art-video {
  background-color: #fff;
}
</style>
