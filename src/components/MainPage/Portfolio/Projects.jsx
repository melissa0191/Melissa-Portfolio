import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"

const Projects = (props) => {

    return (
        <div>
            <div className={styles.front}>
                <div className={props.toggleState === 1 ? styles.activeContent : styles.portfolioContent}>
                    <h2>Gourmet Guidebook</h2>
                    <p>As a full-stack developer with a tremendous passion for cooking healthy meals, I programmed this Gourmet Guidebook to 
                    combine my interests in cooking and software development. This web application is designed to help users manage their
                    recipes efficiently, offering a seamless interface for adding, organizing, and retrieving recipes. By leveraging 
                    the power of Flask for the backend and React for the frontend, I aimed to deliver a user-friendly and robust solution 
                    for home cooks and culinary enthusiasts.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    Python - Flask - MySQL - Bycrpt - Cookbook's API - JSON - JavaScript - CSS - HTML
                    </p>
                    <div className={`${styles.bottom}`}>
                        {/* add picture of project here */}
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/melissa0191/-Gourmet-Guidebook--project" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>

                <div className={props.toggleState === 2 ? styles.activeContent : styles.portfolioContent}>
                    <h2>Dance Party Playlist</h2>
                    <p>The Dance Party Playlist project was created to provide a seamless and interactive way for users to manage and enjoy 
                    their music collections. Collaborating with two other developers, we aimed to design an intuitive user
                    interface that fetches and displays track data from a local server, complete with album art and details.
                    The app allows users to rate tracks, navigate through their playlists using keyboard shortcuts, and dynamically
                    update the playlist through CRUD operations with the Fetch API. This project showcases our ability to integrate
                    server communication and responsive UI design to enhance the user experience.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    JavaScript - React - CSS - HTML
                    </p>
                       {/* add picture of project here */}
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/stevenfmentzer/Dance-Party-Playlist" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>

                <div className={props.toggleState === 3 ? styles.activeContent : styles.portfolioContent}>
                    <h2>Vacation Time</h2>
                    <p>This project was created in a one-week sprint with two other software developers. The inspiration behind this project 
                    was to develop a web application that allows users to share their experiences and rate vacation spots. Using React, 
                    JavaScript, CSS, and HTML, we aimed to build a platform where users can seamlessly View, Comment, and Delete the Travel
                    location. The app features various routes, including a home page for featured destinations, and an explore page for browsing
                    different travel packages.. This project showcases our ability to implement user stories and create a user-friendly 
                    interface with React Router.</p>
                    <h3>Programmed With:</h3>
                    <p className={styles.techNames}>
                    JavaScript - React - CSS - HTML
                    </p>
                        {/* add picture of project here */}
                        <div>
                            <a className={`${styles.sourceBtn} ${styles.hvrForward}`} target="_blank" 
                            href="https://github.com/irakush/vacation-time" rel="noopener noreferrer">View Source Code</a>
                        </div>
                    </div>
                </div>
    )
}

export default Projects