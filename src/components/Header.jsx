import React from 'react';
import backgroundImage from 'src/images/bg_Image.jpg';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional text shadow
  };

  return (
    <header style={headerStyle}>
      <h1>Praise Paul</h1>
      <p>Web Developer | Designer | Software Engineer</p>
    </header>
  );
}

export default Header;
