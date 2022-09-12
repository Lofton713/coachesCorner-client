import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


export const NavBar = ({ isStaff, token, setToken }) => {
    const navigate = useNavigate()
    const navbar = useRef()
    const hamburger = useRef()
    let userId = localStorage.getItem('user_id')

    const showMobileNavbar = () => {
        hamburger.current.classList.toggle('is-active')
        navbar.current.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    {/* <img src={Logo} height="3rem" alt="Rare Logo" /> <h1 className="title is-4">Rare Publishing</h1> */}
                </a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" ref={navbar}>
                <div className="navbar-start">
                    {
                        token
                            ? <>
                                
                                {/* <Link to={`/users/${userId}`} className="navbar-item">My Profile</Link> */}
                                {
                                    isStaff
                                        ? <>
                                            <Link to="/players" className="navbar-item">Players</Link>
                                            
                                        </>
                                        : ""
                                }
                            </>
                            :
                            ""
                    }
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                token
                                    ? <>
                                        <button className="button is-outlined" onClick={() => {
                                            setToken('')
                                            navigate('/login')
                                        }}>Logout</button>
                                    </>
                                    :
                                    <>
                                       
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}