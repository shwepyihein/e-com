import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Hompage';
import ShopPage from './pages/shop/shoppage'


function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>          
          <Route   path='/shop' component={ShopPage}/>          
        </Switch>
    </div>
  );
}

export default App;
