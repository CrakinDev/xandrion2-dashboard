import axios from 'axios'

export function getUserDetails()
{
    return axios.get('http://localhost:8080/api/auth',
    {
        withCredentials: true
    })
}