import Logo from "@/components/Logo";
import { FacebookLogo } from "@/components/Social-Logos/FacebookLogo";
import { TwitterLogo } from "@/components/Social-Logos/TwitterLogo";

const Footer = () => {
    return (
        <div className="bg-neutral-veryDarkBlue p-10 md:grid md:grid-cols-4 md:items-center">
            <Logo textFill={'#fff'} circleFill={'#5267DF'} flagFill={'#fff'} />

            <div>
                <ul className="uppercase text-white text-center mt-10 tracking-widest md:flex md:gap-8 md:m-auto md:text-xs">
                    <li className="pb-6 md:p-0 md:hover:text-primary-red cursor-pointer">Features</li>
                    <li className="pb-6 md:p-0 md:hover:text-primary-red cursor-pointer">Pricing</li>
                    <li className="md:hover:text-primary-red cursor-pointer">Contact</li>
                </ul>
            </div>

            <div className="flex justify-center items-center gap-8 mt-10 md:my-auto md:justify-end md:pr-24 md:col-start-4">
                <FacebookLogo />
                <TwitterLogo />
            </div>
        </div>
    )
}

export default Footer;