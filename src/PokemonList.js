import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';
import Paging from './Paging';

class PokemonList extends Component {
  
  render() { 
    const pokemons = this.props.pokemonProp;
    const { onPaging } = this.props;
    //console.log(pokemons);
    return (
      <div className="Wrap">
        <Paging onPaging={onPaging} />
        <ul className="PokemonList">
          {pokemons.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemonProp={pokemon} />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default PokemonList;