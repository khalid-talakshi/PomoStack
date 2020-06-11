import React from "react";
import { mount, ReactWrapper, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from "../App";
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Container, Grid } from "@material-ui/core";
import * as themeUI from "./../constants/themes";

configure({adapter: new Adapter()});

describe("<App>", () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<App />);
  });
  
  describe("<ThemeProvider>", () => {
    it('renders exactly <ThemeProvider> component', () => {
      expect(wrapper.find(ThemeProvider)).toHaveLength(1);
    })
    
    it('ThemeProvider has dark UI theme prop', () => {
      expect(wrapper.find(ThemeProvider).prop('theme')).toBe(themeUI.darkTheme)
    })
  })

  it('renders exactly 1 CssBaseline component', () => {
    expect(wrapper.find(CssBaseline)).toHaveLength(1);
  })

  describe('<AppBar>', () => {
    it('renders exactly 1 AppBar component', () => {
      expect(wrapper.find(AppBar)).toHaveLength(1);
    })

    it('AppBar has position prop of relative', () => {
      expect(wrapper.find(AppBar).prop('position')).toBe("relative");
    })

    it('renders exactly 1 ToolBar component', () => {
      expect(wrapper.find(AppBar).find(Toolbar)).toHaveLength(1);
    })

    it('renders exactly 1 Typograph', () => {
      expect(wrapper.find(AppBar).find(Toolbar).find(Typography)).toHaveLength(1);
    })

    it('Appbar typography content is correct', () => {
      expect(wrapper.find(AppBar).find(Toolbar).find(Typography).text()).toEqual('PomoStack')
    })
  })

  describe('<Container>', () => {
    it('renders 1 container component', () => {
      expect(wrapper.find(Container)).toHaveLength(1);
    })
  })
  
});
