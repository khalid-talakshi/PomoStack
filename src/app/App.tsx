/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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

import { Timer, UserDetails, Stack } from "./components";
import { Sounds } from "./constants/enums";

import useSound from "use-sound";
const fillingYourInbox = require("../assets/sounds/filling-your-inbox.mp3");
const justLikeMagic = require("../assets/sounds/just-like-magic.mp3");
const maybeOneDay = require("../assets/sounds/maybe-one-day.mp3");
const openUp = require("../assets/sounds/open-up.mp3");
const pristine = require("../assets/sounds/pristine.mp3");
const swiftly = require("../assets/sounds/swiftly.mp3");
const thatWasQuick = require("../assets/sounds/that-was-quick.mp3");

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
  const [playMaybeOneDay] = useSound(maybeOneDay);
  const [playOpenUp] = useSound(openUp);
  const [playPristine] = useSound(pristine);
  const [playSwiftly] = useSound(swiftly);
  const [playThatWasQuick] = useSound(thatWasQuick);

  const handleChangeSound = (soundString: string) => {
    switch (soundString) {
      case "fillingYourInbox": {
        setSound(Sounds.fillingYourInbox);
        break;
      }
      case "justLikeMagic": {
        setSound(Sounds.justLikeMagic);
        break;
      }
      case "maybeOneDay": {
        setSound(Sounds.maybeOneDay);
        break;
      }
      case "openUp": {
        setSound(Sounds.openUp);
        break;
      }
      case "pristine": {
        setSound(Sounds.pristine);
        break;
      }
      case "swiftly": {
        setSound(Sounds.swiftly);
        break;
      }
      case "thatWasQuick": {
        setSound(Sounds.thatWasQuick);
        break;
      }
    }
  };

  const playNotificationSound = () => {
    if (sound === Sounds.fillingYourInbox) {
      playFillingYourInbox();
    } else if (sound === Sounds.justLikeMagic) {
      playJustLikeMagic();
    } else if (sound === Sounds.maybeOneDay) {
      playMaybeOneDay();
    } else if (sound === Sounds.openUp) {
      playOpenUp();
    } else if (sound === Sounds.pristine) {
      playPristine();
    } else if (sound === Sounds.swiftly) {
      playSwiftly();
    } else if (sound === Sounds.thatWasQuick) {
      playThatWasQuick();
    }
  };

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
  }, [sound, setSound]);

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
            <Grid item md={6} container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Stack />
              </Grid>
            </Grid>
            <Grid item md={6}>
              <UserDetails
                name="Khalid Talakshi"
                workTimeString={workTimeString}
                longBreakTimeString={longBreakTimeString}
                shortBreakTimeString={shortBreakTimeString}
                handleChangeWorkTimeString={setWorkTimeString}
                handleChangeShortBreakTimeString={setShortBreakTimeString}
                handleChangeLongBreakTimeString={setLongBreakTimeString}
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
