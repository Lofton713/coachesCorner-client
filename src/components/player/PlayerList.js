import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllPlayers } from "../../managers/PlayerManager"
import { createRecruit } from "../../managers/RecruitManager"
import { RecruitsList } from "../recruit/RecruitsList"

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
        alert("Recruit Added to Favorites 👍")

        const newFav = {
            player: player.id,
            coach: currentUser
        }

        createRecruit(newFav)
    }

    

    return ( <>
        <div class="columns">
            <header>
                <h1 class="title is-2 ">Players</h1>
            </header>
            <div class="column">

            {
                players.map(player => {
                    return  <section key={`player--${player.id}`} class="column card">
                        <header className="lotHeader">
                            <Link className="player__name" to={`/players/${player.id}`}>{player?.user?.first_name} {player?.user?.last_name}</Link>
                        </header>
                        <ul type="1" >
                            <li className="player__birthday"> Grade: {player.grade}</li>
                            <li className="player__birthday"> Position: {player.position}</li>
                            <li className="player_city"> Hometown: {player?.hometown}, {player.state}</li>
                        </ul>
                        <button class="button is-success is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, player)}>Add to Recruits List</button>  
                    </section>
                })
            }
            </div>
        </div>
    </>
    )
}