import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Posts } from "../pages/posts"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )
}