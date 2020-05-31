import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Button,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import TimerDialogue from "../TimerDialogue";

export interface Props {
  endTime: number;
  workTimeString: string;
}

function Timer({ endTime, workTimeString }: Props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const startTimer = () => {
    setActive(true);
  };

  const toggleTimer = () => {
    setActive(!isActive);
  };

  const resetTimer = () => {
    setActive(false);
    setSeconds(0);
  };

  const handleStartStop = () => {
    if (isActive) {
      resetTimer();
    } else {
      startTimer();
    }
  };

  const handleClose = () => {
    setFinished(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (seconds === endTime && endTime !== 0) {
      setFinished(true);
      resetTimer();
    } else if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, endTime]);

  return (
    <>
      <Paper>
        <Card>
          <CardContent>
            <Typography variant="h6">Work Timer</Typography>
            <Typography variant={"h4"}>
              {Math.floor(seconds / 60)}:
              {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60} /{" "}
              {workTimeString}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(seconds / endTime) * 100}
            />
          </CardContent>
          <CardActions style={{ marginTop: 0 }}>
            <Button size="small" onClick={handleStartStop}>
              {isActive ? "Stop" : "Start"}
            </Button>
            <Button
              size="small"
              onClick={toggleTimer}
              disabled={!isActive && seconds === 0}
            >
              {isActive ? "Pause" : "Resume"}
            </Button>
          </CardActions>
        </Card>
      </Paper>
      <TimerDialogue show={finished} close={handleClose} />
    </>
  );
}

export default Timer;
