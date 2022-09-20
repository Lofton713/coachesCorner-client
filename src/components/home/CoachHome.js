import { CoachEdit } from "../coach/CoachEdit"

export const CoachHome = () => {


    return (<>
        <h1> Coach Homepage </h1>
        
        <figure class="image is-128x128">
        <image class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></image>
        </figure>
        <article class="columns">
        <section className="editForm" class="column">
                
                <CoachEdit />
            </section>
            
            
            
        </article>
    </>
    )
}