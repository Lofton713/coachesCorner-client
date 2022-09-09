    import { useState } from "react"
    import { ApplicationViews } from "./views/ApplicationViews"
    



    export const CoachesCorner = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))
    const [userId, setUserIdState] = useState(localStorage.getItem('user_id'))

    const setToken = (newToken) => {
        localStorage.setItem('auth_token', newToken)
        setTokenState(newToken)
    }

    const setUserId = (userId) => {
        localStorage.setItem('user_id', userId)
        setUserIdState(userId)
    }



    return <>

        <ApplicationViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} isStaff={localStorage.getItem("is_staff")==="true"} isActive={localStorage.getItem("is_active")==="true"}/>
    </>
    }
