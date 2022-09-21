import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllColleges } from "../../managers/CollegeManager"
import { createOpenPosition, updateOpenPosition } from "../../managers/OpenPositionManager"

export const OpenPositionForm = () => {
    const navigate = useNavigate()
    const [colleges, setColleges] = useState([])

    const [currentOpenPosition, setCurrentOpenPosition] = useState({
        college: 1,
        posted_by: 1,
        position: "",
        description: "",
        applicants: []
    })

    useEffect (() => {
        getAllColleges().then(data => setColleges(data))
    },[])

    const changeOpenPositionState = (evt) => {
        // TODO: Complete the onChange function
        const copy = {...currentOpenPosition}
        copy[evt.target.name] = evt.target.value
        setCurrentOpenPosition(copy)
    }
    

    return (
        <form className="openPositionForm" class="column box">
            <h1 className="openPositionForm__title" class="title is-4">New Open Position</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Position </label>
                    <input type="text" name="position" required autoFocus className="form-control"
                        value={currentOpenPosition.position}
                        onChange={changeOpenPositionState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentOpenPosition.description}
                        onChange={changeOpenPositionState}
                    />
                </div>
            </fieldset>
            
            
            <fieldset>
                <div className="form-group">
                    <select name="college"
                                    proptype="int"
                                    value={currentOpenPosition.college}
                                    onChange={changeOpenPositionState}>
                                        <option value="0">Select a game type...</option>
                                        {colleges.map(college => (
                                            <option key={college.id} value={college.id} name={`collegeId--${college.id}`}>
                                                {college.name}
                                            </option>
                                        ))}
                                </select>
                </div>
            </fieldset>
            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const openPosition = {
                        position: currentOpenPosition.position,
                        description: currentOpenPosition.description,
                        college: parseInt(currentOpenPosition.college),
                        applicants: []
                    }

                    // Send POST request to your API
                    createOpenPosition(openPosition)
                        .then(() => navigate("/openings"))
                }}
                class="button is-success is-small">Create</button>
        </form>
    )
}