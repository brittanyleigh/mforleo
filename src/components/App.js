import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import OptIn from './OptIn'
import Success from './Success'
import Webinar from './Webinar'
import '../css/style.css';
import 'normalize.css';

const App = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={OptIn}/>
        <Route path="/webinar-success" exact render={(props) => <Success {...props}/>}/>
        <Route path="/webinar/1" exact component={Webinar}/>
        <Route path="/webinar/6" exact component={Webinar}/>
    </BrowserRouter>
  )
}

export default App;