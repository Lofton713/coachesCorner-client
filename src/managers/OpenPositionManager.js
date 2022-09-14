export const getAllOpenPositions = () => {
    return fetch("http://localhost:8000/open_spots", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getOpenPositionById = (id) => {
    return fetch(`http://localhost:8000/open_spots/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getCurrentUsersOpenPositions = () => {
    return fetch(`http://localhost:8000/open_spots?user=${localStorage.getItem('user_id')}`, {
        headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const createOpenPosition = (open_spot) => {
    return fetch('http://localhost:8000/open_spots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(open_spot)
    }).then(res => res.json())
}

export const deleteOpenPosition = (open_spotId) => {
    return fetch(`http://localhost:8000/open_spots/${open_spotId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const updateOpenPosition = (open_spot) => {
    return fetch(`http://localhost:8000/open_spots/${open_spot.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(open_spot)
    })
}