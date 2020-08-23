import React from 'react';
import { Navbar, Profile, TechStack, Experience } from './Interface';

import './App.css';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Profile />
      <TechStack />
      <Experience />
    </React.Fragment>
  );
};
