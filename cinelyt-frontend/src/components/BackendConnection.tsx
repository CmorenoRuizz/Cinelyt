import React, { useEffect, useState } from 'react';

const BackendConnection: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBackendStatus = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await fetch('http://localhost:8080/api/test');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.text();
        setMessage(data);
      } catch (err) {
        console.error('Error al conectar con el backend:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido al conectar con el backend');
      } finally {
        setLoading(false);
      }
    };

    fetchBackendStatus();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Conectando con el backend...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center', 
        color: 'red', 
        border: '1px solid red', 
        borderRadius: '5px',
        margin: '20px'
      }}>
        <h3>Error de conexión</h3>
        <p>{error}</p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          Asegúrate de que el backend esté corriendo en http://localhost:8080
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      color: 'green', 
      border: '1px solid green', 
      borderRadius: '5px',
      margin: '20px'
    }}>
      <h3>Conexión exitosa</h3>
      <p>{message}</p>
    </div>
  );
};

export default BackendConnection;