import Button from "./Button";
import BackgroundDots from "./BackgroundDots";

const AddBrowser = ({ logo, browser, minVersion, className }) => {
    return (
        <div className={`grid shadow-lg text-center w-[280px] h-[370px] m-auto rounded-xl mb-10 lg:m-4 ${className}`}>
            <div className="m-auto pt-6">
                {logo}
            </div>
            <div>
                <h3 className="font-semibold text-xl pb-2">Add to {browser}</h3>
                <span className="text-neutral-grayishBlue text-sm">Minimum version {minVersion}</span>
            </div>
            <BackgroundDots />
            <Button className="bg-primary-blue text-white w-60 text-sm md:w-52 active:ring-primary-blue active:ring-2 active:text-primary-blue" label={'Add & Install Extension'} />
        </div >
    )
}

export default AddBrowser;