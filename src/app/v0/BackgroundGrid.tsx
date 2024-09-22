import React from 'react';

const BackgroundGrid: React.FC = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-emerald-50 opacity-50"></div>
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>
  </div>
);

export default BackgroundGrid;