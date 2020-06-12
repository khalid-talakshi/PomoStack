import React from "react";
import {
  Typography,
  Card,
  Paper,
  CardContent,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { Work } from "@material-ui/icons";
import './Stack.scss';

function Stack() {
  return (
    <Paper>
      <Card>
        <CardContent>
          <Typography variant="h4">Stack</Typography>
          <List className={'stackContainer'}>
            <ListItem className={'stackItem'}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Work" />
            </ListItem>
            <ListItem className={'stackItem'}>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Work" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Stack;
