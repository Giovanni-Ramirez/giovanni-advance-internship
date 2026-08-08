'use client'
import styles from './faq.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

export default function Faq() {
    const [selected, setSelected] = useState<number | null>(null);

    const toggleAccordionCard = (i : number) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (
        <div className="faq__wrapper">
                {data.map((item, i) => (
                <div className={styles.accordion__card} onClick={() => toggleAccordionCard(i)} key={i}>
                    <div className={styles.accordion__header}>
                        <div className={styles.accordion__title}>
                            {item.question}
                        </div>
                        <IoIosArrowDown className={selected === i ? styles.accordion__icon : `${styles.accordion__icon} ${styles.flip}`}/>
                    </div>
                    <div className={selected === i ?`${styles.collapse} ${styles.show}`  : styles.collapse}>
                        <div className={styles.accordion__body}>
                            {item.answer}
                        </div>
                    </div>
                </div>
                ))}
        </div>
    )
}

const data = [
    {
        question: 'How does the free 7-day trial work?',
        answer: 
            'Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.'
    },
    {
        question: 'Can I switch subscriptions from monthly to yearly, or yearly to monthly?',
        answer: 
            'While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.'
    },
    {
        question: `What's included in the Premium plan?`,
        answer: 
            'Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.'
    },
    {
        question: 'Can I cancel during my trial or subscription?',
        answer: 
            'You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.'
    },
]