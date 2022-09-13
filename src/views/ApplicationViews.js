import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterPlayer } from "../components/auth/RegisterPlayer"
import { RegisterCoach } from "../components/auth/RegisterCoach"
import { Authorized } from "./Authorized"
import { PlayerList } from "../components/player/PlayerList"
import { CoachHome } from "../components/home/CoachHome"
import { GameList } from "../components/game/GameList"
import { OpenPositionList, OpenPositions } from "../components/openSpots/OpenPositons"

export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerPlayer" element={<RegisterPlayer setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerCoach" element={<RegisterCoach setToken={setToken} setUserId={setUserId} />} />
        <Route element={<Authorized token={token} isActive={isActive} />}></Route>
            {/* Add Routes here */}
            <Route path="/coachhome" element={<CoachHome />} />
            <Route path="/players" element={<PlayerList />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/openings" element={<OpenPositionList />} />
    </Routes>
}