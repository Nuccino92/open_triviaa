import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Casual from "./components/casual/Casual";
import Login from "./components/login/Login";
import Nav from "./components/nav/Nav";
import Ranked from "./components/ranked/Ranked";
import Register from "./components/register/Register";
import Game from "./pages/game/Game";
import Homepage from "./pages/homepage/Homepage";
import Leaderboards from "./pages/leaderboards/Leaderboards";
import Profile from "./pages/profile/Profile";
import { useSelector } from "react-redux";
import GameLog from "./pages/gameLog/GameLog";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import HighScores from "./pages/highScores/HighScores";
import List from "./components/list/List";

const App = () => {
  const { mode } = useSelector((state) => state.gameReducer);

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [ranked, setRanked] = useState(false);
  const [casual, setCasual] = useState(false);

  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav setLogin={setLogin} setRegister={setRegister} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setRanked={setRanked}
                setCasual={setCasual}
                setLogin={setLogin}
                setLoading={setLoading}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/highscores" element={<HighScores />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route
            path="/game"
            element={
              loading ? (
                <LoadingScreen setLoading={setLoading} />
              ) : mode ? (
                <Game />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/game/gamelog"
            element={mode ? <GameLog /> : <Navigate to="/" />}
          />
          <Route path="/leaderboards/:category" element={<List />} />
        </Routes>
        {/* modals */}
        {login && <Login setLogin={setLogin} />}
        {register && <Register setRegister={setRegister} />}
        {ranked && <Ranked setRanked={setRanked} />}
        {casual && <Casual setCasual={setCasual} />}
      </BrowserRouter>
    </div>
  );
};

export default App;
