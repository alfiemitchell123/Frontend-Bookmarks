import React from "react";
import FeaturesTab from "@/components/FeaturesTab";

const Features = () => {
    return (
        <div>
            <div className="px-12 mt-28 text-center lg:px-48">
                <h2>Features</h2>
                <p className="p-6 md:px-48 lg:px-64">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div className="relative">
                <FeaturesTab />
            </div>
        </div>
    )
}

export default Features;