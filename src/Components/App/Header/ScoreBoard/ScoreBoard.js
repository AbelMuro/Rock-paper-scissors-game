import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';



function ScoreBoard(){
    const score = useSelector(state => state.score);

    return(
        <section className={styles.scoreBoard}>
            <h2 className={styles.scoreBoard_title}>
                SCORE
            </h2>
            <div className={styles.scoreBoard_score}>
                {score}
            </div>
        </section>
    )
}

export default ScoreBoard;
