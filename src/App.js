import './App.css';
import Home from "./components/Home";
import Demo from "./components/Demo";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { ThemeProvider } from '@material-ui/styles';


import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: deepPurple[500] },
    light: { main: grey[100] },
  },
  spacing: 4,
});


function App() {
  return (
    <Router>
       <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
          <Typography variant="h6" color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                Home
              </Link>
            </Typography>
            |
            <Typography variant="h6" color="inherit">
              <Link to="/demo/" style={{ textDecoration: 'none', color: 'white' }}>
                Demo
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/demo/" component={Demo} />

      </ThemeProvider>
    </Router>
  );
}

export default App;
