import Link from 'next/link'
import React from 'react'
type FooterLinkProps = {
    title: string,
    children: React.ReactNode,
}

function FooterLink({ title, children }: FooterLinkProps) {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    )
}

export default FooterLink
