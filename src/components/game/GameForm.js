import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createGame } from "../../managers/GameManager"

export const GameForm = () => {

    const navigate = useNavigate()
    const [games, setGames] = useState([])

    const currentUser = localStorage.getItem("user_id")

    const [currentGame, setCurrentGame] = useState({
        city: "",
        state:"",
        description:"",
        date:"",
        time:"",
        player: currentUser
    })

    const changeGameState = (evt) => {
        // TODO: Complete the onChange function
        const copy = {...currentGame}
        copy[evt.target.name] = evt.target.value
        setCurrentGame(copy)
    }
        

    

    return (<>
        <h2 class="title is-4">Add an Upcoming Match</h2>
        <form className="gameForm">
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentGame.date}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" class="field is-horizontal">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentGame.time}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group" class="field is-horizontal">
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" required autoFocus className="form-control"
                        value={currentGame.city}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" required autoFocus className="form-control"
                        value={currentGame.state}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            
            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        date: currentGame.date,
                        time: currentGame.time,
                        city: currentGame.city,
                        state: currentGame.state,
                        description: currentGame.description,
                        
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => navigate("/playerhome/userId"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    </>
    )
}