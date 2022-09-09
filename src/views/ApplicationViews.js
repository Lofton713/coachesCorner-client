import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Authorized } from "./Authorized"

export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
        {/* <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} />} /> */}
        <Route element={<Authorized token={token} isActive={isActive} />}></Route>
        {/* Add Routes here */}
    </Routes>
}