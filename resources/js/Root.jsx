import React, { useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// Router
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Context
import { GlobalStateProvider, GlobalStateContext } from './machines/global.state'
import { useActor } from '@xstate/react'
import LoginPage from './pages/Login'

const defaultTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#000000'
  //   },
  //   info: {
  //     main: '#1976d2',
  //     light: '#425f5',
  //     dark: '#1565c0',
  //   }
  // }
});

function Root() {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <span>Sign up page</span>
            </Route>
            <Route path="*">
              <span>Page not found!</span>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </GlobalStateProvider>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Root />);