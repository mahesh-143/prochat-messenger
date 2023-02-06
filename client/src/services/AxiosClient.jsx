import axios from 'axios'
import { useAuth } from '../Hooks/useAuth'

const client = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})



export default client