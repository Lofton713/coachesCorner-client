import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createApplicant } from "../../managers/ApplicantManager"
import { getAllOpenPositions } from "../../managers/OpenPositionManager"

export const OpenSpotList = () => {
    const [openSpots, setOpenSpots] = useState([])
    const Navigate = useNavigate()
    const currentUser = localStorage.getItem("user_id")

    useEffect(() => {
        getAllOpenPositions().then(data => setOpenSpots(data))
    }, 
    []
    )

    const handleSaveButtonClick = (event, openSpot) => {
        event.preventDefault()
        alert("Your information has been sent👍")

        const newApplicant = {
            openSpot: openSpot.id,
            player: parseInt(currentUser)
        }

        createApplicant(newApplicant)
    }



    return (<>
            <header class="title 2">
                Open Spots
            </header>
        <article className="openSpots" class="columns is-multiline">
            {
                openSpots.map(openSpot => {
                    return  <section key={`OS--${openSpot.id}`} className="game" class="column is-one-quarter">
                        <ul class="box">
                                <li className="OP__" class="field">Position: {openSpot.position} </li>
                                <li className="OP__time" class="field"> Description: {openSpot.description}  </li>
                                <li className="OP_player" class="field">School: {openSpot?.college.name}</li>
                                <button class="button is-success is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, openSpot)}>Apply for Position</button>                            
                        </ul>
                        
                        
                        
                    </section>
                })
            }
        </article>
    </>
    )
}
