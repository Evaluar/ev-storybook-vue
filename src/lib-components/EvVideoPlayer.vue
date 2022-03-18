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

    config: {
      type: Object,
      default: () => {},
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
        fullscreenWeb: true,
        mutex: true,
        theme: '#ffffff',
        lang: 'en',
        moreVideoAttr: {
          crossOrigin: 'anonymous',
        },
        ...this.config.player,
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

      try {
        const response = await fetch('https://apis.evaluardev.com/graphql', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token,
            ...this.config.request.headers,
          },
          body: JSON.stringify({
            query,
            variables: {
              videoId: id,
            },
            ...this.config.request.body,
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
