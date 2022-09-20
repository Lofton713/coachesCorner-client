import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllGames } from "../../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const Navigate = useNavigate

    useEffect(() => {
        getAllGames().then(data => setGames(data))
    }, 
    []
    )



    return ( 
        <>
        <article className="games">
            <header class="title">
                Game List
            </header>
            {
                games.map(game => {
                    return  <section key={`game--${game.id}`} className="game" class="box">
                        <ul>

                            <li>
                                <div className="game_player">Player: {game?.player?.user?.first_name} {game.player.user.last_name} </div>
                                <div className="game__player">Date: {game?.date} </div>
                                <div className="game__time">Time: {game.time}  </div>
                                <div className="game_location">Location: {game.city}, {game.state}</div>
                                <button class="button is-success is-small">Attend</button>
                            </li>
                        </ul>                  
                    </section>
                })
            }
        </article>
        </>
    )
}