export const getAllCoaches = () => {
    return fetch("http://localhost:8000/coaches", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};