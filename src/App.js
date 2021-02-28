import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex - Kanto region</h1>
      </header>
      <div className="pokedex-layout">
        <section className="section-scrollable">
          <ul className="reset horizontal pokemon-list">
            <li>
              <button>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" alt="Growlithe" />
              </button>
            </li>
            <li>
              <button>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" alt="Arcanine" />
              </button>
            </li>
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
