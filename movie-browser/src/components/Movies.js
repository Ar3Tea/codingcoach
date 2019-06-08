import React, { Component } from 'react';

class Movies extends Component {
        state = {
            movies: []
        };
  
    render() {
      return (
        <div className="bg-blue-400">
          <h1 className=" text-center font-mono text-3xl italic">All Movies</h1>
          <div className="flex flex-row flex-wrap items-center">
            {this.state.movies.map(movie => 
            <div className="w-1/6 text-center border-solid border-4 border-black m-5 self-auto shadow-2xl">
            <div className="font-semibold" key={movie.id}>{movie.title}</div>
            <div>{movie.rt_score}</div>
            <div>{movie.description.slice(0, 50)}...Read More</div>
          </div>
          )}
          </div>
        </div>
      );
    }
  }
  export default Movies;