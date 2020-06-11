import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Divider,
} from "@material-ui/core";
import { TimerSettings, SoundSettings } from './components';

export interface Props {
  name: string;
  workTimeString: string;
  shortBreakTimeString: string;
  longBreakTimeString: string;
  handleChangeWorkTimeString: (data: string) => void;
  handleChangeShortBreakTimeString: (data: string) => void;
  handleChangeLongBreakTimeString: (data: string) => void;
  handleChangeSound: (data: string) => void;
}

function UserDetails({
  name,
  workTimeString,
  handleChangeWorkTimeString,
  shortBreakTimeString,
  handleChangeShortBreakTimeString,
  longBreakTimeString,
  handleChangeLongBreakTimeString,
  handleChangeSound,
}: Props) {
  return (
    <Card style={{ height: "auto" }}>
      <CardContent>
        <Typography variant="h6">User Details and Settings</Typography>
        <Typography variant="h4">{name}</Typography>
        <Divider style={{marginTop: '1rem'}}/>
        <TimerSettings workTimeString={workTimeString} shortBreakTimeString={shortBreakTimeString} longBreakTimeString={longBreakTimeString} handleChangeWorkTimeString={handleChangeWorkTimeString} handleChangeShortBreakTimeString={handleChangeShortBreakTimeString} handleChangeLongBreakTimeString={handleChangeLongBreakTimeString} />
        <Divider style={{marginTop: '1rem'}}/>
        <SoundSettings handleChangeSound={handleChangeSound} />
      </CardContent>
    </Card>
  );
}

export default UserDetails;
