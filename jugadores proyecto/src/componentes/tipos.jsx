export function Tipos({ types }) {
  const textoTipos = types?.map((t) => t.type.name).join(', ') || 'Normal';

  return (
    <p>
      <strong>Tipo:</strong> {textoTipos}
    </p>
  );
}