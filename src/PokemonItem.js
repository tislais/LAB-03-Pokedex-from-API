import React, { Component } from 'react';
import './PokemonItem.css';



class PokemonItem extends Component {

  render() { 
    const { pokemonProp } = this.props;
    //const pokemonProp = this.props.pokemonProp; This is the same thing!

    // function renderTypes() {
    //   if (!pokemonProp.type_2 === 'NA') {
    //     return <span>{pokemonProp.type_1} · {pokemonProp.type_2}</span>;
    //   } else {
    //     return <span>{pokemonProp.type_1}</span>;
    //   }
    // }

    return (
      <a href={pokemonProp.pokedex} className="PokemonItem">
        <li>
          <h2>{pokemonProp.pokemon}</h2>
          <img alt={pokemonProp.pokemon} src={pokemonProp.url_image} />
          <div className="PokeTypes">
            <span>{pokemonProp.type_1}</span>
            <span> · {pokemonProp.type_2}</span>
          </div>
          <div className="PokeHP">Health: <span>{pokemonProp.hp}</span></div>
          <div className="PokeStats">
            <div>Attack: <span>{pokemonProp.attack}</span></div>
            <div>Special: <span>{pokemonProp.special_attack}</span></div>
            <div>Defense: <span>{pokemonProp.defense}</span></div>
            <div>Special: <span>{pokemonProp.special_defense}</span></div>
          </div>
        </li>
      </a>
    );
  }
}
 
export default PokemonItem;