import React from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';

import ClickablePokemon from './ClickablePokemon';
import DetailWindow from './DetailWindow';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      detailsOpen: false,
      activePokemon: [],
    };

    this.handleOpenDetails = this.handleOpenDetails.bind(this);
    this.getPokemonById = this.getPokemonById.bind(this);
  };

  async componentDidMount() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    const extendedUrl = baseUrl + "?limit=60";

    let response = await axios.get(extendedUrl);
    let results = response.data.results;

    let infoPromises = results.map(({ url }) => {
      return axios.get(url).then(response => response.data)
    });

    Promise.all(infoPromises).then((facts) => {
      facts.map(({id, name, sprites, types}) =>
        this.props.dispatch({
          type: 'LOAD_MONS',
          payload: { id: id, name: name, sprites: sprites, types: types }
        })
      )
    })
  }

  handleOpenDetails(id) {
    const openPokemon = this.state.activePokemon;
    if (!(openPokemon === id)) {
      this.getPokemonById(id);
    } else {
      return null;
    }
  };

  getPokemonById(id) {
    let selectedPoke = this.props.pokemon.find(mon => mon.id === id);
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
              {this.props.pokemon.map(mon => (
                <ClickablePokemon key={mon.id} onButtonClick={this.handleOpenDetails} {...mon} />
              ))}
            </ul>
          </section>
          <DetailWindow show={this.state.detailsOpen} expandedPokemon={this.state.activePokemon} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pokemon: state.pokemon }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
