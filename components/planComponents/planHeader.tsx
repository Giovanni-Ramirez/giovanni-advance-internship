import styles from './planHeader.module.css';
import Image from 'next/image';
import headerImg from '@/assets/pricing-top.png';

export default function PlanHeader () {
    return (
        <div className={styles.plan__header_wrapper}>
            <div className={styles.plan__header_container}>
                <div className={styles.plan__header_title}>Get unlimited access to many amazing books to read</div>
                <div className={styles.plan__header_sub_title}>Turn ordinary moments into amazing learning opportunities</div>
                <figure className={styles.plan__header_img_wrapper}>
                    <Image className={styles.plan__header_img} src={headerImg} alt="Pricing top image" />
                </figure>
            </div>
        </div>
    )
}