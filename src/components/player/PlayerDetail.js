import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getGamesByUser } from "../../managers/GameManager"
import { getPlayerById } from "../../managers/PlayerManager"
import { createRecruit } from "../../managers/RecruitManager"

export const PlayerDetail = () => {

    const { playerId } = useParams()
    const [player, setPlayer] = useState([])
    const [playerGames, setPlayerGames] = useState([])

    const currentUser = localStorage.getItem("user_id")

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

    const handleSaveButtonClick = (event, player) => {
        event.preventDefault()
        alert("Recruit Added to Favorites 👍")

        const newFav = {
            player: player.id,
            coach: currentUser
        }

        createRecruit(newFav)
    }



    return (
        <>
            <h1 class="title is-2"> Player Details</h1>
                <article class="card">
                    {/* <section class="box">
                        {player.profile_pic}
                    </section> */}

                    <ol>
                        <li className="player__name">Name: {player?.user?.first_name} {player?.user?.last_name} </li>
                        <li className="Player_bday"> Birthday: {player.birthday}  </li>
                        <li className="player_location">Location: {player?.hometown}, {player.state}</li>
                        <li className="Player_gpa"> GPA: {player.GPA}  </li>
                        <li className="Player_Email"> Email: {player?.user?.email}  </li>
                        <li className="Player_bio"> Bio: {player.bio}  </li>
                    </ol>
                </article>
            
        


            <h2 class="title is-4"> Upcoming Matches</h2>
                <article class="box">
                    {
                        playerGames.map(playerGame => {
                            return <section class="box" key={`game--${playerGame.id}`} className="game">
                                <ul class="box">
                                    <li className="game_date">Game: {playerGame?.description}</li>
                                    <li className="game_date">Date: {playerGame?.date}</li>
                                    <li className="game_date">Location: {playerGame?.city}, {playerGame?.state}</li>
                                    <li className="game_date">Time: {playerGame?.time}</li>
                                    
                                <button class="button is-success is-small">Attend</button>
                                </ul>
                            </section>
                        })
                    }
                    <ol>
                        
                    </ol>
                </article>

                <button class="button is-info" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, player)}>Add Recruit</button>
        </>
    )
}