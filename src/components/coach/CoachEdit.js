import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentCoach, updateCoach } from "../../managers/CoachManager"
import { getAllColleges } from "../../managers/CollegeManager"

export const CoachEdit = () => {
    const [coach, setCoach] = useState({})
    const { userId } = useParams()
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        getCurrentCoach(userId).then(data => {
            setCoach(data)
        })
    },[userId]
    )

    useEffect(() => {
        getAllColleges().then(res => {
            setColleges(res)
        })
    },[])

    const handleSubmit = (evt) => {
        evt.preventDefault()
    

        let coachData = {
            first_name: coach?.user?.first_name,
            last_name: coach?.user?.last_name,
            bio: coach.bio,
            email: coach?.user?.email,
            college: coach.collegeId
        }

        updateCoach(userId, coachData).then((coach) => {
        })
    }

    const handleChange = (event) => {
        const coachCopy = { ...coach }
        coachCopy[event?.target?.name] = event.target.value
        setCoach(coachCopy)
    }

    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds">


                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                        <input type="text" name="first_name" required autoFocus className="input"
                            placeholder={coach?.user?.first_name}
                            defaultValue={coach?.user?.first_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="last_Name" className="label">Last Name</label>
                    <div className="control">
                        <input type="text" name="last_name" required autoFocus className="input"
                            placeholder={coach?.user?.last_name}
                            defaultValue={coach?.user?.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                
                <div className="field">
                    <label className="label">Bio</label>
                    <div className="control">
                        <input type="text" name="bio" required autoFocus className="input"
                            placeholder={coach.bio}
                            defaultValue={coach?.bio}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="email" name="email" required autoFocus className="input"
                            placeholder="Title"
                            defaultValue={coach?.user?.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <select name="collegeId"
                                    proptype="int"
                                    value={coach.collegeId}
                                    onChange={handleChange}>
                                        <option value="0">Select a college ...</option>
                                        {colleges.map(college => (
                                            <option key={college.id} value={college.id} name={`collegeId--${college.id}`}>
                                                {college.name}
                                            </option>
                                        ))}
                                </select>
                </div>

                {/* <div className="field">
                    <label className="label">College</label>
                    <div className="control">
                        <input type="select" name="college" required autoFocus className="input"
                            placeholder={coach.college}
                            defaultValue={coach.college}
                            onChange={handleChange}
                        />
                    </div>
                </div> */}

                <div className="field is-grouped">
                    <div className="control">
                    <button type="submit"
                        onClick={handleSubmit}
                        className="button is-success">
                        Update
                    </button>
                </div>

                </div>

            </form>
        </section>
    )

}