import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Tarjeta from './Orquestadores/tarjeta.jsx';
import Formulario from './Orquestadores/Formulario.jsx';
import Presentacion from './Orquestadores/presentacion.jsx';
import jugadoresIniciales from './data.json';
import './style/tarjeta.css';

function App() {
  const [jugadores, setJugadores] = useState(jugadoresIniciales);

  function agregarJugador(nuevoJugador) {
    setJugadores((actuales) => [
      ...actuales,
      { ...nuevoJugador, id: Date.now(), color: '#174d32' },
    ]);
  }

  return (
    <Presentacion>
      <main>
        <header className="EncabezadoJugadores">
          <h1>Mejores jugadores</h1>
          <p>Conoce y agrega tus futbolistas favoritos</p>
        </header>

        <section className="ListaJugadores" aria-label="Lista de jugadores">
          {jugadores.map((jugador) => (
            <Tarjeta
              key={jugador.id}
              title={jugador.title}
              img={jugador.img}
              descripcion={jugador.descripcion}
              extra={jugador.extra}
              color={jugador.color}
            />
          ))}
        </section>

        <Formulario onAdd={agregarJugador} />
      </main>
    </Presentacion>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
