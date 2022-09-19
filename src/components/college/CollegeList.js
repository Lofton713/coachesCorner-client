import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllColleges } from "../../managers/CollegeManager"
import { createFavorite } from "../../managers/FavoriteManager"

export const CollegeList = () => {

    const [colleges, setColleges] = useState([])
    const Navigate = useNavigate()
    const currentUser = localStorage.getItem("user_id")
    
    useEffect(() => {
        getAllColleges().then(data => setColleges(data))
    },[]
    )

    const handleSaveButtonClick = (event, college) => {
        event.preventDefault()
        alert("school Lot Added to Favorites 👍")

        const newFav = {
            college: college.id,
            player: currentUser
        }

        createFavorite(newFav)
    }

    


    return (
        <article className="colleges" class="columns is-multiline is-mobile"  >
            <header class="title is-4">
                Colleges
            </header>
            {
                colleges.map(college => {
                    return  <section key={`college--${college.id}`} className="college" class="column is-one-quarter">
                        <ul class="box">

                            <li>
                                <div className="college__name">University: {college?.name}</div>
                                <div className="coach__college">location: {college.city}, {college.state}</div>
                                <button class="button is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, college)}>Add to favorites</button>
                                
                            </li>
                        </ul>
                    </section>
                })
            }
        </article>
    )

}