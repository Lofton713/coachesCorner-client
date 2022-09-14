export const getAllColleges = () => {
    return fetch("http://localhost:8000/colleges", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};