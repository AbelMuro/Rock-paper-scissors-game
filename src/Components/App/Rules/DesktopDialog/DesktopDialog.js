import React from 'react';
import {Dialog, DialogTitle, DialogContent, Stack} from '@mui/material';
import icons from './icons';
import styles from './styles.module.css';

function DesktopDialog({open, setOpen}) {
    return (                   
        <Dialog open={open}>
            <DialogTitle sx={{padding: '32px 32px 20px 32px'}} >
                <Stack flexDirection='row' justifyContent='space-between' width={'336px'}>
                    <h1 className={styles.rules_title}>
                        RULES
                    </h1>
                    <button className={styles.rules_close} onClick={setOpen}>
                        <img src={icons['closeIcon']} className={styles.rules_closeIcon}/>
                    </button>
                </Stack>
            </DialogTitle>
            <DialogContent sx={{padding: '0px 32px 47px 32px'}}>
                <img src={icons['rulesImage']} className={styles.rules_rulesImage}/>
            </DialogContent>
        </Dialog> 
    )
}

export default DesktopDialog;