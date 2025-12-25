import { ArrowRightIcon } from "./Icons";
import { FaCheck } from "react-icons/fa6"
import { motion, TargetAndTransition, Transition } from "motion/react"
import { useEffect, useState } from "react";



const Pricing = () => {
  const innovationItems: LaunchpadItem[] = [
    { text: "Ideation (Source)", isOrangeCheck: true },
    { text: "Prototyping (Build)", isOrangeCheck: true },
    { text: "Incubation (Grow)", isOrangeCheck: true },
    { text: "Launch (Scale)", isOrangeCheck: true }
  ];
  const fundingItems: LaunchpadItem[] = [
    { text: "MIC Seed Fund: Provides initial grants (up to ₹5 Lakhs) for prototyping, proof-of-concept development, and initial market validation." },
    { text: "External Grant Facilitation: Offers dedicated support to help MAHE teams apply for competitive national grants from bodies like BIRAC and DST." }
  ];
  const mentorshipItems: LaunchpadItem[] = [
    { text: "Become a Mentor: Passionate about giving back? Join our network and shape the next generation of innovators. [Link to Join Committee/Mentor Form]", isOrangeCheck: true }
  ];

  return (
    <section className={`bg-black text-white py-24 `}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-2xl md:text-6xl text-center font-bold leading-tight">Transparent Pricing for <br />Every Stage</h1>
        <p className="text-center text-sm sm:text-lg mt-2 text-neutral-300">Start free, scale as you grow. No hidden fees</p>
        <div className="mt-8 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center">
          <LaunchpadCard
            title="Starter"
            team="For small teams getting started"
            price="FREE"
            resource="Up to 50 resources"
            items={innovationItems}
            onContactClick={() => { }}
            initial={{x: typeof window !== "undefined" && window.innerWidth > 1023 ?250 : 0, opacity:0, scale: typeof window !== "undefined" && window.innerWidth >1023 ? 0 : 1}}
            animate={{x:0, opacity:1, scale:1}}
            transition={{duration:0.7, ease: "easeInOut"}}
            className="lg:rounded-l-[24px] lg:rounded-r-[0px] rounded-[24px] border border-white/10 lg:h-[480px] md:min-w-xs px-10 items-center"
          />
          <LaunchpadCard
            title="Professional"
            team="For medium teams getting started"
            price="$499"
            resource="Up to 150 resources"
            items={fundingItems}
            initial={{scale: typeof window !== "undefined" && window.innerWidth >1023 ? 1.2: 1, opacity: typeof window !== "undefined" && window.innerWidth >1023 ? 1: 0.5}}
            animate={{scale:1, opacity: 1}}
            transition={{ ease: "easeInOut"}}
            className="rounded-[24px] lg:h-[540px] z-2"
            onContactClick={() => { }}
          />
          <LaunchpadCard
            title="Enterprise"
            team="For medium teams getting started"
            price="custom"
            resource="Up to 150 resources"
            items={mentorshipItems}
            onContactClick={() => { }}
            initial={{x: typeof window !== "undefined" && window.innerWidth > 1023 ?-250 : 0, opacity:0, scale: typeof window !== "undefined" && window.innerWidth >1023 ? 0 : 1}}
            animate={{x:0, opacity:1, scale:1}}
            transition={{duration:0.7, ease: "easeInOut"}}
            className="lg:rounded-r-[24px] lg:rounded-l-[0px] rounded-[24px] border z-1 border-white/10 lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing;

interface LaunchpadItem {
  text: string;
  isOrangeCheck?: boolean;
}

interface LaunchpadCardProps {
  title: string;
  team: string;
  price: string;
  resource: string;
  items: LaunchpadItem[];
  className?: string;
  initial?: TargetAndTransition | boolean;
  animate?: TargetAndTransition;
  transition?: Transition;
  onContactClick: () => void;
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = ({ title, team, price, resource, items, initial, animate, transition, className, onContactClick }) => {


  return (
    <motion.div initial={initial} whileInView={animate} transition={transition} className={`
      relative bg-[#1b1b1c] shadow-lg
      overflow-hidden flex flex-col justify-center ${className} max-w-[420px] lg:max-w-[340px]
    `}>
      <div className="p-3 md:p-6 flex flex-col">
        <h1 className="text-lg md:text-3xl font-medium text-transparent bg-linear-to-br from-purple-900 via-violet-800 to-pink-500 bg-clip-text mb-4 text-center">
          {title}
        </h1>
        <div className=" text-gray-300 mb-6 flex-col text-center">
          <p className="text-sm mx-auto text-center">{team}</p>
          <p className="text-4xl text-pink-500 font-bold">{price}</p>
          <p className="text-sm text-neutral-400">{resource}</p>
        </div>

        <hr className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent border-0" />

        <div className="mb-8">
          <h4 className="text-sm md:text-lg font-semibold text-white mb-4">What's included</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-gray-300">
                <div className="bg-pink-500 border border-black text-black rounded-full p-[2px] text-xs md:mt-1">
                  <FaCheck />
                </div>

                <span className="text-xs md:text-md">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onContactClick}
          className={`
            m-auto w-[160px] inline-flex items-center justify-center
            p-2 md:px-5 md:py-2 rounded-md text-white text-sm md:text-lg font-medium
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            bg-linear-to-br from-violet-900 via-purple-900 to-pink-900
          `}
        >
          Join Us
          <ArrowRightIcon className="ml-2 w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};
