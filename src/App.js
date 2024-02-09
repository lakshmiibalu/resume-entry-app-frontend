import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AddResume from './components/AddResume';
import ViewResume from './components/ViewResume';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/add' element={<AddResume/>}/>
        <Route path='/view' element={<ViewResume/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
