
import React from 'react';
import { ArrowRightIcon } from './Icons';



const CTA = () => {
    return (
        <section id="contact" className="py-8 md:py-20 px-4 flex justify-center bg-black">
            <div className="relative overflow-hidden bg-[#181818] border border-white/10 rounded-3xl text-center max-w-4xl w-full md:h-[374.78px] p-4 md:p-12">

                <div
                    className="absolute inset-0
                    [background-size:24px_24px]
                    [background-image:
                    linear-gradient(to_right,#ffffff14_1px,transparent_1px),
                    linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)
                ]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,#2563eb_0%,#7c3aed_20%,#ec4899_35%,transparent_60%)] opacity-15"></div>



                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="text-lg md:text-5xl font-bold text-white">
                        Ready to Transform Your <br /> Compliance Journey?
                    </h2>
                    <p className="text-sm text-gray-300 mt-6 max-w-3xl mx-auto">
                        Join hundreds of companies who trust Suronex to secure their multi- <br />cloud infrasture. Start your free trial today.
                    </p>
                    <div className="mt-10">
                        <button
                            className={`
            m-auto w-52 inline-flex items-center justify-center
            p-2 md:px-8 md:py-3 rounded-md text-white text-sm md:text-lg font-medium
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            bg-linear-to-br from-violet-800 via-purple-800 to-pink-800
          `}
                        >
                            Start free trial <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;