import React, { Component } from 'react';
import Header from './components/Header.js';
import Featured from './components/Featured.js';
import Movies from './components/Movies.js';
import Footer from './components/Footer.js';
//import fetchMovies from './components/Api.js';

class App extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.setState({ movies: data }));
  }
//    fetchMovies('films');

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Header />
        <Featured movies={movies} />
        <Movies movies ={movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
