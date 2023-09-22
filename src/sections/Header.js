import React, { useState } from 'react';
import Logo from '@/components/Logo'
import MobileMenu from '@/components/MobileMenu';
import Button from '@/components/Button';

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleOpenClick = () => {
        setOpenMobileMenu(true);
    }

    const handleCloseClick = () => {
        setOpenMobileMenu(false);
    }

    return (
        <div className="flex items-center p-10 px-14 md:px-24 md:py-14 lg:px-48">
            <Logo textFill={'#242A45'} circleFill={'#5267DF'} flagFill={'#fff'} />

            <div className="flex-grow"></div>

            <nav className="md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    onClick={handleOpenClick}
                >
                    <path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
                </svg>
            </nav>
            {openMobileMenu && <MobileMenu handleCloseClick={handleCloseClick} />}

            <nav className="hidden md:block">
                <ul className="flex gap-10 uppercase items-center tracking-wide md:text-sm md:gap-8 lg:gap-12">
                    <li className='hover:text-primary-red cursor-pointer'>Features</li>
                    <li className='hover:text-primary-red cursor-pointer'>Pricing</li>
                    <li className='hover:text-primary-red cursor-pointer'>Contact</li>
                    <Button className="bg-primary-red text-white px-7 py-[0.6rem] tracking-wide active:ring-primary-red active:ring-2 active:text-primary-red" label={'Login'} />
                </ul>
            </nav>
        </div>
    )
}

export default Header;