import { EPLabel } from '../lib-components'

export default {
  title: 'UI/EPLabel',
  component: EPLabel,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EPLabel },
  template: '<EPLabel v-bind="$props" />',
})

export const Primary = Template.bind({})

Primary.args = {}
