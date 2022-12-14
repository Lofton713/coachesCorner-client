import { useRef } from "react"
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
        <nav className="navbar mb-3 is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    {/* <img src={Logo} height="3rem" alt="Rare Logo" /> <h1 className="title is-4">Rare Publishing</h1> */}
                </a>
                <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://dt5602vnjxv0c.cloudfront.net/portals/6916/images/coaches_corner-001.jpg" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="100" height="175"></img>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

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
                            ? isStaff ?
                            
                                        <>
                                            <Link to="/" className="navbar-item">Home</Link>
                                            <Link to={`/coachhome/${userId}`} className="navbar-item">Coach Portal</Link>
                                            <Link to="/players" className="navbar-item">Players</Link>
                                            <Link to="/games" className="navbar-item">Games</Link>
                                            <Link to="/openings" className="navbar-item">My Open Positions</Link>
                                            
                                            
                                            
                                        </>
                            :<>
                                <Link to="/" className="navbar-item">Home</Link>
                                <Link to={`/playerHome/${userId}`} className="navbar-item">Player Portal</Link>
                                <Link to="/coaches" className="navbar-item">Coaches</Link>
                                <Link to="/colleges" className="navbar-item">Colleges</Link>
                                <Link to="/openspots" className="navbar-item">Available Positions</Link>
                                
                                
                                
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