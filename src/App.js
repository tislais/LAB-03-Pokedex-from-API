import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import creatureData from './creatures';
import './App.css';
import request from 'superagent';


const POKEDEX_API = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemons: []
  }

  handleSearch = ({ nameFilter, sortField }) => {

    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creatureData
      .filter(pokemon => {
        return !nameFilter || pokemon.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ pokemons: searchedData });
  }


  async componentDidMount() {
    const response = await request
      .get(POKEDEX_API);
    this.setState({ pokemon: response.body.results });
    console.log({ pokemon: response.body.results });
  }

  render() {

    const { pokemons } = this.state;

    return (
      <div className="App">

        <Header />
        <PokemonSearch onSearch={this.handleSearch} />

        <main>
          <PokemonList pokemons={pokemons} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
