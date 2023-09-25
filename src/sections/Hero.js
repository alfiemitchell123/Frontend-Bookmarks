import IllustrationHero from "@/components/IllustrationHero";
import Button from "@/components/Button";

const Hero = () => {
    return (
        <div className="relative pt-6 md:flex md:flex-row-reverse md:gap-4 lg:mx-24 lg:gap-8">
            <div className="pr-12 md:flex-1">
                <IllustrationHero />

                <div className="absolute right-0 top-28 z-[-1] w-[400px] h-[225px] bg-primary-blue rounded-l-[150px] md:w-[350px] md:top-20 lg:w-[600px] lg:h-[325px] lg:top-36 lg:-right-24"></div>
            </div>

            <div className="text-center mt-10 md:text-left md:pl-24 md:flex-1 md:mt-8 lg:mt-16 lg:max-w-xl">
                <div className="px-14 md:px-0">
                    <h1 className="text-3xl font-semibold lg:text-5xl lg:leading-14">A Simple Bookmark Manager</h1>
                    <p className="p-6 md:pl-0 lg:text-lg">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                </div>
                <div className="flex justify-center mt-4 gap-4 md:mt-2 md:justify-normal">
                    <Button className="bg-primary-blue text-white md:p-3 md:px-4 md:text-sm active:ring-primary-blue active:ring-2 active:text-primary-blue" label={'Get it on Chrome'} />
                    <Button className="bg-neutral-buttonGray md:p-3 md:px-4 md:text-sm active:ring-neutral-darkGray active:ring-2 active:text-neutral-darkGray" label={'Get it on Firefox'} />
                </div>
            </div>
        </div>
    )
}

export default Hero;