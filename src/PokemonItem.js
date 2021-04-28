import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() { 
    const pokemon = this.props.pokemon;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.title}</h2>
        <img alt={pokemon.title} src={pokemon.url} />
        <p>A unicorn and a narwhal nuzzling their horns</p>
      </li>
    );
  }
}
 
export default PokemonItem;