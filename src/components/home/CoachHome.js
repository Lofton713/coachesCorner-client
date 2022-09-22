import { useEffect, useState } from "react"
import { getAllRecruits } from "../../managers/RecruitManager"
import { CoachEdit } from "../coach/CoachEdit"
import { CoachGameList } from "../game/CoachGameList"
import { OpenPositionForm } from "../openSpots/OpenPositionForm"
import { RecruitsList } from "../recruit/RecruitsList"

export const CoachHome = () => {
    const [recruits, setRecruits] = useState([])

    const loadRecruits = () => {
        getAllRecruits()
        .then((postArray) => {
            setRecruits(postArray)
        })
    }

    useEffect(() => {
        loadRecruits(recruits)
    },[])

    return (<>
        <h1 class="title"> Coach Homepage </h1>
        
        <figure class="image is-128x128">
        <image class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></image>
        </figure>
        <article class="columns">
        <section className="editForm" class="column">
                
                <CoachEdit />
            </section>
            <section className="editForm" class="column">
                
                <RecruitsList loadRecruits={loadRecruits} recruits={recruits}/>
            </section>
            <section className="editForm" class="column">
                
                <CoachGameList loadRecruits={loadRecruits} recruits={recruits} />
            </section>
            <section className="editForm" class="column">
                
                <OpenPositionForm />
            </section>
            
            
            
        </article>
    </>
    )
}