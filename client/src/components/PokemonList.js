import React from 'react';
import PokemonListItem from './PokemonListItem'

var PokemonList = (props) => (
  <div id="pokemonList">
    {props.pokemon.map((pokemon, i) => 
      <PokemonListItem pokemon={pokemon} key={i} />
    )}
  </div>
)

export default PokemonList