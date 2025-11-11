import './App.css'
import { useState } from 'react'
import Header from './components/header.jsx'
import CardsContainer from './components/cards-container.jsx';

const pokemonNames = [
    'ditto', 
    'pikachu', 
    'abra', 
    'bulbasaur', 
    'charmander', 
    'squirtle', 
    'snorlax', 
    'rapidash',
    'oddish',
    'mewtwo',
    'magikarp',
    'geodude'
]

function App() {
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [clickedPokemonsArray,setClickedPokemonsArray ] = useState([]);

    const showModal = clickedPokemonsArray.length === pokemonNames.length ? true: false;

    function checkMaxscore(score) {
      score  > maxScore && setMaxScore(score);
    }

    function updateScore(pokemonId) {
      const isPokemonWasClicked = clickedPokemonsArray.find(pokemon => pokemon === pokemonId);


      if (isPokemonWasClicked) {
        checkMaxscore(score);
        setScore(0);
        setClickedPokemonsArray([]);
        return;
      }

      const newScore = score + 1;
      setScore(newScore);
      checkMaxscore(newScore);
      setClickedPokemonsArray([...clickedPokemonsArray, pokemonId]);
    }

    if (!showModal){
      return (
        <>
          <Header 
          score={score} 
          maxScore={maxScore} />
          <CardsContainer 
          clickedPokemonsArray={clickedPokemonsArray}
          pokemonNames={pokemonNames}
          updateScore={updateScore}/>
        </>

      )
    }

    return (
      <div className="modal">
        <h2>Congrats!</h2>
        <h2>Youv'e Remembered All The Pokemons!</h2>
        <button  onClick={() => window.location.reload()}> Restart</button>
      </div>
    )

}

export default App
