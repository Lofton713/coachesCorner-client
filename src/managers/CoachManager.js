export const getAllCoaches = () => {
    return fetch("http://localhost:8000/coaches", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getCurrentCoach = (id) => {
    return fetch(`http://localhost:8000/coaches/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(res => res.json())
}

export const updateCoach = (id, coach) => {
    return fetch(`http://localhost:8000/coaches/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(coach)
    })
}