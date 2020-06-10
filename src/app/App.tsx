import React, { useState, useEffect } from "react";
import "./App.css";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  Button,
  Grid,
} from "@material-ui/core";
import * as themeUI from "./constants/themes";

import { Timer, UserDetails } from "./components";
import { BrightnessHigh } from "@material-ui/icons";

function App() {
  const [currentTheme, setTheme] = useState(themeUI.darkTheme);
  const [workTime, setWorkTime] = useState(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5 * 60);
  const [longBreakTime, setLongBreakTime] = useState(20 * 60);
  const [workTimeString, setWorkTimeString] = useState("25:00");
  const [shortBreakTimeString, setShortBreakTimeString] = useState("5:00");
  const [longBreakTimeString, setLongBreakTimeString] = useState("20:00");

  const toggleTheme = () => {
    if (currentTheme === themeUI.darkTheme) {
      setTheme(themeUI.lightTheme);
    } else {
      setTheme(themeUI.darkTheme);
    }
  };

  const handleChangeWorkTimeString = (timeString: string) => {
    setWorkTimeString(timeString);
  };

  const handleChangeShortBreakTimeString = (timeString: string) => {
    setShortBreakTimeString(timeString);
  };

  const handleChangeLongBreakTimeString = (timeString: string) => {
    setLongBreakTimeString(timeString);
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
            <Grid item xs={6}>
              <Timer
                workTime={workTime}
                shortBreakTime={shortBreakTime}
                longBreakTime={longBreakTime}
                workTimeString={workTimeString}
                shortBreakTimeString={shortBreakTimeString}
                longBreakTimeString={longBreakTimeString}
              />
            </Grid>
            <Grid item xs={6}>
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
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
