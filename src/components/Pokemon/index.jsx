import React from 'react';
import PropTypes from 'prop-types';
import { handleGenerateBg } from "../../utils";

class Pokemon extends React.Component {
    render() {
        const bgPokemon = handleGenerateBg(this.props.types[0])
        return (
            <div className="pokemon" style={{ background: bgPokemon, borderColor: bgPokemon }}>
                <img
                    className="pokemon-image"
                    src={this.props.photo || "https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"}
                    alt={`pokemon ${this.props.name}`}
                />
                { /* Opção2: if
         !this.props.photo && (
            <img
              className="pokemon-image"
              src="https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"
              alt="pokebola"
            />
          )}
           { this.props.photo &&
          <img
            className="pokemon-image"
            src={this.props.photo}
            alt={`pokemon ${this.props.name}`}
        /> */}
                { /* Opção3: ternário
         this.props.photo ? (
             <img
            className="pokemon-image"
            src={this.props.photo}
            alt={`pokemon ${this.props.name}`}
            />

            ) : <img
             className="pokemon-image"
              src="https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png"
              alt={`pokemon ${this.props.name}`}
            />
         }
        */}
                <h2>{this.props.name}</h2>

                <ul className="pokemon-info">
                    <li>HP: {this.props.hp}</li>
                    <li>Attack: {this.props.attack}</li>
                    <li>Defense: {this.props.defense}</li>
                </ul>

                <div>
                    {this.props.types.join(' / ')}
                </div>

            </div>
        )
    }
}

Pokemon.propTypes = {//Objeto de validação
    name: PropTypes.string.isRequired, //Além de verificar se é uma string, obriga que a props nome seja passada 
    photo: PropTypes.string,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon