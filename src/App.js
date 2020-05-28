import React from 'react';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Modal from './components/UI/Modal/Modal';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/UI/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import classes from './App.module.css';



function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Modal />
        <div className={classes.App}>
          <Switch>  
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>

      </React.Fragment>
  );
}

export default App;
