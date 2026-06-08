import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import styles from '@/components/sections/numbers.module.css'

export default function Numbers() {
    return (
        <section id="numbers">
            <div className="container">
                <div className="row">
                    <div className="section__title">Start growing with Summarist now</div>
                    <div className={styles.numbersWrapper}>
                    <div className={styles.numbers}>
                        <div className={styles.numbersIcon}>
                        <BiCrown />
                        </div>
                        <div className={styles.numbersTitle}>3 Million</div>
                        <div className={styles.numbersSubTitle}>Downloads on all platforms</div>
                    </div>
                    <div className={styles.numbers}>
                        <div className={`${styles.numbersIcon} ${styles.numbersStarIcon}`}>
                        <BsStarFill />
                        <BsStarHalf />
                        </div>
                        <div className={styles.numbersTitle}>4.5 Stars</div>
                        <div className={styles.numbersSubTitle}>
                        Average ratings on iOS and Google Play
                        </div>
                    </div>
                    <div className={styles.numbers}>
                        <div className={styles.numbersIcon}>
                        <RiLeafLine />
                        </div>
                        <div className={styles.numbersTitle}>97%</div>
                        <div className={styles.numbersSubTitle}>
                        Of Summarist members create a better reading habit
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}