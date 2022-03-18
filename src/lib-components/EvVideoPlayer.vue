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
    id: {
      type: String,
      default: '',
    },

    token: {
      type: String,
      default: '',
    },

    realmHeader: {
      type: String,
      default: '',
    },

    mediumScreen: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    id: {
      handler(val) {
        this.url = null
        this.request(val)
      },
      immediate: true,
    },

    token: {
      handler() {
        this.url = null
        this.request(this.id)
      },
      immediate: true,
    },

    realmHeader: {
      handler() {
        this.url = null
        this.request(this.id)
      },
      immediate: true,
    },
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

      let headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }

      if (this.realmHeader) {
        headers['X-PROVIDER-REALM'] = this.realmHeader
      }

      try {
        const response = await fetch('https://apis.evaluardev.com/graphql', {
          method: 'POST',
          headers,
          body: JSON.stringify({
            query,
            variables: {
              videoId: id,
            },
          }),
        })

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
.ev-video-player {
  display: flex;
  justify-content: center;
}
.art-video-player .art-video {
  background-color: #fff;
}
</style>
