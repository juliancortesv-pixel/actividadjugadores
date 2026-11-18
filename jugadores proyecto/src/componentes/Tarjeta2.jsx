import { Imagen } from './Imagen';
import { Tipos } from './tipos';
import { Descripcion } from './Descripcion';

export function Tarjeta2({ pokemon }) {
  const colores = ['azul', 'amarillo', 'verde', 'rojo'];
  const colorAzar = colores[Math.floor(Math.random() * colores.length)];

  const imagenUrl =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <div className="card-container">
      <div className="card-inner">
        {/* Reverso */}
        <div className="card-back"></div>

        {/* Cara frontal con componentes separados */}
        <div className={`card-front ${colorAzar}`}>
          <Imagen url={imagenUrl} nombre={pokemon.name} />
          <p><strong>Nombre:</strong> {pokemon.name}</p>
          <p><strong>ID:</strong> #{pokemon.id}</p>
          
          <Tipos types={pokemon.types} />
          <Descripcion flavorTexts={pokemon.flavor_text_entries} />

          <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
          <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}