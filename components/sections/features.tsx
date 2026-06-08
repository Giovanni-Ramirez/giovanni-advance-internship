
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import styles from '@/components/sections/features.module.css'

export default function features() {
    return (
<section id="features">
    <div className="container">
        <div className="row">
        <div className="section__title">Understand books in few minutes</div>
        <div className={styles.featuresWrapper}>
            <div className={styles.features}>
            <div className={styles.featuresIcon}>
                <AiFillFileText />
            </div>
            <div className={styles.featuresTitle}>Read or listen</div>
            <div className={styles.featuresSubTitle}>
                Save time by getting the core ideas from the best books.
            </div>
            </div>
            <div className={styles.features}>
            <div className={styles.featuresIcon}>
                <AiFillBulb />
            </div>
            <div className={styles.featuresTitle}>Find your next read</div>
            <div className={styles.featuresSubTitle}>
                Explore book lists and personalized recommendations.
            </div>
            </div>
            <div className={styles.features}>
            <div className={styles.featuresIcon}>
                <AiFillAudio />
            </div>
            <div className={styles.featuresTitle}>Briefcasts</div>
            <div className={styles.featuresSubTitle}>
                Gain valuable insights from briefcasts
            </div>
            </div>
        </div>
        <div className={styles.statisticsWrapper}>
            <div className={styles.statisticsContentHeader}>
            <div className={styles.statisticsHeading}>Enhance your knowledge</div>
            <div className={styles.statisticsHeading}>Achieve greater success</div>
            <div className={styles.statisticsHeading}>Improve your health</div>
            <div className={styles.statisticsHeading}>
                Develop better parenting skills
            </div>
            <div className={styles.statisticsHeading}>Increase happiness</div>
            <div className={styles.statisticsHeading}>
                Be the best version of yourself!
            </div>
            </div>
            <div className={styles.statisticsContentDetails}>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>93%</div>
                <div className={styles.statisticsDataTitle}>
                of Summarist members <b>significantly increase</b> reading
                frequency.
                </div>
            </div>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>96%</div>
                <div className={styles.statisticsDataTitle}>
                of Summarist members <b>establish better</b> habits.
                </div>
            </div>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>90%</div>
                <div className={styles.statisticsDataTitle}>
                have made <b>significant positive</b> change to their lives.
                </div>
            </div>
            </div>
        </div>
        <div className={styles.statisticsWrapper}>
            <div className={`${styles.statisticsContentDetails} ${styles.statisticsContentDetailsSecond}`}>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>91%</div>
                <div className={styles.statisticsDataTitle}>
                of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                </div>
            </div>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>94%</div>
                <div className={styles.statisticsDataTitle}>
                of Summarist members have <b>noticed an improvement</b> in
                their overall comprehension and retention of information.
                </div>
            </div>
            <div className={styles.statisticsData}>
                <div className={styles.statisticsDataNumber}>88%</div>
                <div className={styles.statisticsDataTitle}>
                of Summarist members <b>feel more informed</b> about current
                events and industry trends since using the platform.
                </div>
            </div>
            </div>
            <div className={`${styles.statisticsContentHeader} ${styles.statisticsContentHeaderSecond}`}>
            <div className={styles.statisticsHeading}>Expand your learning</div>
            <div className={styles.statisticsHeading}>Accomplish your goals</div>
            <div className={styles.statisticsHeading}>Strengthen your vitality</div>
            <div className={styles.statisticsHeading}>Become a better caregiver</div>
            <div className={styles.statisticsHeading}>Improve your mood</div>
            <div className={styles.statisticsHeading}>Maximize your abilities</div>
            </div>
        </div>
        </div>
    </div>
</section>
    )
}