
const URL = 'https://ghibliapi.herokuapp.com/';

const fetchMovies = param => {
   fetch(`${URL}${param}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data})
        })
}

export default fetchMovies;