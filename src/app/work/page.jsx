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
        category: "My Personal Website",
        title: "Project 01",
        description: "Here is my personal website or rather my portfolio, on this web there is information about myself, skills, education, and projects that I have done.",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind" }],
        image: "/assets/work/yrkh_portfolio.png",
        github: "https://github.com/MahardhikaB/yrkh-portfolio.git"
    },
    {
        num: "02",
        category: "Agriculture Shop Web",
        title: "Project 02",
        description: "This project is an inventory web project, this project is done by 4 people. This project has many features to manage data in the agricultural business.",
        stack: [{ name: "Laravel" }, { name: "JQuery" }, { name: "Bootstrap" }],
        image: "/assets/work/invntry.png",
        github: ""
    },
    {
        num: "03",
        category: "Smart Door Lock Website",
        title: "Project 03",
        description: "This project is a web for admin to manage users from SDL IoT, this project is a 6th semester project with an estimated completion date of June 2024.",
        stack: [{ name: "Laravel" }, { name: "Next.js" }, { name: "Tailwind" }],
        image: "/assets/work/sdl.png",
        github: "https://github.com/MahardhikaB/project_sdl.git"
    },
    {
        num: "04",
        category: "Costum Rent Mobile App",
        title: "Project 04",
        description: "This project focuses on data management on costume rental, the prominent feature is the ID card scanning feature to fill out the form when making a rental.",
        stack: [{ name: "Flutter" }],
        image: "/assets/work/cosrent.png",
        github: "https://github.com/MahardhikaB/Yorzkha-Cosrent.git"
    }
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
                        <div className="flex flex-col gap-[25px] h-[50%]">
                            {/* Outline Num */}
                            <div className="text-8xl leading-none font-extrabold text-accent">
                                {project.num}
                            </div>
                            {/* Category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* Description */} 
                            <p className="text-white/60">{project.description}</p>
                            {/* Stacks */}
                            <ul className="flex gap-2">
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
                            <div className="xl:h-[70px] xl:w-[70px]">
                                <Link href={project.github} target="_blank">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
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
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* Image */}
                                    <div className="relative w-full h-full rounded-xl overflow-hidden">
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
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none rounded-xl"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[33px] h-[33px] flex justify-center items-center transition-all rounded-md"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;