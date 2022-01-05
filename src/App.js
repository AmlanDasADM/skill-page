import './App.css';
import { useState, useEffect } from 'react';
import ReactGa from "react-ga"
import { BrowserRouter as Router ,  Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Skill/Skill';


function App()
{
 useEffect(() => {
   ReactGa.initialize('UA-216352185-1')
   ReactGa.pageview('/')
 }, [])
   


  

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
