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

import { Timer } from "./components";
import { BrightnessLow, BrightnessHigh } from "@material-ui/icons";

function App() {
  const [currentTheme, setTheme] = useState(themeUI.darkTheme);

  const toggleTheme = () => {
    if (currentTheme === themeUI.darkTheme) {
      setTheme(themeUI.lightTheme);
    } else {
      setTheme(themeUI.darkTheme);
    }
  }

  return (
    <>
      <ThemeProvider theme={currentTheme}>
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
          <Grid container>
            <Grid item xs={6}>
              <Timer endTime={5}/>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
