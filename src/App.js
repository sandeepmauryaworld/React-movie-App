import './App.css';
import Home from './components/Home'
import Contact from 'components/Contact'
import Watchlist from 'components/Watchlist'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Routes>

       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<contact/>} />
       <Route path='/watchlist' element={<Watchlist/>} />
     </Routes>
   </Router>
  );
}

export default App;
