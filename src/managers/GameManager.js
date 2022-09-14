export const getAllGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getGamesByUser = (id) => {
    return fetch(`http://localhost:8000/games?user=${id}`, {
        headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}