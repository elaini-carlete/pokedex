import { useState, useEffect } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import Button from "../Button/button";

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

    return(
        <div className="flex flex-col justify-center items-center">
            <img src="./src/assets/logo-white.png" alt="Logo" className="h-32 m-6"/>
            <ul className="text-center flex flex-wrap justify-center w-3/5">
                {pokemonData.map((pokemon, index) => (
                    <li key={index}className={"p-6 m-2 rounded-lg bg-${pokemon.type}"}>
                        <img className={"bg-${pokemon.type}"} src={pokemon.imageUrl} alt={pokemon.name} />
                        <p className={"bg-${pokemon.type}"}>{pokemon.name}</p>
                        <p className={"bg-${pokemon.type}"}>{pokemon.type}</p>
                    </li>
                ))}
            </ul>
            <Button updatePokemonData={updatePokemonData}></Button>
        </div>
    )
}