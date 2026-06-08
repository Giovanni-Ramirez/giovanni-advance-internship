import styles from '@/components/footer.module.css'

export default function Footer() {
    return (
        <section id="footer">
        <div className="container">
            <div className="row">
            <div className={styles.footerTopWrapper}>
                <div className={styles.footerBlock}>
                <div className={styles.footerLinkTitle}>Actions</div>
                <div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Summarist Magazine</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Cancel Subscription</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Help</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Contact us</a>
                    </div>
                </div>
                </div>
                <div className={styles.footerBlock}>
                <div className={styles.footerLinkTitle}>Useful Links</div>
                <div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Pricing</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Summarist Business</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Gift Cards</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Authors & Publishers</a>
                    </div>
                </div>
                </div>
                <div className={styles.footerBlock}>
                <div className={styles.footerLinkTitle}>Company</div>
                <div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>About</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Careers</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Partners</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Code of Conduct</a>
                    </div>
                </div>
                </div>
                <div className={styles.footerBlock}>
                <div className={styles.footerLinkTitle}>Other</div>
                <div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Sitemap</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Legal Notice</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Terms of Service</a>
                    </div>
                    <div className={styles.footerLinkWrapper}>
                    <a className={styles.footerLink}>Privacy Policies</a>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.footerCopyrightWrapper}>
                <div className={styles.footerCopyright}>
                Copyright &copy; 2023 Summarist.
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}