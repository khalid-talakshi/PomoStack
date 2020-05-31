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
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(20);
  const [workTimeString, setWorkTimeString] = useState("25:00");

  const toggleTheme = () => {
    if (currentTheme === themeUI.darkTheme) {
      setTheme(themeUI.lightTheme);
    } else {
      setTheme(themeUI.darkTheme);
    }
  };

  const handleChangeWorkTime = (time: number) => {
    setWorkTime(time);
  };

  // const handleChangeShortBreakTime = (time: number) => {
  //   setShortBreakTime(time);
  // };

  // const handleChangeLongBreakTime = (time: number) => {
  //   setLongBreakTime(time);
  // };

  const handleChangeWorkTimeString = (timeString: string) => {
    setWorkTimeString(timeString);
  };

  useEffect(() => {
    setWorkTime(Number(workTimeString.split(':')[0]) * 60 + Number(workTimeString.split(':')[1])); 
  }, [workTimeString, workTime])

  return (
    <>
      <ThemeProvider theme={themeUI.darkTheme}>
        <CssBaseline />
        <AppBar position="relative" style={{ marginBottom: 10 }}>
          <Toolbar>
            <Typography variant="h6">PomoStack</Typography>
            <Button onClick={toggleTheme}>
              <BrightnessHigh />
            </Button>
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
              <Timer endTime={workTime} workTimeString={workTimeString} />
            </Grid>
            <Grid item xs={6}>
              <UserDetails
                name="Khalid Talakshi"
                breakTime={shortBreakTime}
                workTimeString={workTimeString}
                handleChangeWorkTime={handleChangeWorkTime}
                handleChangeWorkTimeString={handleChangeWorkTimeString}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
