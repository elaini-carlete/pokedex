export default function Button({updatePokemonData}) {
    return <button onClick={() => {updatePokemonData()}} className="m-6 bg-white rounded text-black p-2">Load More</button>
}