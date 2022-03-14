import { EvVideoPlayer } from '../lib-components'

export default {
  title: 'UI/EvVideoPlayer',
  component: EvVideoPlayer,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EvVideoPlayer },
  template: '<EvVideoPlayer v-bind="$props" />',
})

export const Primary = Template.bind({})

Primary.args = {}
