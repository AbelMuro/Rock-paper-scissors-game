import React from 'react';
import styles from './styles.module.css';

function ScoreBoard(){
    return(
        <section className={styles.scoreBoard}>
            <h2 className={styles.scoreBoard_title}>
                SCORE
            </h2>
            <div className={styles.scoreBoard_score}>
                12
            </div>
        </section>
    )
}

export default ScoreBoard;
