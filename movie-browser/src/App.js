import React, { Component } from 'react';
import Header from './components/Header.js';
import Featured from './components/Featured.js';
import Movies from './components/Movies.js';
import Footer from './components/Footer.js';
import fetchMovies from './components/Api.js';

class App extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchMovies('movies');
  }

  render() {
    return (
      <div>
        <Header />
        <Featured movies={this.fetchMovies.slice(0, 6)} />
        <Movies movies={this.fetchMovies} />
        <Footer />
      </div>
    );
  }
}

export default App;
