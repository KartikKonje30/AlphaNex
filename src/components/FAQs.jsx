
import { useState } from "react";
import clsx from "clsx"

const items = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
    },
    {
      question: "How does the pricing work for teams?",
      answer:
        "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
    },
  ];
 
const AccordionItem = ({question, answer}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
            <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
                        <div className="flex items-center ">
                        <span className="flex-1 text-lg font-bold">{question}</span>
                        
                        { isOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        }
                        </div>
                        <div className={clsx('mt-4 ',{
                            hidden: !isOpen,
                            "": isOpen === true,
                        })}
                        >
                        {answer}
                        </div>
            </div>
    )
}
  

const FAQs = () => {
    return (
      <section className="flex py-20 px-5 justify-center sm:py-24">
        <div className="container">
            <h2 className="section-title flex justify-start">FAQ`&apos`s</h2>
            <div className="mt-12 max-w-3xl mx-auto  ">
                {items.map(({question, answer}) => (
                    <AccordionItem question={question} answer={answer} key={question} />
                ))}
            </div>
        </div>
      </section>
    )
  };

export default FAQs;
  