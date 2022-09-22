import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createAttendee } from "../../managers/AttendeeManager"
import { getAllGames } from "../../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const Navigate = useNavigate
    const currentUser = localStorage.getItem("user_id")
    

    useEffect(() => {
        getAllGames().then(data => setGames(data))
    }, 
    []
    )

    const handleSaveButtonClick = (event, game) => {
        event.preventDefault()
        alert("school Lot Added to Favorites 👍")

        const newFav = {
            game: game.id,
            coach: currentUser
        }

        createAttendee(newFav)
    }



    return ( 
        <>
            <header class="title">
                Game List
            </header>
        <article className="games" class="column card has-text-centered is-one-quarter">
            {
                games.map(game => {
                    return  <section key={`game--${game.id}`} className="game" class="box">
                        <ul>

                            <li>
                                <div className="game_player">Player: {game?.player?.user?.first_name} {game.player.user.last_name} </div>
                                <div className="game__player">Date: {game?.date} </div>
                                <div className="game__time">Time: {game.time}  </div>
                                <div className="game_location">Location: {game.city}, {game.state}</div>
                                <button class="button is-success is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, game)}>Attend</button>
                            </li>
                        </ul>                  
                    </section>
                })
            }
        </article>
        </>
    )
}