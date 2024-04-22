import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterLink from './FooterLink'

function Footer() {
    return (
        <footer className='flexCenter mb-24'>
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
                    <Link href='/' className='mb-10'>
                        <Image
                            src='hilink-logo.svg'
                            alt='logo'
                            width={74}
                            height={29}
                        />
                    </Link>
                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>

                        {FOOTER_LINKS.map((columns, index) => (
                            <FooterLink key={index} title={columns.title}>
                                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                                    {columns.links.map((link, index) => (
                                        <Link href='/' key={index}>{link}</Link>
                                    ))}
                                </ul>
                            </FooterLink>
                        ))}

{/* 
                        <div className='flex flex-col gap-5'>
                            <FooterLink title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                                    <Link 
                                        href='/'
                                        key={index}
                                        className='flex gap-4 md:flex-col lg:flex-row'
                                    >
                                        <p className='whitespace-nowrap'>
                                            {link.label} :
                                        </p>
                                        <p className='medium-14 whitespace-nowrap text-blue-70'>
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterLink>
                        </div> */}

                        {/* <div className='flex flex-col gap-5'>
                            <FooterLink title={SOCIALS.title}>
                                <ul className='regular-14 flex gap-4 text-gray-30'>
                                    {SOCIALS.links.map((link, index) => (
                                        <Link href='/' key={index}>
                                            <Image
                                                src={link}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterLink>
                        </div> */}

                    </div>
                </div>

                <div className="border bg-gray-20" />
                <p className='regular-14 w-full text-center text-gray-30'>2024 Sanctuary | All right reserved</p>                  
            </div>
        </footer>
    )
}

export default Footer
