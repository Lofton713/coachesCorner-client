export const getCurrentUsersFavorites = () => {
    return fetch(`http://localhost:8000/favorites?user=${localStorage.getItem('user_id')}`, {
        headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const createFavorite = (favorite) => {
    return fetch('http://localhost:8000/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(favorite)
    }).then(res => res.json())
}

export const deleteFavorite = (favoriteId) => {
    return fetch(`http://localhost:8000/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}