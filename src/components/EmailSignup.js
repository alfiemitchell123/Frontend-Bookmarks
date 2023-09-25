import React, { useState } from "react";
import Button from "./Button";
import { ErrorIcon } from "./ErrorIcon";

const EmailSignup = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            setEmailError(true);
            return;
        }
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        return emailRegex.test(email);
    }

    return (
        <div className="relative">
            <form className="mt-6 md:flex md:gap-4 md:justify-center" onSubmit={handleSubmit} noValidate>
                <div className={`relative ${emailError ? 'bg-primary-red border-primary-red border-t-4 border-x-4 mb-4' : 'mb-5'} rounded`}>
                    <input
                        className="rounded w-full h-[45px] p-6 shadow-none outline-none md:w-[300px] md:py-4 md:px-12 md:placeholder:-p-1"
                        type="email"
                        name="email"
                        placeholder="john@smith.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className={`p-2 bg-primary-red text-white text-xs italic font-semibold transition-all duration-500 ${emailError ? '' : 'hidden'}`}>
                        <div>
                            Whoops, make sure it's an email
                        </div>
                        <ErrorIcon className={`absolute right-3 top-1/2 transform -translate-y-[1.6rem]`} />
                    </div>
                </div>
                <Button className="bg-primary-red text-white w-full shadow-none md:py-3 md:text-sm active:ring-primary-red active:ring-2 active:text-primary-red" label={'Contact Us'} />
            </form>
        </div>
    )
}

export default EmailSignup;