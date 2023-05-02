import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import emailjs from "emailjs-com"
import React, { useRef } from "react"
import Swal from "sweetalert2"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact({ contactRef }) {
  const form = useRef()
  let auth = false

  const sendEmail = (e) => {
    e.preventDefault()

    if (auth) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully",
            })
          },
          (error) => {
            console.log(error.text)
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          }
        )
      e.target.reset()
    } else {
      Swal.fire({
        icon: "error",
        title: "Please complete CAPTCHA",
      })
    }
  }

  const onChange = () => {
    auth = true
  }

  const onExpired = () => {
    auth = false
    Swal.fire({
      icon: "error",
      title: "CAPTCHA Expired",
    })
  }

  return (
    <div ref={contactRef} className="relative bg-white dark:bg-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 dark:bg-slate-900" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 dark:bg-slate-900">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-slate-100">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-slate-200">
              Feel free to reach me in your preferred way below or send me a
              message using the form.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only dark:text-slate-100">Postal address</dt>
                <dd>
                  <p className="dark:text-slate-200">Lake Mary, FL</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 dark:text-slate-100"
                    aria-hidden="true"
                  />
                  <a href="tel:4075019909">
                    <span className="ml-3 text-indigo-600 dark:hover:text-white hover:text-indigo-900">
                      +1 (407) 501-9909
                    </span>
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 dark:text-slate-100"
                    aria-hidden="true"
                  />
                  <a href="mailto:mannyaalonso@gmail.com">
                    <span className="ml-3 text-indigo-600 dark:hover:text-white hover:text-indigo-900">
                      mannyaalonso@gmail.com
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 dark:bg-slate-900">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-800"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-800"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-800"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-800"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <ReCAPTCHA
                  className="py-3"
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={onChange}
                  onExpired={onExpired}
                />
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}