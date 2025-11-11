import '../styles/cards-container.css'
import {useState, useEffect} from 'react';

export default function CardsContainer({ updateScore, pokemonNames }) {
    const [pokemonsObjArray, setPokemonsObjArray] = useState(null);

    function shuffleArray() {
        const shuffeledArr = new Array(pokemonsObjArray.length).fill(null);
        const arrayCopy = [...pokemonsObjArray];

        for(let i = 0, n = pokemonsObjArray.length; i < n; i++) {
            const randNumber = Math.floor(Math.random() * arrayCopy.length);
            shuffeledArr[i] = arrayCopy.splice(randNumber, 1)[0];
        };

        setPokemonsObjArray(shuffeledArr);
    }    

    useEffect(() => {
        const pokemonPromises = pokemonNames.map(pokemon => fetchPokemons(pokemon));
        const pokemonsArray = [];
        async function fetchPokemons(pokemon) {
            const pokemonResult = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
            const pokemonJSON = await pokemonResult.json();
            const pokemonName = pokemon;
            const pokemonImg = pokemonJSON.sprites.front_default;
            return {pokemonName, pokemonImg}
        };

        Promise.all(pokemonPromises).then(pokemonPromisesValues => {
            pokemonPromisesValues.forEach((pokemonPromisesValue, index) => {
                pokemonsArray.push({...pokemonPromisesValue, id:index,});
            });
            setPokemonsObjArray(pokemonsArray);
        });

    },[])

    if(pokemonsObjArray) {
        return (
        <div className='cards-container'>
            {pokemonsObjArray.map(
                pokemonObj => 
                <Card 
                key={pokemonObj.pokemonName}
                pokemonObj={pokemonObj}
                shuffleArray={shuffleArray}
                updateScore={updateScore}
            />)}
        </div>
        )
    }

    return (
        <div className='cards-container'>
            Rendering
        </div>
    )
};

function Card({ pokemonObj, shuffleArray, updateScore }) {
    return(
        <div className='card' onClick={() =>{
            shuffleArray();
            updateScore(pokemonObj.id)
            }}>
            <div className='card-text-div'>
                <p>{pokemonObj.pokemonName}</p>
            </div>
            <div className='card-image-div'>
                <img src={pokemonObj.pokemonImg} alt={pokemonObj.pokemonName + ' picture'}/>
            </div>
        </div>
    );
};
