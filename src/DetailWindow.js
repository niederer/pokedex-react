import React from 'react';

class DetailWindow extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <aside className="aside-fixed pokemon-details">
        <img src={this.props.expandedPokemon.sprites.other['official-artwork'].front_default} alt={this.props.expandedPokemon.name} />
        <h2 className="capitalize">#{this.props.expandedPokemon.id} {this.props.expandedPokemon.name}</h2>
        <dl>
          <dt>Type</dt>
          {this.props.expandedPokemon.types.map(variety => (
            <dd key={variety.slot} className="capitalize">{variety.type.name}</dd>
          ))}
        </dl>
        <p>Very protective of its territory. It will bark andbite to repel intruders from its space.</p>
      </aside>
    )
  }
};

export default DetailWindow;