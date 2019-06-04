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
        <div className="bg-blue-400">
          <h1 className=" text-center font-mono text-3xl italic">Featured Movies</h1>
          <div className="flex flex-row flex-wrap items-center">
            {this.state.movies.slice(0, 6).map(movie => 
            <div className="w-1/6 mb-4 text-center border-solid border-4 border-gray-400 pt-5 pb-5">
            <div className="font-semibold" key={movie.id}>{movie.title}</div>
            <div key={movie.id}>{movie.rt_score}</div>
            <div key={movie.id}>{movie.description.slice(0, 50)}...Read More</div>
          </div>
          )}
          </div>
        </div>
      );
    }
  }

  export default Featured;