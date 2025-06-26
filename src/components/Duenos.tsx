import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsuarioControllerApi, Configuration } from '../services';
import type { ResponseUsuario } from '../services';
import useToken from '../contexts/TokenContext';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '25px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '90vw',
    maxWidth: '800px',
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
  backButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#669fa9',
    color: 'white',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(255, 87, 34, 0.1)',
    transition: 'background-color 0.3s ease',
    alignSelf: 'flex-start',
  },
  duenosList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  duenoCard: {
    backgroundColor: '#f8f8f8',
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    border: '1px solid #eee',
  },
  duenoName: {
    color: '#669fa9',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
  },
  duenoInfo: {
    color: '#555',
    fontSize: '0.9rem',
    margin: '0.3rem 0',
  },
  gatitosList: {
    marginTop: '0.5rem',
    paddingLeft: '1rem',
  },
  gatitoItem: {
    color: '#777',
    fontSize: '0.85rem',
    margin: '0.2rem 0',
  },
  loading: {
    color: '#669fa9',
    fontSize: '1.1rem',
    textAlign: 'center',
  },
  error: {
    color: '#c06b6b',
    fontSize: '1rem',
    textAlign: 'center',
    backgroundColor: '#ffe6e6',
    padding: '1rem',
    borderRadius: '10px',
  },
  noDuenos: {
    color: '#777',
    fontSize: '1rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
};

const Duenos = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const [duenos, setDuenos] = useState<ResponseUsuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDuenos = async () => {
      
      if (!token) {
        setError('no hay token de autenticación');
        setLoading(false);
        return;
      }

      try {
        const configuration = new Configuration({
          accessToken: token,
          basePath: ''
        });
        
        const api = new UsuarioControllerApi(configuration);
        
        const response = await api.getUsuarios({
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setDuenos(response.data);
      } catch (err: any) {
        
        if (err.response?.status === 401) {
          setError('sesión expirada. por favor, inicia sesión nuevamente');
        } else if (err.response?.status === 403) {
          setError('no tienes permisos para ver esta información');
        } else if (err.code === 'ERR_NETWORK') {
          setError('error de red. verifica que el backend esté corriendo en http://localhost:8080');
        } else {
          setError(`error al cargar los dueños: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDuenos();
  }, [token]);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'fecha no disponible';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <p style={styles.logo}>👥</p>
          <h1 style={styles.title}>todos los dueños</h1>
          <p style={styles.subtitle}>lista de usuarios registrados</p>
        </div>

        <button 
          style={styles.backButton} 
          onClick={() => navigate('/dashboard')}
        >
          ← volver al dashboard
        </button>

        {loading && <div style={styles.loading}>cargando dueños...</div>}
        
        {error && <div style={styles.error}>{error}</div>}
        
        {!loading && !error && duenos.length === 0 && (
          <div style={styles.noDuenos}>no hay dueños registrados</div>
        )}

        {!loading && !error && duenos.length > 0 && (
          <div style={styles.duenosList}>
            {duenos.map((dueno) => (
              <div key={dueno.id} style={styles.duenoCard}>
                <h3 style={styles.duenoName}>{dueno.nombre || 'Sin nombre'}</h3>
                <p style={styles.duenoInfo}>
                  <strong>id:</strong> {dueno.id || 'N/A'}
                </p>
                <p style={styles.duenoInfo}>
                  <strong>fecha de registro:</strong> {formatDate(dueno.fechaRegistro || '')}
                </p>
                {dueno.nombresGatitos && dueno.nombresGatitos.length > 0 && (
                  <div>
                    <p style={styles.duenoInfo}>
                      <strong>gatitos ({dueno.nombresGatitos.length}):</strong>
                    </p>
                    <div style={styles.gatitosList}>
                      {dueno.nombresGatitos.map((gatito, index) => (
                        <p key={index} style={styles.gatitoItem}>
                          • {gatito}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {(!dueno.nombresGatitos || dueno.nombresGatitos.length === 0) && (
                  <p style={styles.duenoInfo}>
                    <strong>gatitos:</strong> no tiene gatitos registrados
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Duenos; 