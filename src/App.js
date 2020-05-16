import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Hompage';


const HatsPage =()=>(
  <div>
    <h1>HATs pages</h1>
  </div>
)

const TopicsList =()=>(
  <div>
    <h1>TOPICS LIST</h1>
  </div>
)
const TopicsDetail =()=>(
  <div>
    <h1>TOPIC DETIAL pages</h1>
  </div>
)

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  exact path='/hats' component={HatsPage}/>
          <Route  exact path='/topics' component={TopicsList}/>
          <Route path='/topics/:topicId' component={TopicsDetail}/>
        </Switch>
    </div>
  );
}

export default App;
