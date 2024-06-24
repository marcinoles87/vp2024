
import './App.css';

import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Headnav from './components/Headnav';

function App() {

 

  return (
    <div className="App">

      <Headnav></Headnav>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      
      <Contact></Contact>
      <Footer></Footer>

      
      
    </div>
  );
}

export default App;
