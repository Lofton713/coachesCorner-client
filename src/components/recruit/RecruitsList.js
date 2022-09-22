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

    const handleDelete = (id) => {
        deleteRecruit(id).then(loadRecruits)
    }


    return (
        <article className="MyRecruits" class="column has-text-centered">
            <header class="title is-4">
            Recruit List
            </header>
            
            {
                recruits.map(recruit => {
                    return  <section key={`recruit--${recruit.id}`} className="position" class="box">
                        <ul>

                            <li className="recruit__name">Name: {recruit?.player?.user?.first_name} {recruit?.player?.user?.last_name}</li>
                            <li className="recruit__name">Position: {recruit?.player?.position}</li>
                        </ul>
                        <button class="button is-danger is-small" onClick={() => {
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