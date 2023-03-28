import React, {useState} from 'react';
import {useMediaQuery} from '@mui/material';
import MobileDialog from './MobileDialog';
import DesktopDialog from './DesktopDialog';
import styles from './styles.module.css';

function Rules() {
    const [openDialog, setOpenDialog] = useState(false);
    const mobile = useMediaQuery('(max-width: 460px)');

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    return(
        <>
            <button className={styles.rules_button} onClick={handleDialog}>
                RULES
            </button>

            {mobile ? 
                    <MobileDialog open={openDialog} setOpen={handleDialog}/>
                        :
                    <DesktopDialog open={openDialog} setOpen={handleDialog}/>
            }
        </>
    )
}

export default Rules;