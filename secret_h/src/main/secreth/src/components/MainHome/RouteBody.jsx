import { Route, Routes } from "react-router-dom";

import MainHomePage from "./MainHomePage";
import SelectGameModePage from "../SelectGameMode/SelectGameModePage";
import GamePage from "../GamePage/GamePage";

function RouteBody() {
    return (
        <Routes>
            <Route path='/' element={<MainHomePage />}></Route>

            <Route path='/SelectGameModePage' element={<SelectGameModePage />}></Route>
            <Route path='/GamePage' element={<GamePage />}></Route>

        </Routes>
    );
}

export default RouteBody;