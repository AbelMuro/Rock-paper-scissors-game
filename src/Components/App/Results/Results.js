import React, {useState, useEffect} from 'react';
import CheckRules from './CheckRules';
import GameToken from './../GameToken';
import styles from './styles.module.css';
import {useLocation} from 'react-router-dom';
function Results() {
    const {state} = useLocation();
    const userChoice = state;
    const [houseChoice, setHouseChoice] = useState('');    
    const [displayHouseChoice, setDisplayHouseChoice] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const [results, setResults] = useState('')

    useEffect(() => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 5);
            
            if(randomNumber == 0) {
                setHouseChoice('scissors');
                setDisplayHouseChoice(true);
            }
            else if(randomNumber == 1){
                setHouseChoice('paper');
                setDisplayHouseChoice(true);
            }
            else if(randomNumber == 2){
                setHouseChoice('rock');
                setDisplayHouseChoice(true);
            }
            else if(randomNumber == 3){
                setHouseChoice('lizard');
                setDisplayHouseChoice(true);
            }
            else if(randomNumber == 4){
                setHouseChoice('spock');
                setDisplayHouseChoice(true);
            }
        }, 2000)
    }, [])

    useEffect(() => {
        if(!houseChoice) return;

        setTimeout(() => {
            const result = CheckRules(userChoice, houseChoice);
            setResults(result);
            setDisplayResults(true);
        }, 1000)

    }, [houseChoice])

    return(
        <main className={styles.results}>
            <div className={styles.results_token}>
                <h2 className={styles.results_title}>
                    YOU PICKED
                </h2>
                <div className={styles.results_tokenContainer}>
                    <GameToken tokenChoosen={userChoice}/>
                </div> 
            </div>
            {
                displayResults ? 
                <div className={styles.results_message}>
                    <h1 className={styles.results_messageTitle}>
                        {results}
                    </h1>
                    <button className={styles.results_playAgain}>
                        PLAY AGAIN
                    </button>
                </div> : <></>
            }
            <div className={styles.results_token}>
                <h2 className={styles.results_title}>
                    THE HOUSE PICKED
                </h2>
                <div className={styles.results_tokenContainer}>
                    {displayHouseChoice ? 
                        <GameToken tokenChoosen={houseChoice}/> : 
                        <div className={styles.blackCircle}></div> 
                    }
                </div>
            </div>

        </main>
    )
}

export default Results;