import React from 'react';
import ScoreBoard from './ScoreBoard';
import styles from './styles.module.css';
import images from './images';
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return(
        <header className={styles.header}>
            <img className={styles.header_logo} src={images.logo} alt='rock paper scissors lizard spock' onClick={handleClick}/>
            <ScoreBoard/>
        </header>
    )
}

export default Header;