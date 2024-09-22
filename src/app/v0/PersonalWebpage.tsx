'use client'

import React, { useState, useEffect } from 'react';
import BackgroundGrid from './BackgroundGrid';
import Header from './Header';
import Home from './Home';
import Research from './Research';
import Build from './Build';
import Fun from './Fun';

const PersonalWebpage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.classList.add('bg-emerald-50');
    return () => {
      document.body.classList.remove('bg-emerald-50');
    };
  }, []);

  const sections: { [key: string]: React.ReactNode } = {
    home: <Home />,
    research: <Research />,
    build: <Build />,
    fun: <Fun />,
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 relative">
      <BackgroundGrid />
      <div className="relative z-10">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="container mx-auto px-4 py-8">
          {sections[activeSection]}
        </main>
      </div>
    </div>
  );
};

export default PersonalWebpage;