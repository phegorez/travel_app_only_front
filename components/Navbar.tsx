import { NAV_LINKS } from "@/constants"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="navLink">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                    full={false}
                />
            </div>

            <Image
                src = "menu.svg"
                alt = "menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            />
        </nav>
    )
}

export default Navbar