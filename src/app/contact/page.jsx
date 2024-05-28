"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info =[
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        text: "+62 852 3634 9738"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        text: "bredymahardhika@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        text: "Nganjuk, East Java, Indonesia"
    }
]

export const Contact = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="py-6"
        >
            <div className="container mx-auto my-32 xl:my-24">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.text}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;