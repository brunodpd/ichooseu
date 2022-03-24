/* 
quando clicar no pokemon da listagem temos que esconder o cartao do aberto e mostrar o cartao correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos

1 - listagem

2 - cartao do pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

- remover a classe aberto só do cartao que está aberto
- ao clicar em um  pokemon na listagem pegamos o id desse pokemon pra saber qual cartao mostrar
-remover a classe ativo que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado

*/

//precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', () => {
     
        //remover a classe aberto só do cartao que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

         //ao clicar em um  pokemon na listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNaSlistagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaSlistagem.classList.add('ativo')

    })

})

        const audioLapras = new Audio()
        audioLapras.src="./src/sounds/sound-lapras.ogg"

        
        const audioPikachu = new Audio()
        audioPikachu.src="./src/sounds/sound-pikachu.ogg"

        const audioCubone = new Audio()
        audioCubone.src="./src/sounds/sound-cubone.ogg"

        const audioLugia = new Audio()
        audioLugia.src="./src/sounds/sound-lugia.ogg"

        const audioSuicune = new Audio()
        audioSuicune.src="./src/sounds/sound-suicune.ogg"

        const audioCharm = new Audio()
        audioCharm.src="./src/sounds/sound-charm.ogg"