import logo from './shuriken.png';
import './App.css';

function App() {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  };

  const styles = {
    description: {
      color: '#dcdcdc',
      fontSize: '0.8em',
      lineHeight: '1.5',
      marginLeft: '60px',
      marginRight: '60px',
      textAlign: 'justify',
      padding: '0 15px',
    },
  }

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#0056b3';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#007BFF';
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SEBASTIAN CHICO</h1>
        <p style={styles.description}>
          Soy una persona apasionada por la filosofía, el arte y la tecnología, con una curiosidad constante por explorar nuevas ideas y perspectivas. Mi enfoque de vida se basa en el aprendizaje continuo y en la búsqueda de experiencias significativas que me permitan crecer tanto personal como profesionalmente. Valoro profundamente la diversidad de pensamiento y creo que cada grupo social ofrece una fuente invaluable de conocimiento y enriquecimiento.
        </p>
        <p style={styles.description}>
          Mi capacidad para adaptarme, escuchar y aprender de los demás me ha permitido desarrollar habilidades analíticas, creativas y técnicas que aplico con compromiso y dedicación. Siempre estoy abierto a nuevos retos, con el objetivo de dejar un impacto positivo y avanzar sin arrepentimientos en cada paso que doy.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          DOWNLOAD CV
        </button>
      </header>
    </div>
  );
}

export default App;
