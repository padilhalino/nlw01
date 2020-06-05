import React from 'react';

interface HeadeProps {
  title: string;
}

// FC = Function Component
const Header: React.FC<HeadeProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;