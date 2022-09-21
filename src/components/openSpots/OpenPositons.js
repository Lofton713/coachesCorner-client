import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteOpenPosition, getCurrentUsersOpenPositions } from "../../managers/OpenPositionManager"
import { OpenPositionForm } from "./OpenPositionForm"
import { Link } from 'react-router-dom'

export const OpenPositionList = () => {
    const [openPositions, setOpenPositions] = useState([])
    const navigate = useNavigate()

    const loadOpenPositions = () => {
        getCurrentUsersOpenPositions()
            .then((postArray) => {
                setOpenPositions(postArray)
            })
    }

    useEffect(() => {
        loadOpenPositions()
    }, [])


    return (<>
            <header class="title">
                My Open Positions
            </header>
        <article className="MyOpenPositions" class="columns">
            {
                openPositions.map(openPosition => {
                    return  <section key={`open--${openPosition.id}`} className="position" class="column">
                        <ol class="box">

                            <li className="OP__position">Position: {openPosition.position} </li>
                            <li className="OP_description">Description: {openPosition.description}  </li>
                            <button class="button is-success is-small" onClick={() => navigate(`/openings/${openPosition.id}`)} >View Applicants</button>
                            
                            <button class="button is-danger is-small" onClick={() => { deleteOpenPosition(openPosition.id).then(() => {
                                navigate(`/coachHome/${localStorage.getItem('user_id')}`)
                            })}}>Delete</button>    
                                
                            
                        </ol>
                        
                        
                        
                    </section>
                })
            }
            <div class="column form" >
                <OpenPositionForm  />
            </div>
        </article>
    </>
    )
}
