import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import SheepList from './components/Sheep';
import CatList from './components/Cats';
import ElephantList from './components/Elephants';
import Menu from "./components/Menu";
import Ant from './components/Ant' ;
// BrowserRouter :  that keeps track of everything going on in the app
// Switch : to replace the new component with old one
// Route : where we specify the linking
// Link : < a > </a> 

// content
// how to navigate the content

// url ==> Link ===> route ===> switch 
// route resolves resolution
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <h1> This is the Animal World</h1>

          <ul>
            <li><Link to="/sheep">Sheep </Link></li>
            <li><Link to="/cat">  Cat </Link> </li>
            <li><Link to="/elephant"> Elephant </Link> </li>
            <li><Link to="/menu"> Menu </Link> </li>
            <li><Link to="/ant" >Ant</Link></li>
          </ul>



          <Switch>
            <Route path="/sheep">
              <SheepList />
            </Route>
            <Route path="/cat">
              <CatList />
            </Route>
            <Route path="/elephant">
              <ElephantList />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/ant" ><Ant /> </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
