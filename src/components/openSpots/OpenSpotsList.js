import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllOpenPositions } from "../../managers/OpenPositionManager"

export const OpenSpotList = () => {
    const [openSpots, setOpenSpots] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        getAllOpenPositions().then(data => setOpenSpots(data))
    }, 
    []
    )



    return (
        <article className="openSpots" class="columns is-multiline is-mobile">
            <header class="title 2">
                Open Spots
            </header>
            {
                openSpots.map(openSpot => {
                    return  <section key={`OS--${openSpot.id}`} className="game" class="column">
                        <ul class="box">
                                <div className="OP__">Position: {openSpot.position} </div>
                                <div className="OP__time"> Description: {openSpot.description}  </div>
                                <div className="OP_player">School: {openSpot.college.name}</div>
                                
                            
                        </ul>
                        
                        
                        
                    </section>
                })
            }
        </article>
    )
}
