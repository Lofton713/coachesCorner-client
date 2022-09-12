export const loginUser = (user) => {
    return fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

export const registerPlayer = (user) => {
    return fetch("http://localhost:8000/registerPlayer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}

export const registerCoach = (user) => {
    return fetch("http://localhost:8000/registerCoach", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
}
