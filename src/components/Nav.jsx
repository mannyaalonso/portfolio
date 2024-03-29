import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Switcher from "./Switcher"

const Nav = ({ heroRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  const executeScroll = (ref) => {
    ref.scrollIntoView()
  }

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow flex fixed top-0 z-50 w-full dark:bg-slate-900 "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="hidden md:inline">
                    <Switcher className="text-indigo-600" />
                  </div>
                  {/* <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    /> */}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <button
                    onClick={() => executeScroll(heroRef.current)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white"
                  >
                    Home
                  </button>

                  <button
                    onClick={() => executeScroll(aboutRef.current)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white"
                  >
                    About
                  </button>

                  <button
                    onClick={() => executeScroll(projectsRef.current)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white"
                  >
                    Projects
                  </button>

                  <button
                    onClick={() => executeScroll(skillsRef.current)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white"
                  >
                    Skills
                  </button>

                  <button
                    onClick={() => executeScroll(contactRef.current)}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white"
                  >
                    Contact
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}
                <div className="sm:hidden">
                  <Switcher className="text-indigo-600" />
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div> */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              <Disclosure.Button
                as="button"
                onClick={() => executeScroll(heroRef.current)}
                className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={() => executeScroll(aboutRef.current)}
                className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={() => executeScroll(projectsRef.current)}
                className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={() => executeScroll(skillsRef.current)}
                className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium"
              >
                Skills
              </Disclosure.Button>
              <Disclosure.Button
                as="button"
                onClick={() => executeScroll(contactRef.current)}
                className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 py-2 pl-3 pr-4 text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
