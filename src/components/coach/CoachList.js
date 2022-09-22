import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllCoaches } from "../../managers/CoachManager"

export const CoachList = () => {

    const [coaches, setCoaches] = useState([])
    const Navigate = useNavigate()
    
    useEffect(() => {
        getAllCoaches().then(data => setCoaches(data))
    },[]
    )


    return (<>
        <header class="title is-4">
                Coaches
            </header>
            <article class="columns is-multiline ">

                
            {
                coaches.map(coach => {
                    return  <section key={`coach--${coach.id}`} className="coach" class="column is-one-quarter has-text-centered ">
                        <ul class="box">    
                        <header className="lotHeader">
                            <Link className="coach__name" to={`/coaches/${coach.id}`}>{coach?.user?.first_name} {coach?.user?.last_name}</Link>
                        </header>
                            <li>
                                <div className="coach__college">University: {coach?.college?.name}</div>
                            </li>
                        </ul>
                    </section>
                })
            }
        
    </article>
    </>
    )
}