import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {

  handlePrev = () => this.props.onPaging(-1);
  handleNext = () => this.props.onPaging(1);
  
  render() {


    return (
      <div className="Paging">
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }

}