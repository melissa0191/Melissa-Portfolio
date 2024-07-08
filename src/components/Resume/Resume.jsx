import React from 'react'
import styles from "../Resume/Resume.module.css"

const Resume = () => {

    return (
        <>
        <section className={styles.resumeSec}>
            <div className={styles.container}>
                <div className={`${styles.row}`}>
                    <div>
                        <article>
                            <h1 className={styles.header}>Resume</h1>
                            <p className={styles.top}>
                                Reach out to me via my <a target="_blank" href="https://www.linkedin.com/in/melissavg/" rel="noopener noreferrer">
                                        LinkedIn</a>! <a target="_blank" href="https://docs.google.com/document/d/1Wb6T3dppMqeIbTMr-8DrlBWamthJ_Af1Y5TjfXalyZA/edit?usp=sharing" rel="noopener noreferrer">
                                    view
                                </a> or <a href="https://drive.google.com/file/d/14zpV6w2vfDhpzutGZShJEPY8XcB9fyL4/view?usp=download">
                                    download
                                </a> the resume.
                            </p>
                        </article>
                        <iframe src="https://docs.google.com/document/d/1Wb6T3dppMqeIbTMr-8DrlBWamthJ_Af1Y5TjfXalyZA/preview" className={styles.resumeDoc} allow="autoplay" title="Melissa's Resume 2024"></iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume