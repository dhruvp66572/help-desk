import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>404</h1>
      <h2 style={{ margin: '1rem 0' }}>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a
        href="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          background: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;