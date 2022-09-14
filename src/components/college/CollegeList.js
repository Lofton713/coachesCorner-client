import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllColleges } from "../../managers/CollegeManager"

export const CollegeList = () => {

    const [colleges, setColleges] = useState([])
    const Navigate = useNavigate()
    
    useEffect(() => {
        getAllColleges().then(data => setColleges(data))
    },[]
    )


    return (
        <article className="colleges">
            <header>
                Colleges
            </header>
            {
                colleges.map(college => {
                    return  <section key={`college--${college.id}`} className="college">
                        <ul>

                            <li>
                                <div className="college__name">University: {college?.name}</div>
                                <div className="coach__college">location: {college.city}, {college.state}</div>
                                
                            </li>
                        </ul>
                    </section>
                })
            }
        </article>
    )

}