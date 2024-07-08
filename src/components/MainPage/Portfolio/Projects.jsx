import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"

const Projects = (props) => {

    return (
        <div>
            <div className={styles.front}>
                <div className={props.toggleState === 1 ? styles.activeContent : styles.portfolioContent}>
                    <h2>VacationTime</h2>
                    <p>As a full-stack developer with a tremendous passion of traveling and front-end design, I've created an app where users can share 
                    their travel experiences and rate destinations they've visited. With features for creating, reading, updating, and deleting travel plans seamlessly.
                     Users can explore featured destinations, browse packages, and manage their profiles to personalize their travel journey, I took much care into the
                     front-end design in order to provide users with a modern and attractice booking website and stand out from others.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    MySQL  - React.js - Hotel's API - JSON - JavaScript - CSS - HTML
                    </p>
                    <div className={`${styles.bottom}`}>
                        <div className={styles.back}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JcKu3Ay256A" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/evelynvalles/Travel.com-Python-Project" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>

                <div className={props.toggleState === 2 ? styles.activeContent : styles.portfolioContent}>
                    <h2>SneakerHead</h2>
                    <p>A full-stack MERN e-commerce website allowing users to browse, shop, and checkout their favorite sneakers.
                    The inspiration behind this project was behind my love for shopping, admiration for modern e-commerce 
                    websites using single-page software and tools, and love for shoes like Jordan and Nike.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    React.js - Commerce.js - Stripe API - React-hook-form - Material-UI - CSS - JSX - JavaScript - Node.js
                    </p>
                    <div className={`${styles.bottom}`}>
                        <div className={styles.back}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y7MSQ2FJFfU" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/evelynvalles/SneakerHead-E-Commerce-Store" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>

                <div className={props.toggleState === 3 ? styles.activeContent : styles.portfolioContent}>
                    <h2>CodeLifter</h2>
                    <p>This project was created in a one-week sprint with another software developer. The inspiration behind this project 
                    came from the idea that we wanted to create a sense of community for people who are trying to break into software 
                    development from non-traditional backgrounds. Therefore, a platform was established where website visitors can share
                    experiences and exchanging ideas via forming/joining study groups, creating/commenting on posts regarding jobs, 
                    interview preparation, lifestyle, and success stories.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    Java - Spring - Spring Boot - Spring Security - Bycrpt - JSP - MySQL - Spring Data JPA - Java Mail Sender - CSS
                    </p>
                    <div className={`${styles.bottom}`}>
                        <div className={styles.back}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TLVrTsRbfww" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                        </div>
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/jingwenl0718/CodeLifter" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects