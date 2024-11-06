import React from 'react'
import { NavCN } from './NavCN'
import Image from 'next/image'
import { ButtonType } from './shared/Button'

export default function Navbar() {
  return (
    <nav className='z-50 bg-gray-50 flex w-full items-center justify-between px-10 py-1 fixed border-b'>
      <Image alt='logo' src='/images/logo.png' height={60} width={60}/>
      <NavCN/>
      <ButtonType type='nav' label='Join us'/>
    </nav>
  )
}
