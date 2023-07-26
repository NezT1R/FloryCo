import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FavouriteProducts from "./Components/Header/LikeProducts/FavouriteProducts";

function App() {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <div>
                    <Routes>

                    </Routes>
                </div>
                <main>

                </main>
            </div>

        </BrowserRouter>
    );
}

export default App;
