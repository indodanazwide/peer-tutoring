import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/tute.png" className="h-8" alt="Tute Me Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Tute Me
            </span>
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
            <li>
              <a href="#" className=" me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className=" me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-black sm:mx-auto lg:my-8" />

        <span className="block text-sm text-black sm:text-center">
          © {2025}{' '}
          <a href="/">
            Tute Me™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer