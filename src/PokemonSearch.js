import { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {
    state = {
      nameFilter: '',
      sortField: '',
      directionField: ''
    }

    handleNameChange = ({ target }) => {
      this.setState({ nameFilter: target.value });
    }

    handleSearchChange = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleDirectionChange = ({ target }) => {
      this.setState({ directionField: target.value });
    }

    componentDidUpdate(prevProp, prevState) {
      if (prevState !== this.state) {
        this.props.onSearch(this.state);
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
      console.log(this.state);
    }
  
    render() {

      const { nameFilter, sortField, directionField } = this.state;

      return (
        <form className="PokemonSearch" onSubmit={this.handleSubmit}>

          <input 
            name="nameFilter"
            value={nameFilter}
            onChange={this.handleNameChange}
          />

          <select
            name="sortField"
            value={sortField}  
            onChange={this.handleSearchChange}
          >
            <option value="">All</option>
            <option value="pokemon">By Name</option>
            <option value="attack">By Attack</option>
            <option value="defense">By Defense</option>
            <option value="speed">By Speed</option>
          </select>
          <select
            name="directionField"
            value={directionField}  
            onChange={this.handleDirectionChange}
          >
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>

          </select>
        
          <button>🔎</button>
        
        </form>
      );
    }
}