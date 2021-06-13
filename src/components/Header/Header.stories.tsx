import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps, ReactElement } from 'react'

import { Header } from '.'

export default {
  title: 'components/Header',
  component: Header
} as Meta

const Template: Story<ComponentProps<typeof Header>> = (
  props
): ReactElement => {
  return <Header {...props}></Header>
}

export const header = Template.bind({})

header.args = {
  foo: 'header'
}
