import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOpenPositionById } from "../../managers/OpenPositionManager"

export const ApplicantList = () => {

    const [openSpot, setOpenSpot] = useState({})
    const { openSpotId } =useParams()

    useEffect(() => {
        getOpenPositionById(openSpotId).then(res => setOpenSpot(res))
    },[openSpotId]
    )

    return(
        <h1 class="title">Applicants</h1>
    )
}