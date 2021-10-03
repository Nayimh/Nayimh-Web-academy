
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './about/About';
import './App.css';
import Contact from './contact/Contact';
// import Card from './card/Card';
import Error from './error/Error';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';

import Services from './services/Services';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
            
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
