import React from "react";
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    TextField,
    makeStyles,
    Theme,
    createStyles,
    Grid,
} from "@material-ui/core";

export interface Props {
    workTimeString: string;
    shortBreakTimeString: string;
    longBreakTimeString: string;
    handleChangeWorkTimeString: (data: string) => void;
    handleChangeShortBreakTimeString: (data: string) => void;
    handleChangeLongBreakTimeString: (data: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridText: {
            display: "flex",
            alignItems: "flex-end",
        }
    })
);

function TimerSettings({
    workTimeString,
    handleChangeWorkTimeString,
    shortBreakTimeString,
    handleChangeShortBreakTimeString,
    longBreakTimeString,
    handleChangeLongBreakTimeString,
}: Props) {
    const formatTimePattern = RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={6} className={classes.gridText}>
                <Typography variant="h6">
                    Work Time: {workTimeString}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="workTimeInput"
                    label="Work Time (in minutes)"
                    onChange={(e) => {
                        if (formatTimePattern.test(e.target.value)) {
                            handleChangeWorkTimeString(e.target.value);
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6} className={classes.gridText}>
                <Typography variant="h6">
                    Short Break Time: {shortBreakTimeString}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="shortBreakTimeInput"
                    label="Short Break Time"
                    onChange={(e) => {
                        if (formatTimePattern.test(e.target.value)) {
                            handleChangeShortBreakTimeString(e.target.value);
                        }
                    }}
                />
            </Grid>
            <Grid item xs={6} className={classes.gridText}>
                <Typography variant="h6">
                    Long Break Time: {longBreakTimeString}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="longBreakTimeInput"
                    label="Long Break Time"
                    onChange={(e) => {
                        if (formatTimePattern.test(e.target.value)) {
                            handleChangeLongBreakTimeString(e.target.value);
                        }
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default TimerSettings;