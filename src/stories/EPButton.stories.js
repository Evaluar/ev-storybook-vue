import { EPButton } from '../lib-components'

export default {
  title: 'UI/EPButton',
  component: EPButton,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EPButton },
  template: '<EPButton v-bind="$props" />',
})

export const Primary = Template.bind({})

Primary.args = {}
