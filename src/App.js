import React from 'react';
import './App.css';
import ClickablePokemon from './ClickablePokemon';

class DetailWindow extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <aside className="aside-fixed pokemon-details">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png" alt="Growlithe" />
        <h2>#058 Growlithe</h2>
        <dl>
          <dt>Type</dt>
          <dd>Fire</dd>
        </dl>
        <p>Very protective of its territory. It will bark andbite to repel intruders from its space.</p>
      </aside>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
    this.state = { detailsOpen: false };
  };

  handleOpenDetails(id) {
    console.log('outercomponent ' + id);
    this.setState({ detailsOpen: true });
  };

  render() {
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
                <ClickablePokemon key={poke.id} onButtonClick={this.handleOpenDetails} {...poke} />
              ))}
            </ul>
          </section>
          <DetailWindow show={this.state.detailsOpen} />
        </div>
      </div>
    );
  }
}

export default App;
