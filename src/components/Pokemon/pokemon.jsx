import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemon } from "../../api/fetchPokemon";
import Button from "../Button/button"; "../Theme-Toggler-Button/theme-toggler-button";

export default function Pokemon() {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0);
    function updatePokemonData() {
        setPokemonCount(pokemonCount + 10);
    }

    useEffect(() => {
        const pokemons = fetchPokemon(pokemonCount);
        pokemons.then((data) => setPokemonData([...pokemonData, ...data]));
    }, [pokemonCount]);

    const typeBackgroundColor = (type) => `var(--bg-${type.toLowerCase()})`

    return(
        <div className="flex flex-col justify-center items-center">
            <img src="./src/assets/logo-white.png" alt="Logo" className="h-20 m-6"/>
            <ul className=" rounded-lg text-center flex flex-wrap justify-center w-3/5">
                {pokemonData.map((pokemon, index) => (
                    <li key={index} className="cursor-pointer p-6 m-2 rounded-lg" style={{ backgroundColor: typeBackgroundColor(pokemon.type)}}>
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <img style={{ backgroundColor: typeBackgroundColor(pokemon.type)}} src={pokemon.imageUrl} alt={pokemon.name} />
                            <p style={{ backgroundColor: typeBackgroundColor(pokemon.type)}}>{pokemon.name}</p>
                            <p style={{ backgroundColor: typeBackgroundColor(pokemon.type)}}>{pokemon.type}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button updatePokemonData={updatePokemonData}></Button>
        </div>
    )
}