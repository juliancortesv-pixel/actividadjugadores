import '../../style/camilo.css';

export default function Nose() {
  return (
    <section className="Presentacion" aria-label="Presentación jugadores">
      <div className="Presentacion__centro">
        <img
          src="https://wallpapercrafter.com/desktop/42578-Football-James-Rodrguez-soccer-The-best-players-2015-FIFA-World-Cup-Real-Madrid-James-David-Rodrguez-Rubio.jpg"
          alt="Jugador de fútbol"
          className="Presentacion__logo"
        />
        <div className="Presentacion__texto">
          <p>Mejores jugadores</p>
          <h1>De la Historia</h1>
        </div>
      </div>
    </section>
  );
}
