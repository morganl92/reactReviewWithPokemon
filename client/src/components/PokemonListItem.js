import React from 'react';

var PokemonListItem = ({ pokemon }) => {
  return (
    <div className="pokemonItem">
      <div>Name: {pokemon.name}</div>
      <div>Id: {pokemon.id}</div>
      <img src={pokemon.sprites.front_default} alt="pokemon image"/> 
    </div>
  )
}

export default PokemonListItem;