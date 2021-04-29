import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() { 
    const { pokemonProp } = this.props;
    //const pokemonProp = this.props.pokemonProp; This is the same thing!

    return (
      <a href={pokemonProp.pokedex} className="PokemonItem">
        <li>
          <h2>{pokemonProp.pokemon}</h2>
          <img alt={pokemonProp.pokemon} src={pokemonProp.url_image} />
          <p>Type 1: <span>{pokemonProp.type_1}</span></p>
          <p>Type 2: <span>{pokemonProp.type_2}</span></p>
        </li>
      </a>
    );
  }
}
 
export default PokemonItem;