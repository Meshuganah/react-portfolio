import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';

import { useState } from 'react';


function App() {

  const [navSelected, setNavSelected] = useState('About');

  const render = navSelected => {
    switch(navSelected) {
      case 'About':
        return <About></About>
      case 'Project':
        return <Project></Project>
      case 'Resume':
        return <Resume></Resume>
      case 'Contact':
        return <Contact></Contact>
    }
  }

  return (
    <div>
      <div className='text-light d-flex flex-row mx-3'>
        <Header></Header>
      </div>
      <div className='text-light'>
        <Navigation
            navSelected={navSelected}
            setNavSelected={setNavSelected}
        ></Navigation>
      </div>
      <main>
        {render(navSelected)}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
