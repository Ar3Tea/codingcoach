import React, { Component } from 'react';

class Featured extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }
  
    componentDidMount() {
      fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(movies => this.setState({ movies }));
    }
  
    render() {
      return (
        <div className="container">
          {this.state.movies.map(movie => <h1 key={movie.id}>{movie.title}</h1>)}
        </div>
      );
    }
  }

  export default Featured;