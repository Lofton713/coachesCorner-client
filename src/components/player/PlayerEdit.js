import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentPlayer, updatePlayer } from "../../managers/PlayerManager"

export const EditPlayer = () => {
    const [player, setPlayer] = useState({})
    const { userId } = useParams()
    const currentUser = localStorage.getItem("user_id")

    const loadPlayer = () => {
        
        getCurrentPlayer(userId).then(data => {
            data.first_name = data.user.first_name
            data.last_name = data.user.last_name
            data.email = data.user.email
            setPlayer(data)
    
        })
    }

    useEffect(() => {
        loadPlayer()
    }, [userId])

    const handleSubmit = (evt) => {
        evt.preventDefault()
    

        let playerData = {
            first_name: player?.first_name,
            last_name: player?.last_name,
            birthday: player.birthday,
            bio: player.bio,
            GPA: player.GPA,
            hometown: player.hometown,
            state: player.state,
            position: player.position,
            grade: player.grade,
            email: player?.email
        }

        updatePlayer(userId, playerData).then((player) => {
            loadPlayer()
        })
    }

    const handleChange = (event) => {
        const playerCopy = { ...player }
        playerCopy[event?.target?.name] = event.target.value
        setPlayer(playerCopy)
    }


    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds">


                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                        <input type="text" name="first_name" required autoFocus className="input"
                            placeholder={player?.user?.first_name}
                            defaultValue={player?.user?.first_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="last_Name" className="label">Last Name</label>
                    <div className="control">
                        <input type="text" name="last_name" required autoFocus className="input"
                            placeholder={player?.user?.last_name}
                            defaultValue={player?.user?.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Birthday</label>
                    <div className="control">
                        <input type="date" name="birthday" required autoFocus className="input"
                            placeholder={player.birthday}
                            defaultValue={player?.birthday}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Position</label>
                    <div className="control">
                        <input type="text" name="position" required autoFocus className="input"
                            placeholder={player.position}
                            defaultValue={player?.position}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Grade</label>
                    <div className="control">
                        <input type="text" name="grade" required autoFocus className="input"
                            placeholder={player.grade}
                            defaultValue={player?.grade}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">GPA</label>
                    <div className="control">
                        <input type="number" step={.1} name="GPA" required autoFocus className="input"
                            placeholder={player.GPA}
                            defaultValue={player?.GPA}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="email" name="email" required autoFocus className="input"
                            placeholder="Title"
                            defaultValue={player?.user?.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Hometown</label>
                    <div className="control">
                        <input type="text" name="title" required autoFocus className="input"
                            placeholder="Title"
                            defaultValue={player?.hometown}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                        <input type="text" name="state" required autoFocus className="input"
                            placeholder={player.state}
                            defaultValue={player?.state}
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <div className="field">
                    <label className="label">Bio</label>
                    <div className="control">
                        <input type="text" name="bio" required autoFocus className="input"
                            placeholder={player.bio}
                            defaultValue={player?.bio}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                    <button type="submit"
                        onClick={handleSubmit}
                        className="button is-success">
                        Update
                    </button>
                </div>

                </div>

            </form>
        </section>
    )
}