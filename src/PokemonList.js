import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

class PokemonList extends Component {
  
  render() { 
    const pokemons = this.props.pokemonProp;
    console.log(pokemons);
    return (
      <ul className="PokemonList">
        {pokemons.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemonProp={pokemon} />
        ))}
      </ul>
    );
  }
}
 
export default PokemonList;