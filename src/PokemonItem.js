import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() { 
    const { pokemonProp } = this.props;

    return (
      <li className="PokemonItem">
        <h2><a href={pokemonProp.pokedex}>{pokemonProp.pokemon}</a></h2>
        <img alt={pokemonProp.pokemon} src={pokemonProp.url_image} />
        <p>Type 1: <span>{pokemonProp.type_1}</span></p>
        <p>Type 2: <span>{pokemonProp.type_2}</span></p>
      </li>
    );
  }
}
 
export default PokemonItem;