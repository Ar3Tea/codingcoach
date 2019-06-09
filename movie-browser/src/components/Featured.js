import React, { Component } from 'react';
import Popup from 'reactjs-popup'

class Featured extends Component {
      state = { movies:[] }

    componentDidMount() {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(data => this.setState({ movies: data }));
    }
  
    render() {
      return (
        <div className="bg-blue-400">
          <h1 className=" text-center font-mono text-3xl italic">Featured Movies</h1>
          <div className="flex flex-row flex-wrap items-center">
            {this.state.movies.slice(0, 6).map(movie => 
            <div className="w-1/6 mb-4 text-center border-solid border-4 border-gray-400 pt-6 pb-5">
            <div className="font-semibold">{movie.title}</div>
            <div>{movie.rt_score}</div>
            <div>{movie.description.slice(0, 50)}</div>
            <Popup
              trigger={<button className="button"> Read More </button>}
              modal
              closeOnDocumentClick
            >
              <div><span className="font-bold">Title:</span> <span className="italic">{movie.title}</span> </div>
              <div><span className="font-bold">Description:</span> <span className="italic">{movie.description}</span> </div>
              <div><span className="font-bold">Director:</span> <span className="italic">{movie.director}</span> </div>
              <div><span className="font-bold">Producer:</span> <span className="italic">{movie.producer}</span> </div>
              <div><span className="font-bold">Release Date:</span> <span className="italic">{movie.release_date}</span> </div>
              <div><span className="font-bold">Score:</span> <span className="italic">{movie.rt_score}</span> </div>
            </Popup>
          </div>
          )}
          </div>
        </div>
      );
    }
  }

  export default Featured;