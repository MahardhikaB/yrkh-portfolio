import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/MahardhikaB"},
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mahardhika-bredy-39628a1a2/"},
    { icon: <FaInstagram />, path: "https://www.instagram.com/mhrdhka.bd/"},
    { icon: <FaXTwitter />, path: ""},
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social