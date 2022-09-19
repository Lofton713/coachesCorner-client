import { useEffect, useState } from "react"
import { getCurrentUsersFavorites } from "../../managers/FavoriteManager"

export const FavoritesList = ()  => {
    const [favorites, setFavorites] = useState([])

    const loadFavorites = () => {
        getCurrentUsersFavorites()
            .then((data) => {
                setFavorites(data)
            })
    }

    useEffect(() => {
        loadFavorites()
    },[])

    return (
        <article className="MyOpenPositions" class="columns is-multiline is-mobile">
            
            {
                favorites.map(favorite => {
                    return  <section key={`fav--${favorite.id}`} className="position" class="columns">
                        <ol class="box">

                            <li>
                                <div className="fav__School">Position:{favorite.position} </div>
                                
                                
                                
                            </li>
                        </ol>
                        
                        
                        
                    </section>
                })
            }
            
        </article>
    )


}