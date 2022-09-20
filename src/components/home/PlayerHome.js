import { FavoritesList } from "../favorites/FavoriteList"
import { GameForm, GameFrom } from "../game/GameForm"
import { GameList } from "../game/GameList"
import { EditPlayer } from "../player/PlayerEdit"
import { PlayerProfile } from "../profile/PlayerProfile"
import { PlayerGameList } from "../game/PlayerGameList"


export const PlayerHome = () => {


    return (<>
        <h1> Player Homepage </h1>
        
        <section className="gameForm" class="column">
                
                <EditPlayer />
            </section>
        <figure class="image is-128x128">
        <image class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></image>
        </figure>
        <article class="columns">
            
            <section className="gameForm" class="column">
                
                <FavoritesList />
            </section>
            <section className="gameForm" class="column">
                
                <PlayerGameList />
            </section>
            <div>

            <section className="gameForm" class="column">
                
                <GameForm  />
            </section>
            </div>
        </article>
    </>
    )
}