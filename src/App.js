import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoards from './components/DashBoards';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashs' element={<DashBoards/>}/>
    
     
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
