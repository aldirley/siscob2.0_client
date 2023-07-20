
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


//components
import NavBar from './comporents/NavBar/NavBar';
import Footer from './comporents/Footer/Footer'


//contexts
import { AuthContexts } from './contexts/AuthContexts';


//pages
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';



function App() {



  return (
    <div className="App">
     <BrowserRouter>
     <AuthContexts.Provider>
    <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
      </AuthContexts.Provider>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
