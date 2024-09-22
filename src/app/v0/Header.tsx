import React from 'react';
import { Home, BookOpen, Wrench, Smile } from 'lucide-react';
import NavItem from './NavItem';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => (
  <header className="bg-white shadow sticky top-0 z-50">
    <nav className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold text-emerald-800">Avijit Thawani</div>
        <div className="flex flex-wrap space-x-4 mt-2 sm:mt-0">
          <NavItem
            icon={<Home />}
            label="Home"
            isActive={activeSection === 'home'}
            onClick={() => {
              console.log('Home clicked');
              setActiveSection('home');
            }}
          />
          <NavItem
            icon={<BookOpen />}
            label="Research"
            isActive={activeSection === 'research'}
            onClick={() => {
              console.log('Research clicked');
              setActiveSection('research');
            }}
          />
          <NavItem
            icon={<Wrench />}
            label="Build"
            isActive={activeSection === 'build'}
            onClick={() => {
              console.log('Build clicked');
              setActiveSection('build');
            }}
          />
          <NavItem
            icon={<Smile />}
            label="Fun"
            isActive={activeSection === 'fun'}
            onClick={() => {
              console.log('Fun clicked');
              setActiveSection('fun');
            }}
          />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;