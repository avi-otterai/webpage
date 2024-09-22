import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
      isActive ? 'bg-emerald-700 text-white' : 'hover:bg-emerald-100 text-emerald-800'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default NavItem;