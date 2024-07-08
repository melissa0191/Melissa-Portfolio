import React from 'react'
import styles from "../Footer/Footer.module.css"
import mailIcon from "../../../assets/mail.png"

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.mainContainer}>
                <div className={styles.footerUpper}>
                    <div className={`${styles.footerRow} ${styles.footerRowOne}`}>
                        <h2 className={`${styles.headingSm}`}>
                            <span>Social</span>
                        </h2>
                        <div className={styles.footerSocial}>
                            <a target="_blank" href="https://www.linkedin.com/in/melissavg/" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                                alt="Melissa Velasquez  LinkedIn Profile" />
                            </a>
                            <a target="_blank" href="https://github.com/melissa0191/melissa0191" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                                alt="Melissa Velasquez GitHub Profile" />
                            </a>
                            <a target="_blank" href="melissa0191@outlook.es" rel="noopener noreferrer">
                                <img className={styles.footerIcon} src={mailIcon} id={styles.mailIcon}
                                alt="Melissa Velasquez Direct Email Message" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerRowTwo}>
                        <h2 className={`${styles.headingTwo}`}>Melissa Velasquez</h2>
                    </div>
                </div>
            <div className={styles.footerLower}>
                © Copyright 2024. Made by Melissa Velasquez
            </div>
            </div>
        </footer>
    )
}

export default Footer