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

export const createGame = (game) => {
    return fetch('http://localhost:8000/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(game)
    }).then(res => res.json())
}

export const deletePlayer = (playerId) => {
    return fetch(`http://localhost:8000/players/${playerId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
  }