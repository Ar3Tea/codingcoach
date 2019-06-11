
const URL = 'https://ghibliapi.herokuapp.com/';

const fetchMovies = param => {
   return fetch(`${URL}${param}`)
        .then(response => response.json())
        }

export default fetchMovies;