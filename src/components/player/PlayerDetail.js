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
            <h1 class="title"> Player Details</h1>
                <article class="card">
                    <section>
                        {player.profile_pic}
                    </section>

                    <ol>
                        <li className="player__name">Name: {player?.user?.first_name} {player?.user?.last_name} </li>
                        <li className="Player_bday"> Birthday: {player.birthday}  </li>
                        <li className="player_location">Location: {player?.hometown}, {player.state}</li>
                        <li className="Player_gpa"> GPA: {player.GPA}  </li>
                        <li className="Player_Email"> Email: {player?.user?.email}  </li>
                        <li className="Player_bio"> About Me: {player.bio}  </li>
                    </ol>
                </article>
            
        


            <h2 class="title"> Upcoming Matches</h2>
                <article>
                    {
                        playerGames.map(playerGame => {
                            return <section class="box" key={`game--${playerGame.id}`} className="game">
                                <ul>
                                    <li className="game_date">Game: {playerGame?.description}</li>
                                    <li className="game_date">Date: {playerGame?.date}</li>
                                    <li className="game_date">Location: {playerGame?.city}, {playerGame?.state}</li>
                                    <li className="game_date">Time: {playerGame?.time}</li>
                                    
                                </ul>
                                <button class="button is-success is-small">Attend</button>
                            </section>
                        })
                    }
                    <ol>
                        
                    </ol>
                </article>

                <button class="button is-info">Add Recruit</button>
        </>
    )
}