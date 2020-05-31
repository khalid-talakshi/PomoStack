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
} from "@material-ui/core";

export interface Props {
  name: string;
  workTimeString: string;
  shortBreakTimeString: string;
  longBreakTimeString: string;
  handleChangeWorkTimeString: (data: string) => void;
  handleChangeShortBreakTimeString: (data: string) => void;
  handleChangeLongBreakTimeString: (data: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

function UserDetails({
  name,
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
    <Card style={{ height: "auto" }}>
      <CardContent>
        <Typography variant="h6">User Details and Settings</Typography>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">
          Work Time: {workTimeString}, Short Break Time: {shortBreakTimeString},
          Long Break Time: {longBreakTimeString}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h6">Update Timer Settings</Typography>
        <form className={classes.root}>
          <TextField
            id="workTimeInput"
            label="Work Time (in minutes)"
            onChange={(e) => {
              if (formatTimePattern.test(e.target.value)) {
                handleChangeWorkTimeString(e.target.value);
              }
            }}
          />
          <TextField
            id="shortBreakTimeInput"
            label="Short Break Time"
            onChange={(e) => {
              if (formatTimePattern.test(e.target.value)) {
                handleChangeShortBreakTimeString(e.target.value);
              }
            }}
          />
          <TextField
            id="longBreakTimeInput"
            label="Long Break Time"
            onChange={(e) => {
              if (formatTimePattern.test(e.target.value)) {
                handleChangeLongBreakTimeString(e.target.value);
              }
            }}
          />
        </form>
      </CardActions>
    </Card>
  );
}

export default UserDetails;
