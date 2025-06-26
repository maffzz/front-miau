import { useState } from 'react';
import type { CSSProperties } from 'react';
import { AuthenticationControllerApi, Configuration } from '../services';
import type { AuthRequest, Usuario } from '../services';
import { useNavigate } from 'react-router-dom';
import useToken from '../contexts/TokenContext';

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
    gap: '1.5rem',
    margin: 0,
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  logo: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  welcomeTitle: {
    color: '#669fa9',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0',
  },
  welcomeSubtitle: {
    color: '#555',
    fontSize: '1rem',
    margin: '0.5rem 0 0 0',
  },
  successBanner: {
    backgroundColor: '#e0ffe0',
    color: '#6ede88',
    padding: '0.8rem 1.2rem',
    borderRadius: '20px',
    textAlign: 'center',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1.5rem',
  },
  toggleButtonContainer: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    padding: '5px',
    width: '100%',
    marginBottom: '1.5rem',
  },
  toggleButton: {
    flex: 1,
    padding: '0.8rem 1rem',
    borderRadius: '15px',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    color: '#777',
    fontWeight: 'bold',
  },
  toggleButtonActive: {
    backgroundColor: 'white',
    color: '#669fa9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  inputCard: {
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '20px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    marginBottom: '0',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #eee',
    fontSize: '1rem',
    backgroundColor: 'white',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    color: 'black',
  },
  submitButton: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#669fa9',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1.5rem',
    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  errorMessage: {
    color: '#c06b6b',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const api = new AuthenticationControllerApi(new Configuration({
    basePath: '' // Usar ruta relativa para el proxy
  }));
  const navigate = useNavigate();
  const { saveToken } = useToken();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        const authRequest: AuthRequest = {
          email,
          password
        };
        const response = await api.login(authRequest);
        setSuccess('¡bienvenido! ya puedes ver los gatitos');
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          saveToken(response.data.token);
          navigate('/dashboard');
        }
      } else {
        const usuario: Usuario = {
          email,
          password,
          nombre,
          role: 'USER'
        };
        const response = await api.register(usuario);
        setSuccess('¡bienvenido! ya puedes ver los gatitos');
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          saveToken(response.data.token);
          navigate('/dashboard');
        }
      }
    } catch (err) {
      setError('ocurrió un error. por favor, inténtalo de nuevo.');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <p style={styles.logo}>😺</p>
          <h1 style={styles.welcomeTitle}>my miau</h1>
          <p style={styles.welcomeSubtitle}>¡bienvenido a my miau!</p>
        </div>

        {success && <div style={styles.successBanner}>{success}</div>}
        {error && <div style={styles.errorMessage}>{error}</div>}
        
        <div style={styles.toggleButtonContainer}>
          <button 
            style={{ ...styles.toggleButton, ...(isLogin ? styles.toggleButtonActive : {}) }}
            onClick={() => {
              setIsLogin(true);
              setError('');
              setSuccess('');
            }}
          >
            iniciar sesión
          </button>
          <button 
            style={{ ...styles.toggleButton, ...(!isLogin ? styles.toggleButtonActive : {}) }}
            onClick={() => {
              setIsLogin(false);
              setError('');
              setSuccess('');
            }}
          >
            registrarse
          </button>
        </div>
        
        <div style={styles.inputCard}>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div style={styles.formGroup}>
                <input
                  type="text"
                  placeholder="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            )}
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              {isLogin ? 'iniciar sesión' : 'registrarse'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;