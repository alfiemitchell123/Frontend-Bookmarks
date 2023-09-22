import AddBrowser from "@/components/AddBrowser";
import LogoChrome from "@/components/Browser-Logos/LogoChrome";
import LogoFirefox from "@/components/Browser-Logos/LogoFirefox";
import LogoOpera from "@/components/Browser-Logos/LogoOpera";

const Extensions = () => {
    return (
        <div className="pt-28">
            <div className="px-12 text-center pb-4">
                <h2>Download the extension</h2>
                <p className="p-6 md:px-48 lg:px-96">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>

            <div className="md:flex md:gap-10 md:px-14 md:justify-center lg:gap-0">
                <AddBrowser className={''} browser={'Chrome'} minVersion={'62'} logo={<LogoChrome />} />
                <AddBrowser className={'md:translate-y-10'} browser={'Firefox'} minVersion={'55'} logo={<LogoFirefox />} />
                <AddBrowser className={'md:translate-y-20'} browser={'Opera'} minVersion={'46'} logo={<LogoOpera />} />
            </div>
        </div>
    )
}

export default Extensions;