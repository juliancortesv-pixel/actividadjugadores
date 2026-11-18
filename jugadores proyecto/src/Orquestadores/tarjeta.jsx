import { useState } from 'react';
import Nombre from '../componentes/Nombre.jsx';
import Imagen from '../componentes/Imagen.jsx';
import Descripcion from '../componentes/Descripcion.jsx';

export default function Tarjeta({ title, img, descripcion, extra, color }) {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <article className="Centrar" style={{ background: color }}>
      <div className="ImagenInteractiva">
        <Imagen img={img} nombre={title} />
      </div>
      <div className="Orga">
        <Nombre title={title} />
        <Descripcion descripcion={descripcion} />
        {mostrarMas && <p className="Extra">{extra}</p>}
        <button type="button" onClick={() => setMostrarMas((actual) => !actual)}>
          {mostrarMas ? 'Mostrar menos' : 'Ver más información'}
        </button>
      </div>
    </article>
  );
}
