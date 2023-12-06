import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url(./src/assets/da149a85b2585e12c1213f78669457b9.AdobeStock_249099322-1660x580.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background-image 2s ease-in-out',
        }}
      >
        <h1 style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)' }}>Mude o ambiente ao seu redor doando</h1>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <div>
            <h2 style={{ fontSize: '3em' }}>100</h2>
            <p>Famílias ajudadas</p>
          </div>
          <div>
            <h2 style={{ fontSize: '3em' }}>500 kg</h2>
            <p>Alimentos doados</p>
          </div>
        </div>
        <Link to="/donations" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <h2>Doar agora e fazer a diferença!</h2>
        </Link>
      </div>
    </div>
  );
};