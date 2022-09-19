export const getAllPlayers = () => {
    return fetch("http://localhost:8000/players", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getPlayerById = (id) => {
    return fetch(`http://localhost:8000/players/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getCurrentPlayer = (id) => {
    return fetch(`http://localhost:8000/players/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(res => res.json())
}

export const updatePlayer = (id, player) => {
    return fetch(`http://localhost:8000/players/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(player)
    })
}