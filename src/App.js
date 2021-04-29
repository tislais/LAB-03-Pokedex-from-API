import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import './App.css';
import request from 'superagent';


const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemonData: [],
    permPokemonData: []
  }

  handleSearch = ({ nameFilter, sortField }) => {

    const nameRegex = new RegExp(nameFilter, 'i');
    const searchedData = this.state.permPokemonData
      .filter(pokemon => {
        return !nameFilter || pokemon.pokemon.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ pokemonData: searchedData });
  }


  async componentDidMount() {
    const response = await request
      .get(POKEDEX_API);
    this.setState({ pokemonData: response.body.results, permPokemonData: response.body.results });
  }

  render() {

    const { pokemonData } = this.state;

    return (
      <div className="App">

        <Header />
        <PokemonSearch onSearch={this.handleSearch} />

        <main>
          <PokemonList pokemonProp={pokemonData} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
