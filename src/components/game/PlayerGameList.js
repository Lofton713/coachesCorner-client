import { useEffect, useState } from "react"
import { navigate, useNavigate, useParams } from "react-router-dom"
import { deleteGame, getAllGames} from "../../managers/GameManager"
import { getCurrentPlayer } from "../../managers/PlayerManager"

export const PlayerGameList = ({loadGames, games}) => {

    
    const [userGames, setUserGames] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()
    
    const [currentPlayer, setCurrentPlayer] = useState({})

    useEffect(() => {
        getCurrentPlayer(userId).then(data => setCurrentPlayer(data))
    },[]
    )

    



    useEffect(
        () => {
            const filteredGames = games.filter(game => game?.player?.id === currentPlayer.id )
            setUserGames(filteredGames)
        },[games]
    )

    return(<>
        <h2 class="title is-4">Upcoming Games</h2>
        <article class="column">
                    {
                        userGames.map(playerGame => {
                            return <section key={`game--${playerGame.id}`} class="box">
                                <ul>
                                    <div className="game_date">Game: {playerGame?.description}</div>
                                    <div className="game_date">Date: {playerGame?.date}</div>
                                    <div className="game_date">Location: {playerGame?.city}, {playerGame?.state}</div>
                                    
                                </ul>
                                <button class="button is-danger is-small" onClick={() => { deleteGame(playerGame.id).then(() => {
                                    loadGames()})

                                }}>Delete</button>
                            </section>
                        })
                    }
                    <ol>
                        
                    </ol>
                </article>

            </>
    )
    
}