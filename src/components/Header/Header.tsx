import { ReactElement } from 'react'

import { HeaderProps } from '.'

export function Header({ foo }: HeaderProps): ReactElement {
  return <header className="text-[#5FB2FF] mt-[60px]">{foo}</header>
}
