import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from "../pages/posts"
import PokemonDetail from "../components/PokemonDetail/pokemonDetail"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/pokemon/:name" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    )
}