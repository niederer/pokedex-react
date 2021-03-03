import React from 'react';
import './App.css';
import ClickablePokemon from './ClickablePokemon';
import DetailWindow from './DetailWindow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
    this.state = { detailsOpen: false, activePokemon: [] };
  };

  handleOpenDetails(id) {
    const openPokemon = this.state.activePokemon;
    if (!(openPokemon === id)) {
      this.getPokemonById(id);
    } else {
      return null;
    }
  };

  getPokemonById(id) {
    let selectedPoke = this.props.pokemon.find(poke => poke.id === id);
    this.setState({ detailsOpen: true, activePokemon: selectedPoke })
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokedex - Kanto region</h1>
        </header>
        <div className="pokedex-layout">
          <section className="section-scrollable">
            <ul className="reset horizontal pokemon-list">
              {this.props.pokemon.map(poke => (
                <ClickablePokemon key={poke.id} onButtonClick={this.handleOpenDetails} {...poke} />
              ))}
            </ul>
          </section>
          <DetailWindow show={this.state.detailsOpen} expandedPokemon={this.state.activePokemon} />
        </div>
      </div>
    );
  }
}

export default App;
