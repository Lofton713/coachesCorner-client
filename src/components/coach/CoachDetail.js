import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCoachById } from "../../managers/CoachManager"

export const CoachDetail = () => {

    const { coachId } = useParams()
    const [coach, setCoach] = useState([])

    useEffect(() => {
        getCoachById(coachId).then(data => setCoach(data))
    },
    [coachId]
    )
    
    return (<>

        <h1 class="title is-2"> Coach Details</h1>
                <article class="card">
                    <section class="box">
                        {coach.profile_pic}
                    </section>

                    <ul class="box">
                        <li className="coach__name">Name: {coach?.user?.first_name} {coach?.user?.last_name} </li>
                        <li className="coach_Email"> Email: {coach?.user?.email}  </li>
                        <li className="coach_college">School: {coach?.college?.name}</li>
                        <li className="Player_bio"> Bio: {coach.bio}  </li>
                    </ul>
                </article>
    </>
    ) 
}

        