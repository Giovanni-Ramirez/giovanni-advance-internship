import Image from "next/image";
import styles from "./landing.module.css"
import landingImg from '@/assets/landing.png'
import ToggleAuthBtn from "../ui/toggleAuthBtn";

export default function landing() {
    return (
        <section id="landing">
            <div className='container'>
                <div className='row'>
                <div className={styles.landingWrapper}>
                    <div className={styles.landingContent}>
                    <div className={styles.landingContentTitle}>
                        Gain more knowledge <br className={styles.removeTablet} />
                        in less time
                    </div>
                    <div className={styles.landingContentSubtitle}>
                        Great summaries for busy people,
                        <br className={styles.removeTablet} />
                        individuals who barely have time to read,
                        <br className={styles.removeTablet} />
                        and even people who don&apos;t like to read.
                    </div>
                    <ToggleAuthBtn>
                        <button className={`btn homeCtaBtn`}>Login</button>
                    </ToggleAuthBtn>
                    </div>
                    <figure className={styles.landingImageMask}>
                        <Image src={landingImg} alt="landing" />
                    </figure>
                </div>
                </div>
            </div>
        </section>
    )
}