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
        <article className="games">
            <header>
                Game List
            </header>
            {
                games.map(game => {
                    return  <section key={`game--${game.id}`} className="game">
                        <ol>

                            <li>
                                <div className="game__player">{game?.date} </div>
                                <div className="game__time">{game.time}  </div>
                                <div className="game_player">{game?.player?.user?.first_name} {game.player.user.last_name} </div>
                                <div className="game_location">Location: {game.city}, {game.state}</div>
                            </li>
                        </ol>
                        
                        
                        
                    </section>
                })
            }
        </article>
    )
}