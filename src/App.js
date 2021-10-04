import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Bring in the CSS File 
import './styles/App.scss'

// Bring in our components
import Navbar from "./components/Layouts/Navbar"
import Index from './pages/Index';
import Success from './pages/Success';

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route exact path="/" component={ Index } />
       <Route exact path="/success" component={ Success } />
     </Switch>
   </Router>
  );
}

export default App;
