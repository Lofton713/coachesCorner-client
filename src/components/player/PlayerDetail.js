import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getGamesByUser } from "../../managers/GameManager"
import { getPlayerById } from "../../managers/PlayerManager"

export const PlayerDetail = () => {

    const { playerId } = useParams()
    const [player, setPlayer] = useState([])
    const [playerGames, setPlayerGames] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getPlayerById(playerId).then(data => setPlayer(data))
    }, 
    [playerId]
    )

    const loadGames = () => {
        getGamesByUser(playerId)
        .then((postArray) => {
            setPlayerGames(postArray)
        })
    }

    useEffect(() => {
        loadGames()
    }, [])



    return (
        <>
            <h1> Player Details</h1>
                <article>
                    <section>
                        {player.profile_pic}
                    </section>

                    <ol>
                        <div className="player__name">Name: {player?.user?.first_name} {player?.user?.last_name} </div>
                        <div className="Player_bday"> Birthday: {player.birthday}  </div>
                        <div className="player_location">Location: {player?.hometown}, {player.state}</div>
                        <div className="Player_gpa"> GPA: {player.GPA}  </div>
                        <div className="Player_Email"> Email: {player?.user?.email}  </div>
                    </ol>
                </article>
            
        


            <h2> Upcoming Matches</h2>
                <article>
                    {
                        playerGames.map(playerGame => {
                            return <section key={`game--${playerGame.id}`} className="game">
                                <ol>
                                    <li>
                                        <div className="game_date">Date: {playerGame?.date}</div>
                                        <div className="game_date">Date: {playerGame?.city}, {playerGame?.state}</div>
                                    </li>
                                </ol>
                                <button> Attend </button>
                            </section>
                        })
                    }
                    <ol>
                        
                    </ol>
                </article>

            <button> Add to Recuits List</button>
        </>
    )
}