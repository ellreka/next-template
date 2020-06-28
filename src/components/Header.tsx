import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Header: NextPage = () => (
  <header className="h-10">
    <div className="text-red-500">
      <Link href="/" as="/">
        <a className="flex">Header</a>
      </Link>
    </div>
  </header>
)

export default Header
