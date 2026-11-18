import { useState } from 'react';

export default function Formulario({ onAdd }) {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [extra, setExtra] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const nombreLimpio = nombre.trim();
    const descripcionLimpia = descripcion.trim();
    if (!nombreLimpio || !descripcionLimpia) {
      setMensaje('Escribe al menos el nombre y la descripción del jugador.');
      return;
    }

    onAdd({
      title: nombreLimpio,
      img: imagen.trim() || 'https://placehold.co/400x400/123d23/ffffff?text=Jugador',
      descripcion: descripcionLimpia,
      extra: extra.trim() || 'No hay información adicional.',
    });

    setNombre('');
    setImagen('');
    setDescripcion('');
    setExtra('');
    setMensaje('¡Jugador añadido correctamente! Ya aparece en la lista.');
  }

  return (
    <form className="Formulario" onSubmit={handleSubmit}>
      <h2>Añadir un jugador</h2>

      <label htmlFor="nombreJugador">Nombre del jugador *</label>
      <input
        id="nombreJugador"
        name="nombreJugador"
        type="text"
        placeholder="Ej. Lionel Messi"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        required
      />

      <label htmlFor="imagenJugador">URL de la imagen</label>
      <input
        id="imagenJugador"
        name="imagenJugador"
        type="url"
        placeholder="https://... (opcional)"
        value={imagen}
        onChange={(event) => setImagen(event.target.value)}
      />

      <label htmlFor="descripcionJugador">Descripción *</label>
      <textarea
        id="descripcionJugador"
        name="descripcionJugador"
        placeholder="Equipo, posición y características..."
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
        rows="4"
        required
      />

      <label htmlFor="extraJugador">Información adicional</label>
      <textarea
        id="extraJugador"
        name="extraJugador"
        placeholder="Otros datos del jugador (opcional)"
        value={extra}
        onChange={(event) => setExtra(event.target.value)}
        rows="3"
      />

      <button type="submit">Añadir jugador</button>
      {mensaje && <p className="MensajeFormulario" role="status">{mensaje}</p>}
    </form>
  );
}
