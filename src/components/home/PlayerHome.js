import { FavoritesList } from "../favorites/FavoriteList"
import { GameForm, GameFrom } from "../game/GameForm"
import { GameList } from "../game/GameList"
import { EditPlayer } from "../player/PlayerEdit"
import { PlayerProfile } from "../profile/PlayerProfile"
import { PlayerGameList } from "../game/PlayerGameList"
import { useEffect, useState } from "react"
import { getAllGames } from "../../managers/GameManager"


export const PlayerHome = () => {
    const [games, setGames] = useState([])

    
    const loadGames = () => {
        getAllGames()
        .then((postArray) => {
            setGames(postArray)
        })
    }

    useEffect(() => {
        loadGames(games)
    }, [])



    return (<>
        <h1 class="title"> Player Homepage </h1>
        {/* <figure class="image is-128x128">
        <image class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></image>
        </figure> */}
        <article class="columns">
        
        <section className="gameForm" class="column">
                
                <EditPlayer />
            </section>
            
            <section className="gameForm" class="column">
                
                <FavoritesList />
            </section>
            <section className="gameForm" class="column">
                
                <PlayerGameList loadGames={loadGames} games={games}/>
                
            </section>
            <div>

            <section className="gameForm" class="column">
                
                <GameForm loadGames={loadGames}  />
            </section>
            </div>
        </article>
    </>
    )
}