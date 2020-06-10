import React from "react";
import { mount, ReactWrapper, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import * as themeUI from "./../constants/themes";
import Timer from "../Timer";

configure({ adapter: new Adapter() });

const mockProps = {
  workTime: 25,
  shortBreakTime: 5,
  longBreakTime: 10,
  workTimeString: "0:25",
  shortBreakTimeString: "0:05",
  longBreakTimeString: "0:10",
};

let wrapper: ReactWrapper;

describe("<Timer>", () => {
  beforeAll(() => {
    wrapper = mount(
      <Timer
        workTime={mockProps.workTime}
        shortBreakTime={mockProps.shortBreakTime}
        longBreakTime={mockProps.longBreakTime}
        workTimeString={mockProps.workTimeString}
        shortBreakTimeString={mockProps.shortBreakTimeString}
        longBreakTimeString={mockProps.longBreakTimeString}
      />
    );
  });

});
