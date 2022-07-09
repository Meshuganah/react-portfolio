import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';

import { useState } from 'react';


function App() {
// const [nav] = useState([
//   {
//     name: 'About'
//   },
//   {
//     name: 'Project'
//   },
//   {
//     name: 'Resume'
//   },
//   {
//     name: 'Contact'
//   }
// ]);

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
      <Header></Header>
      <Navigation
        //nav={nav}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></Navigation>
      <main>

        {render(navSelected)}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
