"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <div className="container mx-auto mt-24 xl:my-0">
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-0">
                    {/* Image */}
                    <div className="xl:h-[54%] xl:ml-28">
                        <div className="hidden p-10 rounded-xl xl:flex">
                            <Image
                                src="/assets/dazbee.jpg"
                                width={400}
                                height={400}
                                className="rounded-xl"
                                alt="Image"
                            />
                        </div>
                    </div>
                    {/* Info */}
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
                                            <h3 className="text-base xl:text-xl">{item.text}</h3>
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