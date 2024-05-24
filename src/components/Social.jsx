import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"

const socials = [
    { icon: <FaGithub />, path: ""},
    { icon: <FaLinkedin />, path: ""},
    { icon: <FaInstagram />, path: ""},
    { icon: <FaXTwitter />, path: ""},
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social