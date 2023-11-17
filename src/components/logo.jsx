import React from 'react';
//import './LogoComponent.css'; // Import your CSS file
import { ReactComponent as Logo } from '../lsz.svg';
const LogoComponent = () => {
  return (
    <div className="logo-container">
  <Logo fill="./texture.jpeg" />
    </div>
  );
};

export default LogoComponent;