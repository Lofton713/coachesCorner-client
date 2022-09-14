import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { RegisterPlayer } from "../components/auth/RegisterPlayer"
import { RegisterCoach } from "../components/auth/RegisterCoach"
import { Authorized } from "./Authorized"
import { PlayerList } from "../components/player/PlayerList"
import { HomePage } from "../components/home/HomePage"
import { GameList } from "../components/game/GameList"
import { OpenPositionList } from "../components/openSpots/OpenPositons"
import { CoachProfile } from "../components/profile/CoachProfile"
import { PlayerHome } from "../components/home/PlayerHome"
import { CoachList } from "../components/coach/CoachList"
import { CollegeList } from "../components/college/CollegeList"
import { OpenSpotList } from "../components/openSpots/OpenSpotsList"
import { PlayerProfile } from "../components/profile/PlayerProfile"

export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerPlayer" element={<RegisterPlayer setToken={setToken} setUserId={setUserId} />} />
        <Route path="/registerCoach" element={<RegisterCoach setToken={setToken} setUserId={setUserId} />} />
        <Route element={<Authorized token={token} isActive={isActive} />}></Route>
            {/* Add Routes here */}
            <Route path="" element={<HomePage />} />
            <Route path="/playerhome" element={<PlayerHome />} />
            <Route path="/coaches" element={<CoachList />} />
            <Route path="/colleges" element={<CollegeList />} />
            <Route path="/openspots" element={<OpenSpotList />} />
            <Route path="/users/:userId" element={<PlayerProfile />} />
            
            {
                isStaff === true
            ? <>
                <Route path="/players" element={<PlayerList />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/openings" element={<OpenPositionList />} />
                <Route path="/profile" element={<CoachProfile />} />

            </>
            :<>
            
            </>
        }
    </Routes>
}