import React from 'react';

class ClickablePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(id) {
    this.props.onButtonClick(id);
  };

  render() {
    return (
      <li>
        <button onClick={() => this.handleClick(this.props.id)}>
          <img src={this.props.spriteUrl} alt={this.props.name} />
        </button>
      </li>
    )
  }
};  

export default ClickablePokemon;