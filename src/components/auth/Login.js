import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"

export const Login = ({ setToken, setUserId }) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setIsUnsuccessful] = useState(false)

    

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
        username: username.current.value,
        password: password.current.value
        }

        loginUser(user).then(res => {
        if ("valid" in res && res.valid) {
            localStorage.setItem('is_staff', res.is_staff)
            localStorage.setItem('is_active', res.is_active)
            setToken(res.token)
            setUserId(res.user_id)
            navigate("/posts")
        }
        else {
            setIsUnsuccessful(true)
        }
        })
    }

    return (
        <section className="columns is-centered">
        <form className="column is-two-thirds" onSubmit={handleLogin}>
            <h1 className="title">Coaches Corner</h1>
            <p className="subtitle">Please sign in</p>

            <div className="field">
            <label className="label">Username</label>
            <div className="control">
                <input className="input" type="text" ref={username} />
            </div>
            </div>

            <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input className="input" type="password" ref={password} />
            </div>
            </div>

            <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" type="submit" >Submit</button>
            </div>
            <div className="control">
                <Link to="/registerPlayer" className="button is-link is-light">Player?...Register Here!</Link>
                <div></div>
                <Link to="/registerCoach" className="button is-link is-light">Coach?...Register Here!</Link>
            </div>
            </div>
            {
            isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
            }
        </form>
        </section>
    )
}
