export const getAllAttendees = () => {
    return fetch(`http://localhost:8000/attendees`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const addAttendee = (gameId, attendeeId) => {
    return fetch(`http://localhost:8000/games/${gameId}/add`, {
        method: "POST",
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attendeeId)
    })
}

export const createAttendee = (attendee) => {
    return fetch('http://localhost:8000/attendees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(reaction)
    }).then(res => res.json())
}