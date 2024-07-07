import React from 'react'
import styles from "../About/AboutMe.module.css"
import developer from "../../../assets/developer.png"
import problemSolver from "../../../assets/problem-solving.png"
import teamPlayer from "../../../assets/teamwork.png"

const AboutMe = () => {

    return (
        <div id="about">
            <div style={{height: "10px"}}></div>
            <section className={`${styles.aboutSec}`}>
                <h1 className={`text-center ${styles.header}`}>About Me</h1>
                <div className={`${styles.aboutContent}`}>
                    <div className={`${styles.aboutContentMain}`}>
                        <h2 className={styles.contentTitle}>Get to know me!</h2>
                        <p className={`${styles.bio}`}>Hello World! My name is Melissa Velasquez Greene, 
                        and I am a full-stack developer from South Carolina. I am a and recent graduate of Flatiron School! 
                        Previously, I attended ISA College, earning my BS in Agricultural Engineering. During my time 
                        at ISA, I worked at LB Foods as a Quality Analyst for Fruits and Vegetables Exportation. 
                        I thoroughly enjoyed my tenure at LB Foods as it provided me with invaluable insights into the
                        workings of the exportation and production industry. Following my graduation from ISA, I pursued
                        a AS in Hotel Management at Caribbean University, where I gained a comprehensive understanding of 
                        hotel operations, management principles, and guest services.
                        </p>
                        <p className={`${styles.bio}`}>
                        I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then 
                        don't hesitate to contact me.
                        </p>
                    </div>
                    <div className={`${styles.aboutContentSkills}`}>
                        <h2 className={styles.contentTitle}>My Skills</h2>
                        <div className={styles.skills}>
                            <div className={styles.skillsBtn}>HTML</div>
                            <div className={styles.skillsBtn}>CSS</div>
                            <div className={styles.skillsBtn}>JavaScript</div>
                            <div className={styles.skillsBtn}>Python</div>
                            <div className={styles.skillsBtn}>React.js</div>
                            <div className={styles.skillsBtn}>Java</div>
                            <div className={styles.skillsBtn}>Flask</div>
                            <div className={styles.skillsBtn}>Express</div>
                            <div className={styles.skillsBtn}>Node.js</div>
                            <div className={styles.skillsBtn}>Bcrypt</div>
                            <div className={styles.skillsBtn}>Bootstrap</div>
                            <div className={styles.skillsBtn}>Material-UI</div>
                            <div className={styles.skillsBtn}>MySQL</div>
                            <div className={styles.skillsBtn}>Rest APIs</div>
                            <div className={styles.skillsBtn}>AWS</div>
                            <div className={styles.skillsBtn}>GIT</div>
                            <div className={styles.skillsBtn}>GitHub</div>
                            <div className={styles.skillsBtn}>VS Code</div>
                        </div>
                    </div>
                </div>
                <h1 className={`text-center ${styles.header}`}>What I Do</h1>
                <div className={`${styles.row}`}>
                    <div className={styles.imgBox}>
                        <img src={developer} alt="developer" className={styles.aboutImg}/>
                        <h2>Development</h2>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={problemSolver} alt="problem solver" className={styles.aboutImg}/>
                        <h2>Problem Solving</h2>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={teamPlayer} alt="team player" className={styles.aboutImg}/>
                        <h2>Collaboration</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe