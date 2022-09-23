export const getAllApplicants = () => {
    return fetch("http://localhost:8000/applicants", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
};

export const createApplicant = (applicant) => {
    return fetch('http://localhost:8000/applicants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(applicant)
    }).then(res => res.json())
}

export const deleteApplicant = (applicantId) => {
    return fetch(`http://localhost:8000/applicants/${applicantId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const getApplicantById = (id) => {
    return fetch(`http://localhost:8000//${id}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}