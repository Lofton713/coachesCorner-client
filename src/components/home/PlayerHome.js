import { FavoritesList } from "../favorites/FavoriteList"
import { GameForm, GameFrom } from "../game/GameForm"
import { EditPlayer } from "../player/PlayerEdit"
import { PlayerProfile } from "../profile/PlayerProfile"


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
            <section className="favorites">Favorite Schools</section>
            <section className="gameForm" class="column">
                
                <FavoritesList />
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