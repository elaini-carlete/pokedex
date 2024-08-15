import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemon } from "../../api/fetchPokemon";
import Button from "../Button/button";
import Input from "../Input/index.jsx";
import Type from "../Type/index.jsx";
import Toggle from "../Toggle/index.jsx";

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

    // const typeBackgroundColor = (type) => `var(--bg-${type.toLowerCase()})`
    const typeBackgroundColor = (type) => {
        const colorVar = `--bg-${type.toLowerCase()}`;
        const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
        return color
    };

    const typeLightBackgroundColor = (type) => {
        const bgColorVar = `--bg-type-${type.toLowerCase()}`;
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue(bgColorVar);
        return bgColor;
    };

    return(
        <div className="flex flex-col justify-center items-center">
            <img src="./src/assets/logo-white.png" alt="Logo" className="h-20 m-5"/>
            <div className="flex items-center gap-5 mb-4 flex-wrap justify-center w-2/4"> {/* Flex container para Input e Toggle */}
                <Toggle />
                <Input />
                <Type />
            </div>
            <ul className=" rounded-lg text-center flex flex-wrap justify-center w-2/4">
                {pokemonData.map((pokemon, index) => (
                    <li key={index} className="cursor-pointer p-4 m-2 rounded-lg" style={{ backgroundColor: typeBackgroundColor(pokemon.type)}}>
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.imageUrl} alt={pokemon.name} style={{ backgroundColor: typeLightBackgroundColor(pokemon.type)}} className="rounded-lg"/>
                            <p className="border-solid rounded-2xl my-4 p-1">{pokemon.name}</p>
                            <p style={{ backgroundColor: typeLightBackgroundColor(pokemon.type)}} className="rounded-lg p-1">{pokemon.type}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button updatePokemonData={updatePokemonData}></Button>
        </div>
    )
}