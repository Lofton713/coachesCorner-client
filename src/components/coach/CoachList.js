import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCoaches } from "../../managers/CoachManager"

export const CoachList = () => {

    const [coaches, setCoaches] = useState([])
    const Navigate = useNavigate()
    
    useEffect(() => {
        getAllCoaches().then(data => setCoaches(data))
    },[]
    )


    return (
        <article className="games" class="column is-multiline is-mobile">
            <header class="title 2">
                Coaches
            </header>
            {
                coaches.map(coach => {
                    return  <section key={`coach--${coach.id}`} className="coach" class="column">
                        <ul class="box">

                            <li>
                                <div className="coach__name">Name: {coach?.user?.first_name} {coach.user.last_name} </div>
                                <div className="coach__college">University: {coach?.college?.name}  </div>
                                
                            </li>
                        </ul>
                        
                        
                        
                    </section>
                })
            }
        </article>
    )
}