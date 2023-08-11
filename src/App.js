import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Worldcup from './components/Worldcup';
import Playerstats from './components/Playerstats';
import Leage from './components/Leage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const pageSize = 5 ;
  const apiKey = "acf267fbc9744509967d25d36b5a18a0";
  const [progress , setProgress]=useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Main/></Route>
          <Route exact path="/worldcup"><Worldcup/></Route>
          <Route exact path="/playerstats"><Playerstats/></Route>
          <Route exact path="/leage"><Leage/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
