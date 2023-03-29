import React, {useState, useEffect} from 'react';
import CheckRules from './CheckRules';
import GameToken from './../GameToken';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';


function Results() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();
    const userChoice = state;
    const [houseChoice, setHouseChoice] = useState('');    
    const [displayHouseChoice, setDisplayHouseChoice] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const [results, setResults] = useState('');

    const handlePlayAgain = () => {
        navigate('/');
    }

    //this will generate a random token for the house
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

    //this will display the results
    useEffect(() => {
        if(!houseChoice) return;

        setTimeout(() => {
            const result = CheckRules(userChoice, houseChoice);
            setResults(result);
            setDisplayResults(true);
        }, 1000)

    }, [houseChoice])

//this will style the token that won, the token will have 3 transparent rings surrounding it
    useEffect(() => {
        if(!results) return;
        if(results == 'You Win'){
            const userToken = document.querySelector('#userToken');
            userToken.classList.add(styles.results_victoryRing);
        }
        else if(results == 'You Lose'){
            const houseToken = document.querySelector('#houseToken');
            houseToken.classList.add(styles.results_victoryRing);
        }
    }, [results])

//this will dispatch an action to the reducer, which will update the score board
    useEffect(() => {
        if(!results) return;
        if(results != 'You Win') return;
        dispatch({type: 'update score'});
    }, [results])

    useEffect(() => {
        if(!results) return;
        window.scrollTo(0, 500);
    }, [results])

    return(
        <main className={styles.container}>
            <section className={styles.results}>
                <div className={styles.results_token}>
                    <h2 className={styles.results_title}>
                        YOU PICKED
                    </h2>
                    <div id='userToken'>     
                        <div className={styles.results_tokenContainer}>
                            <GameToken tokenChoosen={userChoice} 
                                borderWidth='35px' 
                                top='-13px' 
                                padding='13px'
                                mobileBorderWidth='17px'
                                mobileTop='-8px'
                                mobilePadding='8px'
                                />
                        </div> 
                    </div>                
                </div>
                {displayResults ? 
                    <div className={styles.results_message}>
                        <h1 className={styles.results_messageTitle}>
                            {results}
                        </h1>
                        <button className={styles.results_playAgain} onClick={handlePlayAgain}>
                            PLAY AGAIN
                        </button>
                    </div> : <></>
                }
                <div className={styles.results_token}>
                    <h2 className={styles.results_title}>
                        THE HOUSE PICKED
                    </h2>
                    <div id='houseToken'>
                        <div className={styles.results_tokenContainer}>
                            {displayHouseChoice ? 
                                <GameToken 
                                    tokenChoosen={houseChoice} 
                                    borderWidth='35px' 
                                    top='-13px' 
                                    padding='13px'
                                    mobileBorderWidth='17px'
                                    mobileTop='-8px'
                                    mobilePadding='8px'
                                    /> :
                                <div className={styles.blackCircle}></div> 
                            }
                        </div>                            
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Results;