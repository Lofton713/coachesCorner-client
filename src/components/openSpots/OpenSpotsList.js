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
        alert("school Lot Added to Favorites 👍")

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
        <article className="openSpots" class="columns">
            {
                openSpots.map(openSpot => {
                    return  <section key={`OS--${openSpot.id}`} className="game" class="column">
                        <ul class="box">
                                <div className="OP__">Position: {openSpot.position} </div>
                                <div className="OP__time"> Description: {openSpot.description}  </div>
                                <div className="OP_player">School: {openSpot?.college.name}</div>
                                <button class="button is-success is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, openSpot)}>Apply for Position</button>                            
                        </ul>
                        
                        
                        
                    </section>
                })
            }
        </article>
    </>
    )
}
