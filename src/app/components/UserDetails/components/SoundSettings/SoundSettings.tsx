import React, { useState } from "react";
import {
    Typography,
    Grid,
    Select,
    MenuItem,
} from "@material-ui/core";

import './SoundSettings.scss';

export interface Props {
    handleChangeSound: (data: string) => void;
}

function SoundSettings({handleChangeSound}: Props) {
    const[soundVal, setSoundVal] = useState('fillingYourInbox');
    const handleSoundChange = (val: string) => {
        setSoundVal(val);
        handleChangeSound(val);
    }

    return (
        <>
            <Typography variant={'h5'} className={'title'}>Sound Settings</Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant={'h6'}>Notification Sound</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select
                        label="Sound"
                        id="demo-simple-select"
                        value={soundVal}
                        onChange={(e) => { handleSoundChange(String(e.target.value)) }}
                    >
                        <MenuItem value={'fillingYourInbox'}>Filling Your Inbox</MenuItem>
                        <MenuItem value={'justLikeMagic'}>Just Like Magic</MenuItem>
                        <MenuItem value={'maybeOneDay'}>Maybe One Day</MenuItem>
                        <MenuItem value={'openUp'}>Open Up</MenuItem>
                        <MenuItem value={'pristine'}>Pristine</MenuItem>
                        <MenuItem value={'swiftly'}>Swiftly</MenuItem>
                        <MenuItem value={'thatWasQuick'}>That Was Quick</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </>
    )
}

export default SoundSettings;