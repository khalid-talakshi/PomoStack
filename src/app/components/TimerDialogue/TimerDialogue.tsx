import React from 'react'
import { Dialog, Typography, DialogContent } from '@material-ui/core'

export interface Props {
    show: boolean
    close: () => void
}

function TimerDialogue({show, close} : Props) {
    return(
        <Dialog open={show} onBackdropClick={close}>
            <DialogContent>
            <Typography variant="h6">Timer Done!</Typography>
            </DialogContent>
        </Dialog>
    )
}

export default TimerDialogue;