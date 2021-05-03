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

  handleSearch = async ({ nameFilter, sortField, directionField }) => {
    console.log(directionField);
    this.setState({ page: 1 });
    this.setState({ pokemonName: nameFilter, sortBy: sortField, sortDirection: directionField },
      () => this.fetchPokemon()
    );
  }

  handlePaging = async change => {
    const page = this.state.page;
    const newPage = page + change;
    this.setState({ page: newPage });
    const name = this.state.pokemonName;

    const response = await request.get(POKEDEX_API)
      .query({ pokemon: name })
      .query({ page: page });
    this.setState({ pokemonData: response.body.results });
  }

  async componentDidMount() {
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { pokemonName, sortBy, sortDirection } = this.state;
    const response = await request
      .get(POKEDEX_API)
      .query({ pokemon: pokemonName, sort: sortBy, direction: sortDirection });
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
