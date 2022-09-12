import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterPlayer } from "../components/auth/RegisterPlayer"
import { RegisterCoach } from "../components/auth/RegisterCoach"
import { Authorized } from "./Authorized"
import { PlayerList } from "../components/player/PlayerList"

export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerPlayer" element={<RegisterPlayer setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerCoach" element={<RegisterCoach setToken={setToken} setUserId={setUserId} />} />
        <Route element={<Authorized token={token} isActive={isActive} />}></Route>
            {/* Add Routes here */}
            <Route path="/players" element={<PlayerList />} />
    </Routes>
}