import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Searchbook from './components/Searchbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deletebook from './components/Deletebook';
import Viewall from './components/Viewall';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Addbook/>}/>
    <Route path='/search' element={<Searchbook/>}/>
    <Route path='/delete' element={<Deletebook/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
