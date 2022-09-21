import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


export const NavBar = ({ isStaff, token, setToken }) => {
    const navigate = useNavigate()
    const navbar = useRef()
    const hamburger = useRef()
    let userId = localStorage.getItem('user_id')

    

    return (
        <nav className="navbar mb-3 is-info" role="navigation" aria-label="main navigation">
            

            <div className="navbar-menu" ref={navbar}>
                
                    {
                        token
                            ? <>
                                {
                                    isStaff
                                        ? <>
                                            
                                            
                                        </>
                                        : ""
                                }
                            </>
                            :
                            ""
                    }
                </div>

                
        </nav>
    )
}