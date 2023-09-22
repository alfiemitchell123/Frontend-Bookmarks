import FAQSection from "@/components/FAQTabs";
import Button from "@/components/Button";

const FAQs = () => {
    return (
        <div className="px-12 md:px-48 lg:px-96">
            <div className="mt-28 mb-4 text-center">
                <h2>Frequently Asked Questions</h2>
                <p className="p-6">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>

            <FAQSection />

            <div className="flex justify-center mt-10">
                <Button className="bg-primary-blue text-white px-6 shadow-lg md:mt-8 md:text-sm md:py-3 active:ring-primary-blue active:ring-2 active:text-primary-blue" label={'More Info'} />
            </div>
        </div>
    )
}

export default FAQs;