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