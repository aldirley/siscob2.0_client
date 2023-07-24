// CSS
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react';



//components
import NavBar from './comporents/NavBar/NavBar';
import Footer from './comporents/Footer/Footer'


//contexts
import { AuthProvider, AuthContexts } from './contexts/AuthContexts';


//pages
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';



function App() {


  const Private = ({ children}) => {

    const { authenticated } = useContext(AuthContexts)
      if(!authenticated){
        return <Navigate to="/" />;
      }

      return children
  }

  return (
    <div className="App">
     <BrowserRouter>
     <AuthProvider>
    <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Private><Home/> </Private>} />
        </Routes>
      </div>
      <Footer />
      </AuthProvider>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
