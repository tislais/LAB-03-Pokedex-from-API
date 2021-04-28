import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

class PokemonList extends Component {
  
  render() { 
    const pokemons = this.props.pokemons;
    console.log(pokemons);
    return (
      <ul className="PokemonList">
        {pokemons.map(pokemon => (
          <PokemonItem key={pokemon.title} pokemon={pokemon} />
        ))}
      </ul>
    );
  }
}
 
export default PokemonList;