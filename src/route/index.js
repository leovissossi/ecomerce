import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import Login from "../pages/Login";

export function RouteApp() {
    return (
        
        <BrowserRouter>
            <Routes>

                <Route path="/produto" element={<Produto />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </BrowserRouter>
    );

}