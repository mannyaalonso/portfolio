import { SiJavascript } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { SiCsswizardry } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiNodedotjs } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { GrMysql } from "react-icons/gr"

export default function Skills() {
  return (
    <div id={"skills"} className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white py-16">
          Languages & Technologies I'm familiar with
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <FaReact className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <SiJavascript className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <AiFillHtml5 className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <SiCsswizardry className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <SiTailwindcss className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <SiNodedotjs className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <DiMongodb className="h-12 text-slate-300 text-5xl" />
            </div>
            <div className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
              <GrMysql className="h-12 text-slate-300 text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}