
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
import Cracow from './pages/Cracow';
import Czestochowa from './pages/Czestochowa';
import Energylandia from './pages/Energylandia';
import Wieliczka from './pages/Wieliczka';
import Price  from './pages/Price';
import Ticket from './pages/Ticket';
import FormContact from './pages/FormContact';


function App() {

 

  return (
    <div className="App">

    <Routes>
      <Route path='*' element={
        <>

        <a href="https://api.whatsapp.com/send?phone=48508392683&text=Hey We are ready for your message" data-action="share/whatsapp/share" className='whatsup'><i class="fa-brands fa-whatsapp fa-2xl"></i></a>
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
        <Route path='/cracow' element={<Cracow></Cracow>}></Route>
        <Route path='/wieliczka' element={<Wieliczka></Wieliczka>}></Route>
        <Route path='/energylandia' element={<Energylandia></Energylandia>}></Route>
        <Route path='/czestochowa' element={<Czestochowa></Czestochowa>}></Route>
        <Route path='/price' element={<Price></Price>}></Route>
        <Route path='/tickets' element={<Ticket></Ticket>}></Route>
        <Route path='/formcontact' element={<FormContact></FormContact>}></Route>
        
        
    </Routes>

     

    

      
      
    </div>
  );
}

export default App;
