import React, { useState } from 'react'
import Logo from '@/components/Logo'
import Button from './Button'
import { FacebookLogo } from './Social-Logos/FacebookLogo'
import { TwitterLogo } from './Social-Logos/TwitterLogo'

const MobileMenu = ({ handleCloseClick }) => {
    return (
        <div className="absolute inset-0 bg-neutral-veryDarkBlue/95">
            <div className="flex p-10 items-center">
                <Logo textFill={'#fff'} circleFill={'#fff'} flagFill={'hsl(229 31% 21% / 0.9)'} />

                <div className="flex-grow"></div>

                <nav>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        onClick={handleCloseClick}
                    >
                        <path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z" />
                    </svg>
                </nav>
            </div>

            <div>
                <ul className="grid divide-y divide-neutral-grayishBlue/50 uppercase text-white text-center text-lg mt-4 tracking-widest px-10">
                    <div></div>
                    <li className="py-5">Features</li>
                    <li className="py-5">Pricing</li>
                    <li className="py-5">Contact</li>
                    <div></div>
                    <Button className="uppercase text-white w-full py-2 tracking-widest mt-8 border-2" label={'Login'} />
                </ul>
            </div>

            <div className="flex justify-center gap-8 mt-48">
                <FacebookLogo />
                <TwitterLogo />
            </div>
        </div>
    )
}

export default MobileMenu;