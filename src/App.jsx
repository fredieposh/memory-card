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

    const showModal = false;

    function checkMaxscore() {
      score > maxScore && setMaxScore(score);
    }

    function updateScore(pokemonId) {
      const isPokemonWasClicked = clickedPokemonsArray.find(pokemon => pokemon === pokemonId);


      if (isPokemonWasClicked) {
        checkMaxscore();
        setScore(0);
        setClickedPokemonsArray([]);
        return;
      }

      setScore(score + 1);
      checkMaxscore();
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

}

export default App
