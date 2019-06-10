import React, { Component } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import Movies from './components/Movies';
import Footer from './components/Footer';
import MostViewed from './components/MostViewed';
import fetchMovies from './Api.js';

class App extends Component {
  state = { 
    movies: [],
    shouldShowAllMovies: false,
    isLoading: false
   };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetchMovies('films')
    .then(data => this.setState({ movies: data, isLoading: false }));
}

toggleMovieSection = () => {
  this.setState({ shouldShowAllMovies: !this.state.shouldShowAllMovies });
};

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Header />
        <Featured featuredMovies={movies} />
        <MostViewed mostViewedMovies={movies} />
        <Movies allMovies={movies} toggleMovieSection={this.toggleMovieSection} shouldShowAllMovies={this.state.shouldShowAllMovies} />
        <Footer />
      </div>
    );
  }
}

export default App;
