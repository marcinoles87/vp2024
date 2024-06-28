
import './App.css';

import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Headnav from './components/Headnav';
import Tours from './components/Tours';
import { Route, Routes } from 'react-router-dom';
import Zakopane from './pages/Zakopane';
import Auschwitz from './pages/Auschwitz';

function App() {

 

  return (
    <div className="App">

    <Routes>
      <Route path='*' element={
        <>
         <Headnav></Headnav>
         <Nav></Nav>
         <Header></Header>
         <Main></Main>
         <Tours></Tours>
         
         <Contact></Contact>
         <Footer></Footer>
         </>

      }
      ></Route>

        <Route path='/zakopane' element={<Zakopane></Zakopane>}></Route>
        <Route path='/auschwitz' element={<Auschwitz></Auschwitz>}></Route>
        
    </Routes>

     

    

      
      
    </div>
  );
}

export default App;
