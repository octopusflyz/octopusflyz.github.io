import React from 'react';

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#fff6f8',
      color: '#666',
      fontSize: '0.85rem'
    }}>
      <p>© {new Date().getFullYear()} Yufei Zhang (张语菲)</p>
    </footer>
  );
}

export default Footer;
