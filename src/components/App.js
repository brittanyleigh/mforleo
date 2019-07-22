import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import OptIn from './OptIn'
import Success from './Success'
import Webinar from './Webinar'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={OptIn}/>
        <Route path="/webinar-success" exact render={(props) => <Success {...props}/>}/>
        <Route path="/webinar/1" exact component={Webinar}/>
        <Route path="/webinar/6" exact component={Webinar}/>
      </div>
    </BrowserRouter>
  )
}

export default App;