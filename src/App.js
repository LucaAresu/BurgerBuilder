import React from 'react';
import classes from  './App.module.css';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
function App() {
  return (
      <div className={classes.App}>
        Burger Builder
        <BurgerBuilder />

      </div>
  );
}

export default App;
