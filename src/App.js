import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router ,  Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skill/Skill';


function App()
{


  return (
    <>
    <div className='app'>
    <Router>
      <Navbar  />
      <Switch>
        <Route exact path="/">
          <Skill  />
        </Route> 
        </Switch>
      </Router>    
    
      </div>
    </>
  );
}

export default App;
