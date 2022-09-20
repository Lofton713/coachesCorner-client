import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllCoaches, getCurrentCoach } from "../../managers/CoachManager"
import { deleteGame, getAllGames } from "../../managers/GameManager"

export const CoachGameList = () => {

    const [games, setGames] =useState([])
    const [ coachGames, setCoachGames] =useState([])

    const { userId } = useParams()
    const navigate = useNavigate()

    const [currentCoach, setCurrentCoach] =useState({})

    useEffect(() => {
        getCurrentCoach(userId).then(data => setCurrentCoach(data))
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
            const filteredGames = games.filter(game => game?.attendees?.user?.id === currentCoach?.Id )
            setCoachGames(filteredGames)
        },[games]
    )

    return(<>
        <h2 class="title is-4">Upcoming Games</h2>
        <article class="box">
                    {
                        coachGames.map(Game => {
                            return <section key={`game--${Game.id}`} className="game">
                                <ul>
                                    <li className="game_date">Game: {Game?.description}</li>
                                    <li className="game_date">Date: {Game?.date}</li>
                                    <li className="game_date">Date: {Game?.city}, {Game?.state}</li>
                                </ul>
                                <button className="button is-danger" onClick={() => { deleteGame(Game.id).then(() => {
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