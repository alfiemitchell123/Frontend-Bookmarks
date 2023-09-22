import React, { useState } from "react";
import { ArrowIcon } from "./ArrowIcon";

const FAQTabs = ({ title, content, isOpen, onClick }) => (
    <div>
        <div className="flex p-6 cursor-pointer hover:text-primary-red" onClick={onClick}>
            {title}
            <div className="flex-grow"></div>
            {!isOpen ? <ArrowIcon arrowColor={'#5267DF'} /> : <ArrowIcon arrowColor={'#fa5757'} rotate={'rotate-180'} />}
        </div>
        {isOpen && <div className="px-6 pb-6 text-neutral-grayishBlue">{content}</div>}
        <div className="mx-6 border-b"></div>
    </div>
);

const FAQSection = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
        if (activeTab === index) {
            setActiveTab(null);
        } else {
            setActiveTab(index);
        }
    };

    const faqData = [
        {
            title: 'What is Bookmark?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'How can I request a new browser?',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        },
        {
            title: 'Is there a mobile app?',
            content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        },
        {
            title: 'What about other Chromium browsers?',
            content: 'Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
        }
    ];

    return (
        <div>
            {faqData.map((item, index) => (
                <FAQTabs
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={activeTab === index}
                    onClick={() => toggleTab(index)}
                />
            ))}
        </div>
    )
}

export default FAQSection;