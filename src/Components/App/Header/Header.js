import React from 'react';
import ScoreBoard from './ScoreBoard';
import styles from './styles.module.css';
import images from './images';

function Header() {
    return(
        <header className={styles.header}>
            <img className={styles.header_logo} src={images.logo} alt='rock paper scissors lizard spock'/>
            <ScoreBoard/>
        </header>
    )
}

export default Header;