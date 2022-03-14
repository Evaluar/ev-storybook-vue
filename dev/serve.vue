<script>
import Vue from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { EpVueLibrarySample } from '@/entry.esm'
import { EPButton } from '@/entry.esm'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    EpVueLibrarySample,
    EPButton,
  },
})
</script>

<template>
  <div id="app">
    <ep-vue-library-sample />
    <EPButton />
  </div>
</template>
