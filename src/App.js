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
    permPokemonData: [],
    pokemonName: '',
    sortBy: '',
    sortDirection: 'asc',
    page: 1
  }

  handleSearch = ({ nameFilter, sortField, directionField }) => {
    console.log(directionField);
    this.setState({ pokemonName: nameFilter, sortBy: sortField, sortDirection: directionField, page: 1 },
      () => this.fetchPokemon()
    );
  }

  handlePaging = async change => {
    const { page, pokemonName } = this.state;
    console.log(page, change);
    const newPage = page + change;
    this.setState({ page: newPage });

    const response = await request.get(POKEDEX_API)
      .query({ pokemon: pokemonName })
      .query({ page: page });
    this.setState({ pokemonData: response.body.results },
      () => this.fetchPokemon()
    );
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { pokemonName, sortBy, sortDirection, page } = this.state;
    const response = await request
      .get(POKEDEX_API)
      .query({ pokemon: pokemonName, sort: sortBy, direction: sortDirection, page: page });
    this.setState({ pokemonData: response.body.results, permPokemonData: response.body.results });
  }

  render() {

    const { pokemonData } = this.state;

    return (
      <div className="App">

        <Header />
        <PokemonSearch onSearch={this.handleSearch} />

        <main>
          <PokemonList 
            pokemonProp={pokemonData}
            onPaging={this.handlePaging}
          />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
