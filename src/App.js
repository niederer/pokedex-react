import './App.css';

function ClickablePokemon(props) {
  return (
    <li>
      <button>
        <img src={props.spriteUrl} alt={props.name} />
      </button>
    </li>
  )
};

function App() {
  const POKEMON = [
    { id: 58, name: 'Growlithe', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png' },
    { id: 59, name: 'Arcanine', spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png' }
  ];
  
  return (
    <div className="App">
      <header>
        <h1>Pokedex - Kanto region</h1>
      </header>
      <div className="pokedex-layout">
        <section className="section-scrollable">
          <ul className="reset horizontal pokemon-list">
            {POKEMON.map(poke => (
              <ClickablePokemon key={poke.id} {...poke} />
            ))}
          </ul>
        </section>
        <aside className="aside-fixed pokemon-details">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png" alt="Growlithe" />
          <h2>#058 Growlithe</h2>
          <dl>
            <dt>Type</dt>
            <dd>Fire</dd>
          </dl>
          <p>Very protective of its territory. It will bark andbite to repel intruders from its space.</p>
        </aside>
      </div>
    </div>
  );
}

export default App;
