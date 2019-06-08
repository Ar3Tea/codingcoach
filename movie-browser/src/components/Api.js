
const URL = 'https://ghibliapi.herokuapp.com/';

const fetchMovies = param => {
   fetch(`${URL}${param}`)
        .then(response => response.json())
        .then(movies => this.state({ movies }));
}

export default fetchMovies;