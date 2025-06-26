import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '25px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '90vw',
    maxWidth: '500px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    margin: 0,
    display: 'flex',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  logo: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  title: {
    color: '#669fa9',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: '0',
  },
  subtitle: {
    color: '#555',
    fontSize: '1.1rem',
    margin: '0.5rem 0 0 0',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    maxWidth: '300px',
    padding: '1rem',
    backgroundColor: '#669fa9',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <p style={styles.logo}>😺</p>
          <h1 style={styles.title}>dashboard</h1>
          <p style={styles.subtitle}>elige una opción</p>
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => navigate('/usuario/todos')}>ver todos los dueños</button>
          <button style={styles.button} onClick={() => navigate('/gatitos')}>ver todos los gatitos</button>
          <button style={styles.button} onClick={() => navigate('/agregar-gatito')}>agregar gatito para mí</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 