import React from 'react';

import PokemonList from './PokemonList'
import Search from './Search';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    this.setState({ pokemon: this.props.pokemon });
  }

  addPokemon = (query) => {
    this.props.getPokemon(query, ({ data }) => {
      let { id, name, sprites } = data;
      /*
      var id = data.id
      var name = data.name
      var sprites = data.sprites
      */
      let pokemon = [...this.state.pokemon, { id, name, sprites }];
      this.setState({ pokemon })
    })
  }

  render() {
    return (
      <div>
        <Search addPokemon={this.addPokemon} />
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default App;