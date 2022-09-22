import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteFavorite, getAllFavorites } from "../../managers/FavoriteManager"
import { getCurrentPlayer } from "../../managers/PlayerManager"

export const FavoritesList = ()  => {
    const [favorites, setFavorites] = useState([])
    const [userFavorites, setUserFavorites] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()

    const [currentPlayer, setCurrentPlayer] = useState({})

    useEffect(() => {
        getCurrentPlayer(userId).then(data => setCurrentPlayer(data))
    },[]
    )

    const loadFavorites = () => {
        getAllFavorites()
            .then((data) => {
                setFavorites(data)
            })
    }

    useEffect(() => {
        loadFavorites(favorites)
    },[])

    useEffect(
        () => {
            const filteredFavorites = favorites.filter(fav => fav?.player?.id === currentPlayer?.id)
            setUserFavorites(filteredFavorites)
        },[favorites]
    )

    return (<>
        <h2 class="title is-4">Favorite Schools</h2>
        <article className="MyOpenPositions" class="column">
            
            {
                userFavorites.map(favorite => {
                    return  <section key={`fav--${favorite.id}`} class="box" >
                        <ul>

                            <li>
                                <div className="fav__School">School: {favorite?.college?.name} </div>
                                <div className="fav_location">Location: {favorite?.college?.city}, {favorite?.college?.state} </div>
                            </li>
                        <button class="button is-danger is-small" onClick={() => { deleteFavorite(favorite.id).then(() => {
                                    navigate(`/playerHome/${localStorage.getItem('user_id')}`)
                                })}}>Delete</button>
                        </ul>
                    
                        
                        
                    </section>
                })
            }
            
        </article>
        </>
    )


}