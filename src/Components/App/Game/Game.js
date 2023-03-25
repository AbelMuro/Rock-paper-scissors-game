import React from 'react';
import GameToken from './../GameToken';
import styles from './styles.module.css';

function Game() {
    return(
        <div className={styles.game}>
            <GameToken tokenChoosen='scissors'/>
            <GameToken tokenChoosen='paper'/>
            <GameToken tokenChoosen='rock'/>
            <GameToken tokenChoosen='lizard'/>
            <GameToken tokenChoosen='spock'/>
        </div>
    )
}

export default Game;