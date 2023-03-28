import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Stack, useMediaQuery} from '@mui/material';
import icons from './icons';
import styles from './styles.module.css';

function Rules() {
    const [openDialog, setOpenDialog] = useState(false);
    const mobile = useMediaQuery('(max-width: 460px)')

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    }

    return(
        <>
            <button className={styles.rules_button} onClick={handleDialog}>
                RULES
            </button>

            <Dialog open={openDialog}>
                <DialogTitle sx={{padding: '32px 32px 20px 32px'}}>
                    <Stack flexDirection='row' justifyContent='space-between' width={'336px'}>
                        <h1 className={styles.rules_title}>
                            RULES
                        </h1>
                        <button className={styles.rules_close} onClick={handleDialog}>
                            <img src={icons['closeIcon']} className={styles.rules_closeIcon}/>
                        </button>
                    </Stack>
                </DialogTitle>
                <DialogContent sx={{padding: '0px 32px 47px 32px'}}>
                    <img src={icons['rulesImage']} className={styles.rules_rulesImage}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Rules;