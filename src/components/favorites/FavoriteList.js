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
            const filteredFavorites = favorites.filter(fav => fav?.player?.user.id === currentPlayer.id )
            setUserFavorites(filteredFavorites)
        },[favorites]
    )

    return (<>
        <h2 class="title is-4">Favorite Schools</h2>
        <article className="MyOpenPositions" class="columns is-multiline is-mobile">
            
            {
                userFavorites.map(favorite => {
                    return  <section key={`fav--${favorite.id}`} className="position" >
                        <ul class="box">

                            <li>
                                <div className="fav__School">Position: {favorite?.college?.name} </div>
                                <div className="fav_location">Location: {favorite?.college?.city}, {favorite?.college?.state} </div>
                            </li>
                        </ul>
                    
                        <button className="button is-danger" onClick={() => { deleteFavorite(favorite.id).then(() => {
                                    navigate('/playerHome/userID')
                                })}}>Delete</button>
                        
                        
                    </section>
                })
            }
            
        </article>
        </>
    )


}