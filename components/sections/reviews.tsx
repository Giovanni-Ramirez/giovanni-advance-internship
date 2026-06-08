import { BsStarFill } from "react-icons/bs";
import styles from '@/components/sections/reviews.module.css'

export default function landing() {
    return (
        <section id="reviews">
            <div className="row">
                <div className="container">
                <div className="section__title">What our members say</div>
                <div className={styles.reviewsWrapper}>
                    <div className={styles.review}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.reviewName}>Hanna M.</div>
                        <div className={styles.reviewStars}>
                        <BsStarFill />
                        </div>
                    </div>
                    <div className={styles.reviewBody}>
                        This app has been a <b>game-changer</b> for me! It&apos;s saved me so
                        much time and effort in reading and comprehending books. Highly
                        recommend it to all book lovers.
                    </div>
                    </div>
                    <div className={styles.review}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.reviewName}>David B.</div>
                        <div className={styles.reviewStars}>
                        <BsStarFill />
                        </div>
                    </div>
                    <div className={styles.reviewBody}>
                        I love this app! It provides
                        <b>concise and accurate summaries</b> of books in a way that is
                        easy to understand. It&apos;s also very user-friendly and intuitive.
                    </div>
                    </div>
                    <div className={styles.review}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.reviewName}>Nathan S.</div>
                        <div className={styles.reviewStars}>
                        <BsStarFill />
                        </div>
                    </div>
                    <div className={styles.reviewBody}>
                        This app is a great way to get the main takeaways from a book
                        without having to read the entire thing.
                        <b>The summaries are well-written and informative.</b>
                        Definitely worth downloading.
                    </div>
                    </div>
                    <div className={styles.review}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.reviewName}>Ryan R.</div>
                        <div className={styles.reviewStars}>
                        <BsStarFill />
                        </div>
                    </div>
                    <div className={styles.reviewBody}>
                        If you&apos;re a busy person who
                        <b>loves reading but doesn&apos;t have the time</b> to read every
                        book in full, this app is for you! The summaries are thorough
                        and provide a great overview of the book&apos;s content.
                    </div>
                    </div>
                </div>
                <div className={styles.reviewsBtnWrapper}>
                    <button className={`btn homeCtaBtn`}>Login</button>
                </div>
                </div>
            </div>
        </section>
    )
}