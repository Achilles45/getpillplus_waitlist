// Bring in the CSS File 
import './styles/App.scss'

// Bring in our components
import Navbar from './components/Layouts/Navbar';
import Herosection from './components/Layouts/Herosection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
