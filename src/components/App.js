import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// App Components
import Home from './Home';
import About from './About';
import Header from './Header';
import Brainiacs from './Brainiacs';
import Featured from './Featured';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" render={ () => <About title='About' /> }/>
        <Route exact path="/brainiacs" component={Brainiacs}/>
        <Route path="/brainiacs/:name" component={Featured}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;