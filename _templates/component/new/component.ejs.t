---
to: src/<%= type %>/<%= name %>/<%= h.capitalize(name) %>.tsx
---

import { ReactElement } from 'react'

import { <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>.interfaces'

export function <%= h.capitalize(name) %>({}: <%= h.capitalize(name) %>Props): ReactElement {
  return (
    <div>
      <%= h.capitalize(name) %>
    </div>
  )
}