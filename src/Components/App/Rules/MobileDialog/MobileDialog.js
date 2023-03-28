import React, {useEffect} from 'react';
import icons from './icons';
import styles from './styles.module.css';

function MobileDialog({open, setOpen}) {

    const handleClick = () => {
        setOpen(false);
    }


    useEffect(() => {
        const modal = document.querySelector('.' + styles.mobileDialog);

        if(open)
            modal.style.display = 'block';
        else
            modal.style.display = ''
    }, [open])

    return(
        <section className={styles.mobileDialog}>
            <h1 className={styles.mobileDialog_title}>
                RULES
            </h1>
            <img src={icons['rulesImage']} className={styles.mobileDialog_rulesImage}/>
            <button className={styles.mobileDialog_closeButton} onClick={handleClick}>
                <img src={icons['closeIcon']}className={styles.mobileDialog_closeIcon}/>  
            </button>
        </section>
    )
}

export default MobileDialog;