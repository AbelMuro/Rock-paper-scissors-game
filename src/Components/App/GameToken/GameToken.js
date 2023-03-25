import React, {useEffect, useRef, useCallback} from 'react';
import icons from './icons';
import styles from './styles.module.css';

function GameToken({tokenChoosen}) {


    const tokenRef = useCallback((ref) => {
        if(!ref) return;

        const tokenShadow = ref;
        const token = ref.childNodes[0];
        const tokenSymbol = token.childNodes[0];

        if(tokenChoosen == 'scissors'){
            tokenShadow.classList.add(styles.game_yellowShadow);
            token.classList.add(styles.game_yellowToken);
            tokenSymbol.classList.add(styles.game_scissors);
        }
        else if(tokenChoosen == 'paper'){
            tokenShadow.classList.add(styles.game_darkBlueShadow);
            token.classList.add(styles.game_darkBlueToken);
            tokenSymbol.classList.add(styles.game_paper);
        }
        else if(tokenChoosen == 'rock'){
            tokenShadow.classList.add(styles.game_redShadow);
            token.classList.add(styles.game_redToken);
            tokenSymbol.classList.add(styles.game_rock);
        }
        else if(tokenChoosen == 'lizard'){
            tokenShadow.classList.add(styles.game_purpleShadow);
            token.classList.add(styles.game_purpleToken);
            tokenSymbol.classList.add(styles.game_lizard);
        }
        else if(tokenChoosen == 'spock'){
            tokenShadow.classList.add(styles.game_lightBlueShadow);
            token.classList.add(styles.game_lightBlueToken);
            tokenSymbol.classList.add(styles.game_spock);
        }
        
    }, [])


    return(            
        <div ref={tokenRef}>
            <div>
                <img src={icons[tokenChoosen]} alt={tokenChoosen}/> 
            </div>
        </div>
    )
} 

export default GameToken;