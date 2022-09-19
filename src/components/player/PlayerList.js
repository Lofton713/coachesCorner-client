import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllPlayers } from "../../managers/PlayerManager"
import { createRecruit } from "../../managers/RecruitManager"
import { RecruitList } from "../recruit/RecruitsList"

export const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [filteredPlayers, setFilteredPlayers] = useState([])
    const navigate = useNavigate()
    const [grade, setGrade] = useState(0)
    const currentUser = localStorage.getItem("user_id")

    useEffect(() => {
        getAllPlayers().then(data => setPlayers(data))
    }, 
    []
    )

    const saveRecruitEvent = (event) => {
        event.preventDefault()
        createRecruit()
    }

    const handleSaveButtonClick = (event, player) => {
        event.preventDefault()
        alert("school Lot Added to Favorites 👍")

        const newFav = {
            player: player.id,
            coach: currentUser
        }

        createRecruit(newFav)
    }

    

    return ( <>
        <div class="card">
            <header>
                <h1>Players</h1>
            </header>
            
            {
                players.map(player => {
                    return  <section key={`player--${player.id}`} class="card">
                        <header className="lotHeader">
                            <Link className="player__name" to={`/players/${player.id}`}>{player?.user?.first_name} {player?.user?.last_name}</Link>
                        </header>
                        <ol type="1">
                            <li className="player__birthday"> Grade: {player.grade}</li>
                            <li className="player__birthday"> Position: {player.position}</li>
                            <li className="player_city"> Hometown: {player?.hometown}, {player.state}</li>
                        </ol>
                        <button class="button is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, player)}>Add to Recruits List</button>  
                    </section>
                })
            }
        </div>
        <article className="recruits">
            <h1>Recruits List</h1>
        </article>
        <div class="column">
        <RecruitList  />
      </div>
    </>
    )
}