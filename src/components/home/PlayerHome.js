import { FavoritesList } from "../favorites/FavoriteList"
import { GameForm, GameFrom } from "../game/GameForm"


export const PlayerHome = () => {


    return (<>
        <h1> Player Homepage </h1>
        <h1>Player's Profile</h1>
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