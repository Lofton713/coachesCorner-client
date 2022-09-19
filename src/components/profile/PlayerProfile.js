import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentPlayer } from "../../managers/PlayerManager"

export const PlayerProfile = () => {
    const { userId } = useParams()
    const [currentPlayer, setCurrentPlayer] = useState({})

    useEffect(() => {
        getCurrentPlayer(userId).then(data => setCurrentPlayer(data))
    },[]
    )



    return (<>
        <h1>Player's Profile</h1>
        <figure class="image is-128x128">
        <image class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></image>
        </figure>
        <section key={`player--${currentPlayer.id}`} class="card">
                        <ul type="1">
                            <li className="player__name"> Name: {currentPlayer?.user?.first_name} {currentPlayer?.user?.last_name}</li>
                            <li className="currentPlayer__birthday"> Grade: {currentPlayer.grade}</li>
                            <li className="currentPlayer__birthday"> Position: {currentPlayer.position}</li>
                            <li className="currentPlayer_city"> Hometown: {currentPlayer?.hometown}, {currentPlayer.state}</li>
                            <li className="currentPlayer_city">Bio: {currentPlayer.bio}</li>
                            <li className="currentPlayer_birthday">Birthday: {currentPlayer.birthday}</li>
                            <li className="currentPlayer_GPA">GPA: {currentPlayer.GPA}</li>
                        </ul>
                        {/* <button class="button is-small" onClick={(clickEvent) => handleSaveButtonClick(clickEvent, currentPlayer)}>Edit</button>   */}
                    </section>
    </>
    )
}