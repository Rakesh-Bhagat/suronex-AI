"use client"
import { ArrowRightIcon } from "./Icons";
import { Meteors } from "./ui/meteors";
import {motion} from "motion/react"



export function MeteorsDemo() {
  return (
    <div className="relative  w-full h-xl bg-black py-30 px-2">
      <div className="relative w-full max-w-2xl mx-auto">
        <motion.div initial={{scale:0.7}} animate={{rotate: 360, scale: [0.7,0.8,0.9,1, 1.1, 1,0.9, 0.8,0.7]}} transition={{duration: 5, repeat: Infinity, ease: "linear"}} className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-center justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 px-4 py-8 shadow-xl">
          <h2 className="text-lg md:text-3xl text-center font-bold text-white">
                        Ready to Transform Your <br /> Compliance Journey?
                    </h2>
                    <p className="text-sm text-gray-300 mt-6 max-w-3xl mx-auto text-center">
                        Join hundreds of companies who trust Suronex to secure their multi- <br />cloud infrasture. Start your free trial today.
                    </p>
                    <div className="mt-10">
                        <button
                            className={`
            m-auto w-40 inline-flex items-center justify-center
            p-2 md:px-5 md:py-2 rounded-md text-white text-sm md:text-md font-medium
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            bg-linear-to-br from-violet-800 via-purple-800 to-pink-800
          `}
                        >
                            Start free trial <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
}
