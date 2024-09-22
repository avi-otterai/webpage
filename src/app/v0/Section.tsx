import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="space-y-4">
    {title && <h2 className="text-2xl font-bold text-emerald-800">{title}</h2>}
    {children}
  </div>
);

export default Section;