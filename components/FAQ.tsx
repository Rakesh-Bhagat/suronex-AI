import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionItemProps {
  uid: number;
  question: string;
  answer: string;
  activeFAQ: number | null;
  setActiveFAQ: React.Dispatch<React.SetStateAction<number | null>>;
}


const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, uid, activeFAQ, setActiveFAQ }) => {

   const isActive = activeFAQ === uid;

  const handleAccordionClick = () => {
    setActiveFAQ(isActive ? null : uid);
  };

  return (
    <div className="border-b border-gray-800 py-4 md:py-6">
      <button onClick={handleAccordionClick} className="w-full flex justify-between items-center text-left text-sm md:text-lg font-semibold hover:text-pink-800 transition-colors">
        <span className={`${isActive ? 'text-pink-700' : ''}`}>{question}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isActive ? 'rotate-180 text-pink-700' : ''}`} />
      </button>
      <div className={`grid grid-rows-[0fr] transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-4' : ''}`}>
        <div className="overflow-hidden">
          <p className="text-xs md:text-[16px] text-gray-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Multi-Cloud Coverage",
    answer: "MIC (MAHE Innovation Centre) is a platform that supports student-led innovation through projects, mentorship, events, and funding opportunities."
  },
  {
    question: "AI-Powered Analysis",
    answer: "All students currently enrolled at MAHE are eligible to participate in our events, workshops, and programs. We encourage students from all disciplines to join and collaborate."
  },
  {
    question: "Automated Reporting",
    answer: "You can follow our social media channels, subscribe to our newsletter, and regularly check the 'Events' section on our website for the latest announcements and updates."
  },
  {
    question: "Real-Time Monitoring",
    answer: "Projects should be innovative, feasible, and have the potential for real-world impact. While we are open to all ideas, we prioritize those that align with our mission of solving meaningful problems through technology and creativity."
  },
  {
    question: "DevSecOps Integration",
    answer: "We organize a variety of events throughout the year, including hackathons, ideation workshops, technical bootcamps (covering AI/ML, Blockchain, etc.), and networking sessions with industry experts and alumni."
  },
   {
    question: "Policy as Code",
    answer: "We organize a variety of events throughout the year, including hackathons, ideation workshops, technical bootcamps (covering AI/ML, Blockchain, etc.), and networking sessions with industry experts and alumni."
  },
];

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-8 md:py-20 px-4 relative md:h-full bg-black overflow-hidden text-white">
      {/* Decorative Shapes */}
      <div
        aria-hidden="true"
        className="absolute top-8 -left-[113px] h-[423.22px] w-[226.26px] border-[23.45px] border-pink-400 rounded-[117.24px] hidden lg:block pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -bottom-[1px] -left-[633px] w-[750px] h-[226px] border-[23px] border-[#F6F6F6] rounded-[117px] hidden lg:block pointer-events-none"
      ></div>
      <div aria-hidden="true" className="absolute top-1/2 -translate-y-1/2 -right-[320px] w-[445px] h-[445px] border-y-[23px] border-l-[23px] border-r-0 border-violet-600 rounded-l-full hidden lg:block pointer-events-none"></div>


      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xs md:text-lg text-gray-400 mt-2 md:mt-6">
            Got questions? We've got answers. Find everything you need to know about using our platform, plans, and features.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-6 md:mt-12">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              uid={index}
              question={item.question}
              answer={item.answer}
              activeFAQ={activeFAQ}
              setActiveFAQ={setActiveFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;