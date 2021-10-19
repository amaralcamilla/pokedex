import React from "react";
import DATA from './assets/pokemon_data'
import Pokemon from './components/Pokemon'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <div className="container-pokemons">

        {DATA.map((item) => ( //"Percorra meu array de data e a cada loop compile e renderize cada dado dele"
            <Pokemon
              key={item.id} //Props pré-definida. O react já entende que id é key.
              name={item.name.english}
              photo={item.image}
              attack={item.base.Attack}
              defense={item.base.Defense}
              hp={item.base.hp}
              types={item.type}
              />
        ))}

        </div>
      </div>
    )
  }
}

export default App