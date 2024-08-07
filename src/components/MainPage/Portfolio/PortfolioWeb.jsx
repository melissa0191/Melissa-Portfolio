import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Projects from './Projects'

const PortfolioWeb = (props) => {

    return (
    <div className={styles.PortfolioWeb}>
        <div className={styles.portfolio}>
            <div className={styles.sideTabs}>
                <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 1 && styles.activeTab}`}
                onClick={() => props.toggleTab(1)}>Gourmet Guidebook</div>
                <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 2 && styles.activeTab}`}
                onClick={() => props.toggleTab(2)}>Dance Party Playlist</div>
                <div className={`${styles.tabs} ${styles.hvrShrink} ${props.toggleState === 3 && styles.activeTab}`}
                onClick={() => props.toggleTab(3)}>Vacation Time</div>
            </div>
            <div className={`${styles.box}`}>
                <Projects toggleState={props.toggleState}/>
            </div>
        </div>
    </div>
    )
}

export default PortfolioWeb