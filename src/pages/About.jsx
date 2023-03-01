import { motion } from "framer-motion"

export default function About({ aboutRef }) {
  return (
    <div
      ref={aboutRef}
      className="relative bg-white py-16 sm:py-24 dark:bg-slate-900"
    >
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72 dark:bg-slate-700" />
            <svg
              className="absolute top-4 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="absolute inset-0 h-full w-full object-cover"
                src="https://i.imgur.com/PT6rrTU.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-50" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Most good programmers do programming not because they
                      expect to get paid or get adulation by the public, but
                      because it is fun to program.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">
                      Linus Torvalds, Creator of Linux
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
              About me
            </h2>
            <div className="mt-6 space-y-6 text-gray-500 dark:text-slate-200">
              <p className="text-lg">
                I remember my first line of code,{" "}
                <span className="font-source text-md text-indigo-600 dark:text-indigo-500">
                  print('Hello World')
                </span>
                , I don't think I'll ever forget that feeling of creating
                something inside a console. Fast forward to today, and I've
                migrated from the console to full-fledged frontend applications.
              </p>
              <p className="text-lg">
                Before software engineering, I worked in audio and creative
                media for 8 years. In that time, I learned that attention to
                detail must not be overlooked. Working with a team was crucial
                when problems arised in a fast-paced environment.
              </p>
              <p className="text-lg">
                I hope to make a change with a few lines of code one day, well
                maybe a couple thousand. In the meantime, I also enjoy making
                music and the outdoors.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="https://twitter.com/mannyaalonso"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-indigo-600 dark:hover:text-slate-100"
              >
                Follow me on Twitter
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}