import React from 'react';
import {
  Navbar,
  Profile,
  TechStack,
  Experience,
  Projects,
  Footer,
} from './Interface';

import './App.css';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container'>
        <div className='safeAreaView'>
          <Profile />
          <TechStack />
          <Experience />
          <Projects />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
