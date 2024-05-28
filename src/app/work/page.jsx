"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Front-end",
        title: "Project 01",
        type: "Personal Project",
        descriptiom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/spk.png",
        github: ""
    },
    {
        num: "02",
        category: "FBack-end",
        title: "Project 02",
        type: "Team Project",
        descriptiom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/inventory.png",
        github: ""
    },
    {
        num: "03",
        category: "Mobile",
        title: "Project 03",
        type: "Personal Project",
        descriptiom: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/spk.png",
        github: ""
    },
];

export const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // uodate project state
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80px] flex flex-col justify-center py-12 xl:py-4"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Outline Num */}
                            <div className="text-8xl leading-none font-extrabold text-accent">
                                {project.num}
                            </div>
                            {/* Category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* Description */} 
                            <p className="text-white/60">{project.descriptiom}</p>
                            {/* Stacks */}
                            <ul className="flex gap-4">
                                {project.stack.map((stack, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">{stack.name}
                                        {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* Border */}
                            <div className="border border-white/20"></div>
                            {/* Buttons */}
                            <div>
                                <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        fill
                                        className="object-cover"
                                        alt=""
                                    />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* Slider Button */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[33px] h-[33px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;