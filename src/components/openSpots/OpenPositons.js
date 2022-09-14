import { useEffect, useState } from "react"
import { getCurrentUsersOpenPositions } from "../../managers/OpenPositionManager"
import { OpenPositionForm } from "./OpenPositionForm"

export const OpenPositionList = () => {
    const [openPositions, setOpenPositions] = useState([])

    const loadOpenPositions = () => {
        getCurrentUsersOpenPositions()
            .then((postArray) => {
                setOpenPositions(postArray)
            })
    }

    useEffect(() => {
        loadOpenPositions()
    }, [])


    return (
        <article className="MyOpenPositions">
            <header>
                My Open Positions
            </header>
            {
                openPositions.map(openPosition => {
                    return  <section key={`open--${openPosition.id}`} className="position">
                        <ol>

                            <li>
                                <div className="game__player">{openPosition.position} </div>
                                <div className="game__time">{openPosition.description}  </div>
                                
                            </li>
                        </ol>
                        
                        
                        
                    </section>
                })
            }
            <div className="column">
        <OpenPositionForm  />
      </div>
        </article>
    )
}
