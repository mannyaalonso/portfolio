import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { FiGithub } from "react-icons/fi"
import { FaLinkedin } from "react-icons/fa"

export default function Hero({ heroRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const navigation = [
  //   { name: "Home", id: "" },
  //   { name: "About", id: "" },
  //   { name: "Projects", id: "" },
  //   { name: "Skills", id: "" },
  //   { name: "Contact", id: "" },
  // ]

  return (
    <div ref={heroRef} className="isolate bg-white dark:bg-slate-700">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            {/* <Switcher className="-m-1.5 p-1.5 text-indigo-600" /> */}
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Manuel Alonso</span>
              LOGO HERE WITH IMG
            </a> */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.id)}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100"
              >
                {item.name}
              </button>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden dark:text-slate-100 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Manuel Alonso</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a> */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 ">
                {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleClick(item.id)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 dark:text-slate-100"
                    >
                      {item.name}
                    </button>
                  ))}
                </div> */}
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <p className="font-semibold text-indigo-600 dark:text-slate-200">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Hello 👋 <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl">
                I'm{" "}
                <span className="text-indigo-600 dark:text-indigo-500">
                  Manuel Alonso
                </span>
                , Software Engineer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-200 mx-2">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://www.linkedin.com/in/mannyaalonso/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <div className="flex gap-3 items-center h-10">
                    <FaLinkedin size={25} /> <p>LinkedIn</p>
                  </div>
                </a>
                <a
                  href="https://github.com/mannyaalonso"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <div className="flex gap-3 items-center h-10">
                    <FiGithub size={25} /> <p>Github</p>
                  </div>
                </a>
                {/* <a
                  href="/files/MANUEL_ALONSO_RESUME_2023.png"
                  download
                  className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-100 hover:text-indigo-500 dark:hover:text-indigo-500"
                >
                  Download CV <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}