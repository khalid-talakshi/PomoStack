/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import * as themeUI from "./constants/themes";

import { Timer, UserDetails } from "./components";
import { Sounds } from './constants/enums';

import useSound from 'use-sound';
const fillingYourInbox = require('../assets/sounds/filling-your-inbox.mp3');
const justLikeMagic = require('../assets/sounds/just-like-magic.mp3');
const maybeOneDay = require('../assets/sounds/maybe-one-day.mp3');

function App() {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(20 * 60);
  const [workTimeString, setWorkTimeString] = useState("25:00");
  const [shortBreakTimeString, setShortBreakTimeString] = useState("5:00");
  const [longBreakTimeString, setLongBreakTimeString] = useState("20:00");
  const [sound, setSound] = useState(Sounds.fillingYourInbox);

  const [playFillingYourInbox] = useSound(fillingYourInbox);
  const [playJustLikeMagic] = useSound(justLikeMagic);
  const [playMaybeOneDay] = useSound(maybeOneDay)

  const handleChangeWorkTimeString = (timeString: string) => {
    setWorkTimeString(timeString);
  };

  const handleChangeShortBreakTimeString = (timeString: string) => {
    setShortBreakTimeString(timeString);
  };

  const handleChangeLongBreakTimeString = (timeString: string) => {
    setLongBreakTimeString(timeString);
  };

  const handleChangeSound = (soundString: string) => {
    switch(soundString) {
      case 'fillingYourInbox': {
        setSound(Sounds.fillingYourInbox);
        break;
      }
      case 'justLikeMagic': {
        setSound(Sounds.justLikeMagic);
        break;
      }
      case 'maybeOneDay': {
        setSound(Sounds.maybeOneDay);
        break;
      }
    }
  }

  const playNotificationSound = useCallback(() => {
    if (sound === Sounds.fillingYourInbox) {
      playFillingYourInbox();
    } else if (sound === Sounds.justLikeMagic) {
      playJustLikeMagic();
    } else if (sound === Sounds.maybeOneDay) {
      playMaybeOneDay();
    }
  }, [])

  useEffect(() => {
    setWorkTime(
      Number(workTimeString.split(":")[0]) * 60 +
      Number(workTimeString.split(":")[1])
    );
    setShortBreakTime(
      Number(shortBreakTimeString.split(":")[0]) * 60 +
      Number(shortBreakTimeString.split(":")[1])
    );
    setLongBreakTime(
      Number(longBreakTimeString.split(":")[0]) * 60 +
      Number(longBreakTimeString.split(":")[1])
    );
  }, [
    workTimeString,
    workTime,
    shortBreakTimeString,
    shortBreakTime,
    longBreakTimeString,
  ]);

  useEffect(() => {
    playNotificationSound();
  }, [sound, setSound, playNotificationSound]);

  return (
    <>
      <ThemeProvider theme={themeUI.darkTheme}>
        <CssBaseline />
        <AppBar position="relative" style={{ marginBottom: 10 }}>
          <Toolbar>
            <Typography variant="h6">PomoStack</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={6}>
              <Timer
                workTime={workTime}
                shortBreakTime={shortBreakTime}
                longBreakTime={longBreakTime}
                workTimeString={workTimeString}
                shortBreakTimeString={shortBreakTimeString}
                longBreakTimeString={longBreakTimeString}
                playNotificationSound={playNotificationSound}
              />
            </Grid>
            <Grid item md={6}>
              <UserDetails
                name="Khalid Talakshi"
                workTimeString={workTimeString}
                longBreakTimeString={longBreakTimeString}
                shortBreakTimeString={shortBreakTimeString}
                handleChangeWorkTimeString={handleChangeWorkTimeString}
                handleChangeShortBreakTimeString={
                  handleChangeShortBreakTimeString
                }
                handleChangeLongBreakTimeString={
                  handleChangeLongBreakTimeString
                }
                handleChangeSound={handleChangeSound}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
