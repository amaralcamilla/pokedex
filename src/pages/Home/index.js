import React from 'react';
import Pokemon from './components/Pokemon'
import DATA from '../../assets/pokemon_data'
import Header from '../../components/Header'

class Home extends React.Component {
    constructor(props) { //Definir o estado inicial
        super(props);
        this.state = { pokemons: [], loading: true } //Exibirá um loading e uma lista vazia.
    }
    componentDidMount() { //Alterar/atualizar o estado - todo servidor remoto precisa de DidMount. Mas só precisará do DidMount se precisar atualizar automaticamente, ou seja, se não precisar de uma ação do usuário (clicar num botão, por exemplo).
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({ pokemons: DATA, loading: false }); //Aqui já sabe quem é o DATA pois foi declarado em render "this.state.pokemons.map"
        }, 3000); //Neste caso, estamos simulando uma atualização buscando dados de fora, após 3 segundos mostrará os dados encontrados.
    }
    //Se usar um botão:
    //Colocar "loading: false" lá no this.state do constructor. E "shoButton: true" para que ele não exiba mais o botão quando executar a função getData.
    //Acrescentar dentro da div "container-pokemons" o botão: {this.state.showButton && ()}<button onClick=(this.getData)>Get DATA</button>)}
    //Acrescentar aqui a função:
    //getData = () => {
    //setTimeout(() => {
    //this.setState({ pokemons: DATA, loading: false, showButton: false}); 
    //}, 3000);
    //}

    render() {

        return (
            <>
                <Header />
                <div className="container-pokemons">
                    {this.state.loading && "Loading..." //Se tiver carregando (true), mostra "Loading...". Se não estiver carregando (false), mostra a lista 
                    }
                    {!this.state.loading && this.state.pokemons.map((item) => ( //"Percorra meu array de data e a cada loop compile e renderize cada dado dele"
                        <Pokemon
                            key={item.id} //Props pré-definida. O react já entende que id é key.
                            name={item.name.english}
                            photo={item.image}
                            attack={item.base.Attack}
                            defense={item.base.Defense}
                            hp={item.base.HP}
                            types={item.type}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default Home
