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
        <article className="MyOpenPositions" class="columns is-multiline is-mobile">
            <header>
                My Open Positions
            </header>
            {
                openPositions.map(openPosition => {
                    return  <section key={`open--${openPosition.id}`} className="position" class="columns">
                        <ol class="box">

                            <li>
                                <div className="OP__position">Position:{openPosition.position} </div>
                                <div className="OP_description">Description: {openPosition.description}  </div>
                                
                                
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
