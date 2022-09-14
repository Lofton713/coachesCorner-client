export const getAllColleges = () => {
    return fetch("http://localhost:8000/colleges", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const getCollegesById = (id) => {
    return fetch(`http://localhost:8000/colleges/${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}