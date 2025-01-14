const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const register = async (data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/signup`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(response.status === 200 || response.status === 400)
        return response.json();
    throw new Error("Something went wrong");
    

}


const login = async (data) => {
    const response = await fetch(`${BACKEND_URL}/api/user/signin`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(response.status === 200 || response.status === 400)
        return response.json();
    throw new Error("Something went wrong");   

}

const getJobs = async () => {
    const response = await fetch(`${BACKEND_URL}/api/job/`)
    if(response.status === 200)
        return response.json();
    throw new Error("Something went wrong");
}

export {
    register,
    login,
    getJobs
} 