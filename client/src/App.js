import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {ListEmployee} from './components/ListEmployee';
import {CreateEmployee} from './components/CreateEmployee';
import {EditEmployee} from './components/EditEmployee';
import {DetailEmployee} from './components/DetailEmployee';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5>Azularc Task</h5></header>
       <Switch>
        <Route path="/" component={ListEmployee} exact/>
        <Route path="/create" component={CreateEmployee} exact/>
        <Route path="/edit/:id" component={EditEmployee} exact/>
        <Route path="/detail/:id" component={DetailEmployee} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;
