export default function Button({updatePokemonData}) {
    return <button onClick={() => {updatePokemonData()}} className="m-10 bg-white rounded text-black p-2">Load More</button>
}