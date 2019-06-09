import React, { Component } from 'react';
import Popup from 'reactjs-popup'


class Movies extends Component {
        state = {
            movies: [],
            shouldShowAllMovies: false
        };

        componentDidMount() {
          fetch('https://ghibliapi.herokuapp.com/films')
          .then(response => response.json())
          .then(data => this.setState({ movies: data }));
        } 
      
        toggleMovieSection = () => {
          this.setState({ shouldShowAllMovies: !this.state.shouldShowAllMovies });
        };
      
      render() {
        const { shouldShowAllMovies } = this.state;
      return (
        <div className="bg-blue-400 content">
          <h1 className=" text-center font-mono text-3xl italic">All Movies</h1>
          <div className="text-center">
          <button className="view-all" onClick={this.toggleMovieSection}>View All Movies</button>
          </div>
        {shouldShowAllMovies ? (
          <div className="flex flex-row flex-wrap items-center justify-center">
            {this.state.movies.map(movie => 
            <div className="w-1/6 text-center border-solid border-4 border-black m-5 self-auto shadow-2xl">
            <div className="font-semibold">{movie.title}</div>
            <div className="flex justify-center">
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <div>{movie.description.slice(0, 50)}...</div>
            <Popup
              trigger={<button className="button"> Read More </button>}
              modal
              closeOnDocumentClick
            >
              <div><span className="font-bold">Title:</span> <span className="italic">{movie.title}</span> </div>
              <div className="flex justify-center"> <img src="https://via.placeholder.com/150" alt="placeholder" /> </div>
              <div><span className="font-bold">Description:</span> <span className="italic">{movie.description}</span> </div>
              <div><span className="font-bold">Director:</span> <span className="italic">{movie.director}</span> </div>
              <div><span className="font-bold">Producer:</span> <span className="italic">{movie.producer}</span> </div>
              <div><span className="font-bold">Release Date:</span> <span className="italic">{movie.release_date}</span> </div>
              <div><span className="font-bold">Score:</span> <span className="italic">{movie.rt_score}</span> </div>
            </Popup>
          </div>
          )}
          </div>
          ) : null}
        </div>
      );
    }
  }
  export default Movies;