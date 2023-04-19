import { motion } from "framer-motion"
import project1 from '../assets/project1.gif'
import project2 from '../assets/project2.gif'
import project3 from '../assets/project3.gif'
import project4 from '../assets/project4.gif'
import project5 from '../assets/project5.gif'
import project6 from '../assets/project6.gif'
import project7 from '../assets/project7.gif'

const projects = [
  {
    name: "Stockwise",
    role: "React | SQL | Express | Tailwind | ChatGPT | ChartJS",
    imageUrl: project5,
    bio: "Utilizes Yahoo Finance API to provide real-time updates on stock prices and ChatGPT",
    githubUrl: "https://github.com/mannyaalonso/stockwise",
    liveUrl: "https://stockwise-fe.netlify.app/",
  },
  {
    name: "Spark",
    role: "React and React Native | Python | Flask | MongoDB | Google Firebase",
    imageUrl: project7,
    bio: "Light up your love life with Spark, the dating app that creates meaningful connections.",
    githubUrl: "https://github.com/mannyaalonso/spark-client",
    liveUrl: "https://github.com/mannyaalonso/spark-api",
  },
  {
    name: "Thredz",
    role: "React | SQL | Express | Tailwind | Firebase",
    imageUrl: project6,
    bio: "Ecommerce online hub that allows users to mimic a social marketplace",
    githubUrl: "https://github.com/fcaione/ecommerce-frontend",
    liveUrl: "https://thredz.netlify.app/",
  },
  {
    name: "Swish Sesh",
    role: "React | MongoDB | Express | Tailwind | GoogleAuth | Stripe",
    imageUrl: project4,
    bio: "Basketball meetups for a local startup in Georgia",
    githubUrl: "https://github.com/mannyaalonso/swish-sesh",
    liveUrl: "https://swish-sesh.herokuapp.com/",
  },
  {
    name: "Coaster",
    role: "React | MongoDB | Express | Tailwind",
    imageUrl: project3,
    bio: "Browse the most popular amusement park rides all over the nation!",
    githubUrl: "https://github.com/jonclindner/Coaster",
    liveUrl: "https://coaster.herokuapp.com/",
  },
  {
    name: "LinkedIn Skill Assessments",
    role: "React | MongoDB | Express | CSS",
    imageUrl: project2,
    bio: "A quiz app that has the exact bank of questions from LinkedIn skill assessments.",
    githubUrl: "https://github.com/mannyaalonso/linkedin-skill-assessments",
    liveUrl: "https://linked-assessments.herokuapp.com/",
  },
  {
    name: "Modern Battleship",
    role: "Javascript | HTML 5 | CSS",
    imageUrl: project1,
    bio: "The intense war game, built for web browsers with vanilla JS, responsive on all screens!",
    githubUrl: "https://github.com/mannyaalonso/modern-battleship",
    liveUrl: "http://modern-battleship.surge.sh/",
  },
]

export default function Projects({ projectsRef }) {
  return (
    <div ref={projectsRef} className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-slate-100">
              Projects
            </h2>
            <p className="text-xl text-gray-500 dark:text-slate-200">
              Here are some recent projects I've made with different languages
              and technologies. Made for mobile and desktop. Give the servers a couple seconds to boot-up.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {projects.map((project) => (
                <motion.li whileHover={{ scale: 1.02 }} key={project.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="rounded-lg object-cover shadow-lg"
                        src={project.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="dark:text-slate-100">{project.name}</h3>
                      <p className="text-indigo-600">{project.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500 dark:text-slate-200">
                        {project.bio}
                      </p>
                    </div>

                    <ul className="flex space-x-5">
                      <li>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-indigo-500 dark:text-slate-200 dark:hover:text-indigo-500"
                        >
                          <span className="sr-only">Repo</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 25 25"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-indigo-500 dark:text-slate-100 dark:hover:text-indigo-500"
                        >
                          <span className="sr-only">Live</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 25 25"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}