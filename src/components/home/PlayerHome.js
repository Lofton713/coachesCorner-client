import { GameForm, GameFrom } from "../game/GameForm"

export const PlayerHome = () => {


    return (<>
        <h1> Player Homepage </h1>
        <article>
            <section className="favorites">Favorite Schools</section>
            <section className="gameForm">
                
                <GameForm  />
            </section>
        </article>
    </>
    )
}