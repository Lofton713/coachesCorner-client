export const getAllRecruits = () => {
    return fetch("http://localhost:8000/recruits", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getRecruitById = (id) => {
    return fetch(`http://localhost:8000/recruits/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getRecruitsByUser = (id) => {
    return fetch(`http://localhost:8000/recruits?user=${id}`, {
        headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const getCurrentUsersRecruits = () => {
    return fetch(`http://localhost:8000/recruits?coach=${localStorage.getItem('user_id')}`, {
        headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const deleteRecruit = (recruitId) => {
    return fetch(`http://localhost:8000/recruits/${recruitId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const createRecruit = (recruit) => {
    return fetch('http://localhost:8000/recruits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(recruit)
    }).then(res => res.json())
}