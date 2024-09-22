import React from 'react';
import { Home, BookOpen, Wrench, Smile } from 'lucide-react';
import NavItem from './NavItem';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => (
  <header className="sticky top-0 z-20 bg-emerald-50 bg-opacity-90 backdrop-blur-sm border-b border-emerald-200">
    <nav className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-800">Avijit Thawani</h1>
        <div className="flex space-x-2">
          <NavItem
            icon={<Home size={18} />}
            label="Home"
            isActive={activeSection === 'home'}
            onClick={() => setActiveSection('home')}
          />
          <NavItem
            icon={<BookOpen size={18} />}
            label="Research"
            isActive={activeSection === 'research'}
            onClick={() => setActiveSection('research')}
          />
          <NavItem
            icon={<Wrench size={18} />}
            label="Build"
            isActive={activeSection === 'build'}
            onClick={() => setActiveSection('build')}
          />
          <NavItem
            icon={<Smile size={18} />}
            label="Fun"
            isActive={activeSection === 'fun'}
            onClick={() => setActiveSection('fun')}
          />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;