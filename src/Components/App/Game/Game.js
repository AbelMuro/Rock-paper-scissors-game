import React from 'react';
import GameToken from './../GameToken';
import styles from './styles.module.css';

function Game() {
    return(
        <main className={styles.game}>
            <div className={styles.game_tokenScissors}>
                <GameToken tokenChoosen='scissors' />                
            </div>
            <div className={styles.game_tokenPaper}>
                <GameToken tokenChoosen='paper' />                
            </div>
            <div className={styles.game_tokenRock}>
                <GameToken tokenChoosen='rock' />                
            </div>
            <div className={styles.game_tokenLizard}>
                <GameToken tokenChoosen='lizard' />                
            </div>
            <div className={styles.game_tokenSpock}>
                <GameToken tokenChoosen='spock' />
            </div>
        </main>
    )
}

export default Game;