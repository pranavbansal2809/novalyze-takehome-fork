'use client'

import {
    PopoverGroup
} from '@headlessui/react'
import Logo from '../img/logo.png'

export default function Header() {

  return (
    <header className="bg-gray-background-dark">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-2 px-4 lg:px-6">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Novalyze logo"
              src={Logo}
              className="h-15 w-auto"
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <a href="/" className="text-lg font-semibold text-secondary">
            Home
          </a>
          <a href="#" className="text-lg font-semibold text-secondary">
            Marketplace
          </a>
          <a href="#" className="text-lg font-semibold text-secondary">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-lg font-semibold text-secondary">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
