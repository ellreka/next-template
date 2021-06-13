import { ReactElement } from 'react'

import { LayoutProps } from './Layout.interfaces'

export function Layout({ children }: LayoutProps): ReactElement {
  return <div>{children}</div>
}
