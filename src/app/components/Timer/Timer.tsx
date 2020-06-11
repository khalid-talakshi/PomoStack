import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import TimerDialogue from "../TimerDialogue";
import { TimeSetting } from "../../constants/enums";

export interface Props {
  workTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  workTimeString: string;
  shortBreakTimeString: string;
  longBreakTimeString: string;
  playNotificationSound: () => void;
}

function Timer({
  workTime,
  shortBreakTime,
  longBreakTime,
  workTimeString,
  shortBreakTimeString,
  longBreakTimeString,
  playNotificationSound,
}: Props) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeState, setTimeState] = useState(TimeSetting.work);
  const [numWorkTimes, setNumWorkTimes] = useState(1);
  const [endTime, setEndTime] = useState(workTime);

  const startTimer = () => {
    console.log(endTime);
    console.log(timeState === TimeSetting.work ? workTime : shortBreakTime);
    console.log(numWorkTimes);
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

  const pickTimeString = () => {
    if (timeState === TimeSetting.work) {
      return workTimeString;
    } else if (timeState === TimeSetting.shortBreak) {
      return shortBreakTimeString;
    } else if (timeState === TimeSetting.longBreak) {
      return longBreakTimeString;
    }
  };

  useEffect(() => {
    let interval: any = null;
    if (timeState === TimeSetting.work) {
      setEndTime(workTime);
    } else if (timeState === TimeSetting.shortBreak) {
      setEndTime(shortBreakTime);
    } else if (timeState === TimeSetting.longBreak) {
      setEndTime(longBreakTime);
    }
    if (seconds === endTime && endTime !== 0) {
      playNotificationSound();
      if (timeState === TimeSetting.work) {
        setNumWorkTimes((currentTime) => currentTime + 1);
        if (numWorkTimes === 4) {
          setTimeState(TimeSetting.longBreak);
          setNumWorkTimes(0);
          setEndTime(longBreakTime); //TODO: change to longBreakTime
        } else {
          setTimeState(TimeSetting.shortBreak);
          setEndTime(shortBreakTime);
        }
      } else if (timeState === TimeSetting.shortBreak || timeState === TimeSetting.longBreak) {
        setTimeState(TimeSetting.work);
        setEndTime(workTime);
      }
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
  }, [
    isActive,
    seconds,
    endTime,
    timeState,
    numWorkTimes,
    shortBreakTime,
    setEndTime,
    workTime,
    longBreakTime,
    playNotificationSound,
  ]);

  return (
    <>
      <Paper>
        <Card>
          <CardContent>
            <Typography variant="h6">Curent Phase: {timeState}</Typography>
            <Typography variant={"h4"}>
              {Math.floor(seconds / 60)}:
              {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60} /{" "}
              {pickTimeString()}
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
