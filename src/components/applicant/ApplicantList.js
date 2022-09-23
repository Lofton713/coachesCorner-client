import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllApplicants } from "../../managers/ApplicantManager"
import { getOpenPositionById } from "../../managers/OpenPositionManager"
import { createRecruit } from "../../managers/RecruitManager"

export const ApplicantList = () => {

    const [applicants, setApplicants] =useState([])
    const [filteredApplicants, setFilteredApplicants] = useState([])
    
    const { openSpotId } =useParams()
    

    

    const loadApplicants = () => {
        getAllApplicants()
            .then((postArray) => {
                setApplicants(postArray)
            })
    }

    useEffect(() => {
        loadApplicants()
    }, [])

    useEffect(
        ()=>{
            const filteredApplicants = applicants.filter(app =>
                app?.open_spot?.id === parseInt(openSpotId))
            setFilteredApplicants(filteredApplicants)
        },[applicants]
    )

    

    return (
        (<>
            <h2 class="title is-4">Applicants</h2>
            <article class="columns is-multiline is-mobile">
                        {
                            filteredApplicants.map(app => {
                                return <section key={`app--${app.id}`} class="column is-one-quarter has-text-centered">
                                    <ul class="box">
                                        <header>
                                        <Link className="game_date" to={`/players/${app?.player.id}`}>Name: {app?.player?.user?.first_name} {app?.player?.user?.last_name}</Link>
                                        </header>
                                        <div className="game_date">Bio: {app?.player?.bio}</div>
                                        

                                    </ul>
                                    
                                </section>
                            })
                        }
                        <ol>
                            
                        </ol>
                    </article>
    
                </>
        )
    )
}