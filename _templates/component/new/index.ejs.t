---
to: src/<%= type %>/<%= name %>/index.ts
---

export * from './<%= h.capitalize(name) %>'
export * from './<%= h.capitalize(name) %>.interfaces'
