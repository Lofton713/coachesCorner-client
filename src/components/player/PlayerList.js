import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllPlayers } from "../../managers/PlayerManager"
import { createRecruit } from "../../managers/RecruitManager"
import { RecruitList } from "../recruit/RecruitsList"

export const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllPlayers().then(data => setPlayers(data))
    }, 
    []
    )

    const saveRecruitEvent = (event) => {
        event.preventDefault()
        createRecruit()
    }

    return ( <>
        <article className="players">
            <header>
                <h1>Players</h1>
            </header>
            {
                players.map(player => {
                    return  <section key={`player--${player.id}`} className="player">
                        <header className="lotHeader">
                            <Link className="player__name" to={`/players/${player.id}`}>{player?.user?.first_name} {player?.user?.last_name}</Link>
                        </header>
                        <ol>
                            <div className="player__birthday"> Birthday: {player.birthday} </div>
                            <div className="player_city"> Hometown: {player?.hometown}, {player.state}</div>
                        </ol>
                        <button onClick={(evt) => saveRecruitEvent(evt)}
                            className="button is-primary">Recruit</button>    
                    </section>
                })
            }
        </article>
        <article className="recruits">
            <h1>Recruits List</h1>
        </article>
        <div className="column">
        <RecruitList  />
      </div>
    </>
    )
}