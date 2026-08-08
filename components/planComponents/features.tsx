import styles from './features.module.css'
import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

export default function Features() {
    return (
        <div className={styles.plan__features_wrapper}>
            <div className={styles.plan__features}>
                <figure className={styles.plan__feature_icon_wrapper}>
                    <AiFillFileText />
                </figure>
                <div className={styles.plan__feature_text}>
                    <span className={styles.plan__feature_bold_text}>Key ideas in few min</span> with many<br/>
                    books to read
                </div>
            </div>

            <div className={styles.plan__features}>
                <figure className={styles.plan__feature_icon_wrapper}>
                    <RiPlantFill />
                </figure>
                <div className={styles.plan__feature_text}>
                    <span className={styles.plan__feature_bold_text}>3 million</span> people growing with<br/>
                    Summarist everyday
                </div>
            </div>

            <div className={styles.plan__features}>
                <figure className={styles.plan__feature_icon_wrapper}>
                    <FaHandshake />
                </figure>
                <div className={styles.plan__feature_text}>
                    <span className={styles.plan__feature_bold_text}>Precise recommendations</span><br/>
                    collections curated by experts
                </div>
            </div>
        </div>
    )
}