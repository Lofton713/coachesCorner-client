import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPlayers } from "../../managers/PlayerManager"

export const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        getAllPlayers().then(data => setPlayers(data))
    }, 
    []
    )

    return (
        <article className="players">
            <header>
                
            </header>
            {
                players.map(player => {
                    return  <section key={`player--${player.id}`} className="player">
                        <ol>

                            <li>
                                <div className="player__name">{player?.user?.first_name} {player?.user?.last_name}</div>
                                <div className="player__birthday"> Birthday: {player.birthday} </div>
                                <div className="player_city"> City: {player?.hometown}, {player.state}</div>
                            </li>
                        </ol>
                        
                        
                        
                    </section>
                })
            }
        </article>
    )
}