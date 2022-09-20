import { useEffect, useState } from "react"
import { deleteRecruit, getCurrentUsersRecruits } from "../../managers/RecruitManager"

export const RecruitsList = () => {
    const [recruits, setRecruits] = useState([])

    const loadRecruits = () => {
        getCurrentUsersRecruits()
            .then((postArray) => {
                setRecruits(postArray)
            })
    }

    useEffect(() => {
        loadRecruits()
    }, [])

    const handleDelete = (recruitId) => {
        deleteRecruit(recruitId).then(loadRecruits)
    }


    return (
        <article className="MyRecruits">
            
            {
                recruits.map(recruit => {
                    return  <section key={`recruit--${recruit.id}`} className="position">
                        <ol>

                            <li>
                                <div className="recruit__name">Name: {recruit.player.user.first_name} {recruit.player.user.last_name} </div>                                
                            </li>
                        </ol>
                        <button className="button is-danger" onClick={() => {
                            const confirmBox = window.confirm("Do you really want to remove this recruit?")
                            if (confirmBox)
                                handleDelete(recruit.id)
                        }}>Remove</button>
                        
                        
                    </section>
                })
            }
        </article>
    )
}