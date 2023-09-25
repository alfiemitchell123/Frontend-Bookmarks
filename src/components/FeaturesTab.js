import React, { useState } from "react";
import Button from "./Button";
import IllustrationFeaturesTab1 from "./IllustrationFeaturesTab1";
import IllustrationFeaturesTab2 from "./IllustrationFeaturesTab2";
import IllustrationFeaturesTab3 from "./IllustrationFeaturesTab3";

const FeaturesTab = () => {
    const [activeTab, setActiveTab] = useState(1);
    const textDivStyle = "mt-16 pt-6 text-center md:flex-1 md:text-left md:mt-0 md:px-16 lg:px-12 lg:pr-12";
    const moreInfoBtnStyle = "hidden md/lg:block md:mt-8 md:bg-primary-blue md:text-white md:text-sm md:py-3 active:ring-primary-blue active:ring-2 active:text-primary-blue";

    const renderActiveSVG = () => {
        switch (activeTab) {
            case 1:
                return (
                    <>
                        <div className="px-6 md:flex lg:pl-28 md:px-none">
                            <IllustrationFeaturesTab1 />
                            <div className={textDivStyle}>
                                <h2 className="mb-4">Bookmark in one click</h2>
                                <p className="p-4 px-12 md:p-0 lg:pr-48">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                                <Button className={moreInfoBtnStyle} label={'More Info'} />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="px-6 md:flex lg:pl-28 md:px-none">
                            <IllustrationFeaturesTab2 />
                            <div className={textDivStyle}>
                                <h2 className="mb-4">Intelligent search</h2>
                                <p className="p-4 px-12 md:p-0">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                                <Button className={moreInfoBtnStyle} label={'More Info'} />
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="px-6 md:flex lg:pl-28 md:px-none">
                            <IllustrationFeaturesTab3 />
                            <div className={textDivStyle}>
                                <h2 className="mb-4">Share your bookmarks</h2>
                                <p className="p-4 px-12 md:p-0">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                                <Button className={moreInfoBtnStyle} label={'More Info'} />
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="">
                <ul className="grid grid-rows-1 divide-y py-6 px-12 text-center cursor-pointer md:flex md:justify-center md:divide-y-reverse md:px-28 lg:px-64">
                    <div></div>
                    {activeTab === 1 ?
                        <li className="py-4 relative md:flex-1" onClick={() => setActiveTab(1)}>
                            Simple Bookmarking
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-primary-red"></div>
                        </li>
                        : <li className="py-4 relative hover:text-primary-red  md:flex-1 text-neutral-grayishBlue" onClick={() => setActiveTab(1)}>
                            Simple Bookmarking
                        </li>
                    }
                    {activeTab === 2 ?
                        <li className="py-4 relative md:flex-1" onClick={() => setActiveTab(2)}>
                            Speedy Searching
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-primary-red"></div>
                        </li>
                        : <li className="py-4 relative hover:text-primary-red md:flex-1 text-neutral-grayishBlue" onClick={() => setActiveTab(2)}>
                            Speedy Searching
                        </li>
                    }
                    {activeTab === 3 ?
                        <li className="py-4 relative md:flex-1" onClick={() => setActiveTab(3)}>
                            Easy Searching
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-primary-red"></div>
                        </li>
                        : <li className="py-4 relative hover:text-primary-red md:flex-1 text-neutral-grayishBlue" onClick={() => setActiveTab(3)}>
                            Easy Searching
                        </li>
                    }
                    <div></div>
                </ul>
                <div className="overflow-hidden w-auto h-auto px-6 pt-8 lg:mt-8">
                    {renderActiveSVG()}
                </div>
            </div>
        </div>
    )
}

export default FeaturesTab;