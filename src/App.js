import React from 'react';
import './App.css';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Modal from './components/UI/Modal/Modal';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/UI/Navbar/Navbar';



function App() {
  return (
      <div className={'App'}>
        <NavBar />
        <Modal />
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/billy' render={ () => <h1>BILLY</h1>} />
        </Switch>
      </div>
  );
}

export default App;
