import axios from 'axios';

const getPokemon = (query, callback) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
  .then (data => callback(data))
  .catch (err => console.error(err))
}



export default getPokemon;