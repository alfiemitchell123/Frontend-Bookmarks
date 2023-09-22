import React from "react";
import EmailSignup from "@/components/EmailSignup";

const Signup = () => {
    return (
        <div className="px-12 bg-primary-blue pt-14 pb-10 mt-28 md:px-56">
            <div className="text-center">
                <h4 className="uppercase text-sm text-white tracking-widest pb-4 md:text-xs">35,000+ Already Joined</h4>
                <h2 className="text-white lg:px-72">Stay up-to-date with what we're doing</h2>
            </div>

            <EmailSignup />
        </div>
    )
}

export default Signup;