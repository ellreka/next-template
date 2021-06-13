---
to: src/<%= type %>/<%= name %>/<%= h.capitalize(name) %>.stories.tsx
---

import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps, ReactElement } from 'react'

import { <%= h.capitalize(name) %> } from './'

export default {
  title: '<%= type %>/<%= h.capitalize(name) %>',
  component: <%= h.capitalize(name) %>
} as Meta

const Template: Story<ComponentProps<typeof <%= h.capitalize(name) %>>> = (
  props
): ReactElement => {
  return <<%= h.capitalize(name) %> {...props} />
}

export const <%= h.changeCase.lower(name) %> = Template.bind({})

<%= h.changeCase.lower(name) %>.args = {}
