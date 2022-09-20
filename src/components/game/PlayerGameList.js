import { useEffect, useState } from "react"
import { navigate, useNavigate, useParams } from "react-router-dom"
import { deleteGame, getAllGames} from "../../managers/GameManager"
import { getCurrentPlayer } from "../../managers/PlayerManager"

export const PlayerGameList = () => {

    const [games, setGames] = useState([])
    const [userGames, setUserGames] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()
    
    const [currentPlayer, setCurrentPlayer] = useState({})

    useEffect(() => {
        getCurrentPlayer(userId).then(data => setCurrentPlayer(data))
    },[]
    )

    

    const loadGames = () => {
        getAllGames()
        .then((postArray) => {
            setGames(postArray)
        })
    }

    useEffect(() => {
        loadGames(games)
    }, [])


    useEffect(
        () => {
            const filteredGames = games.filter(game => game?.player?.user?.id === currentPlayer.id )
            setUserGames(filteredGames)
        },[games]
    )

    return(<>
        <h2 class="title is-4">Upcoming Games</h2>
        <article class="box">
                    {
                        userGames.map(playerGame => {
                            return <section key={`game--${playerGame.id}`} className="game">
                                <ul>
                                    <li>
                                        <div className="game_date">Date: {playerGame?.date}</div>
                                        <div className="game_date">Date: {playerGame?.city}, {playerGame?.state}</div>
                                    </li>
                                </ul>
                                <button className="button is-danger" onClick={() => { deleteGame(playerGame.id).then(() => {
                                    navigate('/playerHome/userID')
                                })}}>Delete</button>
                            </section>
                        })
                    }
                    <ol>
                        
                    </ol>
                </article>

            </>
    )
    
}