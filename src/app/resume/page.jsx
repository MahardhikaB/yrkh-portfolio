"use client";

import { 
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiDart,
    SiFlutter,
} from "react-icons/si";

// About data
const about = {
    title: "About Me",
    description: "i am a front-end developer based in Indonesia. I have a passion for web development and love to create new things.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Mahardhika Bredy",
        },
        {
            fieldName: "Phone",
            fieldValue: "+62 852 2624 9738",
        },
        {
            fieldName: "Email",
            fieldValue: "bredymahardhika@gmail.com",
        },
        {
            fieldName: "Address",
            fieldValue: "Jl. Raya Kuncir No. 50, Nganjuk, Jawa Timur",
        }
    ]
}

// Education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Here are the educational background that I have taken.",
    items: [
        {
            institution: "Politeknik Negeri Malang",
            degree: "D-IV Teknik Informatika",
            duration: "2021 - present",
        },
        {
            institution: "Dicoding",
            degree: "Memulai Pemrograman Dengan Dart",
            duration: "Oct 2023",
        },
        {
            institution: "Dicoding",
            degree: "Belajar Dasar Pemrograman Web",
            duration: "July 2023",
        },
    ]
}

// Skills data
const skills = {
    title: "My Skills",
    description: "Here are the technologies that I used for my project and that I have learned during my studies.",
    skillList: [
        {
            icon: <SiHtml5 />,
            name: "HTML",
        },
        {
            icon: <SiCss3 />,
            name: "CSS",
        },
        {
            icon: <SiJavascript />,
            name: "JS",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind",
        },
        {
            icon: <SiReact />,
            name: "React JS",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next JS",
        },
        {
            icon: <SiDart />,
            name: "Dart",
        },
        {
            icon: <SiFlutter />,
            name: "Flutter",
        },
        {
            icon: <SiPhp />,
            name: "PHP",
        },
        {
            icon: <SiLaravel />,
            name: "Laravel",
        },
        {
            icon: <SiMysql />,
            name: "My Sql",
        },
    ]
}

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="education"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skill">Skill</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min-h-[78vh] w-full">
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#23232c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div>
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skill */}
                        <TabsContent value="skill" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-l">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}


export default Resume;
