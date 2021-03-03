import React from 'react';

class DetailWindow extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <aside className="aside-fixed pokemon-details">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png" alt="Growlithe" />
        <h2>#{this.props.expandedPokemon.id} {this.props.expandedPokemon.name}</h2>
        <dl>
          <dt>Type</dt>
          <dd>Fire</dd>
        </dl>
        <p>Very protective of its territory. It will bark andbite to repel intruders from its space.</p>
      </aside>
    )
  }
};

export default DetailWindow;