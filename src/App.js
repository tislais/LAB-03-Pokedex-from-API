import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import creatureData from './creatures';
import './App.css';
import request from 'superagent';

class App extends Component {

  state = {
    creatures: creatureData
  }

  handleSearch = ({ nameFilter, sortField }) => {

    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creatureData
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
  }

  componentDidMount() {
    console.log('big butts');
  }

  render() {

    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />
        <CreatureSearch onSearch={this.handleSearch} />

        <main>
          <CreatureList creatures={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
