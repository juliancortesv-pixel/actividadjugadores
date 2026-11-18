import { useEffect, useState } from 'react';
import Nose from '../componentes/presentacion/nose.jsx';

export default function Presentacion({ children }) {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  useEffect(() => {
    const temporizador = window.setTimeout(() => setMostrarBienvenida(false), 5000);
    return () => window.clearTimeout(temporizador);
  }, []);

  return mostrarBienvenida ? <Nose /> : children;
}
