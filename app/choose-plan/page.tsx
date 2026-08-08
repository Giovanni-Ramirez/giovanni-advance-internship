'use client'
import styles from './page.module.css'
import FAQ from '@/components/planComponents/faq';
import Header from '@/components/planComponents/planHeader';
import Features from '@/components/planComponents/features';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function ChoosePlan () {
    const [planSelected, setPlanSelected] = useState('yearly')


    return (
        <div className="plan__page">
            <Header />
            <div className="row">
                <div className="container">
                    <div className={styles.plan_wrapper}>

                        <Features />
                        
                        <div className={styles.plan__form_title}>Choose the plan that fits you</div>
                        
                        <div className={styles.plan__form_options_wrapper}>                        
                            <div className={planSelected === 'yearly' ? `${styles.plan__form_option} ${styles.plan__form_selected}` : styles.plan__form_option} onClick={() => setPlanSelected('yearly')}>
                                <div className={styles.plan__form_empty_dot}>
                                    <div className={planSelected === 'yearly' ? styles.plan__form_dot : `${styles.plan__form_dot} ${styles.plan__form_dot_not_selected}`}></div>
                                </div>
                                <div className={styles.plan__form_info}>
                                    <div className={styles.plan__info_title}>Premium Plus Yearly</div>
                                    <div className={styles.plan__info_price}>$99.99/year</div>
                                    <div className={styles.plan__info_text}>7-day free trial included</div>
                                </div>
                            </div>
                            
                            <div className={styles.plan__card_separator}>
                                <div className={styles.plan__separator}>or</div>
                            </div>

                            <div className={planSelected === 'monthly' ? `${styles.plan__form_option} ${styles.plan__form_selected}` : styles.plan__form_option} onClick={() => setPlanSelected('monthly')}>
                                <div className={styles.plan__form_empty_dot}>
                                    <div className={planSelected === 'monthly' ? styles.plan__form_dot : `${styles.plan__form_dot} ${styles.plan__form_dot_not_selected}`}></div>
                                </div>
                                <div className={styles.plan__form_info}>
                                    <div className={styles.plan__info_title}>Premium Monthly</div>
                                    <div className={styles.plan__info_price}>$9.99/month</div>
                                    <div className={styles.plan__info_text}>No trial included</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.plan__card_cta}>
                            <span className={styles.btn__wrapper}>
                                    {planSelected === 'yearly' ? 
                                        <button className="btn">
                                            Start your free 7-day trial
                                        </button>
                                    :
                                        <button className="btn">
                                            Start your first month
                                        </button>
                                    }
                            </span>
                            {planSelected === 'yearly' ?
                                <div className={styles.plan__disclaimer}>
                                    Cancel your trial at any time before it ends, and you won&apos;t be charged.
                                </div>
                            :
                                <div className={styles.plan__disclaimer}>
                                    30-day money back guarantee, no questions asked.
                                </div>
                            }
						</div>

                        <FAQ />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}