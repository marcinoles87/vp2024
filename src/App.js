
import './App.css';

import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const matches =[ 

    {
      home : 'Poland',
      away : 'France' ,
      score : ' - : -'
    } 
  

      ]

  return (
    <div className="App">

      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      
      <Contact></Contact>
      <Footer></Footer>

      
      
    </div>
  );
}

export default App;
