import { StarIcon } from "./Icons";
import Navbar from "./Navbar";
const logos = [
    { name: "Relume", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0CU70HI18Bpkp_GpaB9QeQl5ktUnXIYbNg&s" },
];
import {motion} from "motion/react"
import { TextFade } from "./TextFade";
const Hero = () => {

    return (
        <section className="bg-black">
            <div className="flex relative h-fit w-full overflow-hidden p-2">
                <Navbar />
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10" />
                <video
                    autoPlay    
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/bg-video.mp4" type="video/mp4" />
                </video>
                <div className=" w-full h-full z-10 justify-center items-center flex flex-col text-white pt-40">
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.3}} className="flex justify-center shadow-2xl shadow-pink-600 items-center mb-6 bg-linear-to-r from-blue-800 via-purple-800 to-pink-800 bg-opacity-50 border border-neutral-400 rounded-full px-4 py-2 w-fit mx-auto backdrop-blur-sm">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4, ease: "easeInOut"}} className="flex -space-x-2 mr-3">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1027/50/50" alt="Peer 1" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1011/50/50" alt="Peer 2" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1012/50/50" alt="Peer 3" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1015/50/50" alt="Peer 2" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/id/1013/50/50" alt="Peer 3" />
                        </motion.div>
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.4, ease: "easeInOut"}}  className="flex flex-col mr-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                            </div>
                            <span className="text-gray-300 text-xs mt-1">115+ happy peers</span>
                        </motion.div>
                    </motion.div>
                    <TextFade direction="down" staggerChildren={0.4}>
                    <h1  className="text-2xl md:text-4xl lg:text-6xl text-center font-bold">Transform Compliance from <br /> complexity to confidence</h1>
                    <p className="max-w-lg mx-auto text-center mt-5 text-gray-400 text-xs md:text-md">Intelligent. Integrated. Compliant. Suronex unifies your multi-cloud assets, detects what matters, and automates the work that slows you down.</p>
                    </TextFade>
                    <div className="flex gap-6 mt-5">
                        <motion.button initial={{scale:0, opacity: 0}} animate={{scale:1, opacity:1}} transition={{duration:0.3, ease: "easeInOut"}} className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 px-7 py-2 rounded-lg font-semibold text-sm md:text-md">Book Demo</motion.button>
                        <motion.div initial={{scale:0, opacity: 0}} animate={{scale:1, opacity:1}} transition={{duration:0.6, ease: "easeInOut"}} className="inline-block p-px  m-0 rounded-lg  bg-linear-to-r from-blue-600 via-purple-600 to-pink-500">
                            <button  className="rounded-lg bg-gray-900 px-7 py-2 text-sm md:text-md  text-white ">
                                See Platform
                            </button>
                        </motion.div>

                    </div>
                    <div className="relative bg-transparent py-20 overflow-hidden w-full max-w-7xl">
                        <h3 className="text-center text-lg font-semibold text-neutral-300 mb-10">
                            Trusted by security teams worldwide
                        </h3>


                        <div className="relative overflow-hidden">
                            <div className="flex gap-12 animate-marquee flex-wrap justify-center">
                                {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center w-32 h-12"
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.name}
                                            className="
                                        max-h-8
                                        max-w-full
                                        object-contain
                                        opacity-70
                                        grayscale
                                        transition
                                        hover:opacity-100
                                        mix-blend-lighten
                                        invert
                                        "
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero;