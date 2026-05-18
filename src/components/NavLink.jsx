import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname();
    console.log(pathname, 'PathName')
    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "border-1 border-t-0 border-b-2 py-1 text-[#2563eb] border-[#2563eb]" : " text-[#0f172a] py-1 bg-[#d8e4ff7d] hover:bg-[#2564eb5f]"}`}>
            {children}
        </Link>
    );
};

export default NavLink;