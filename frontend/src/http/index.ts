import axios from "axios";

export const apiUrl = `http://localhost:3000/api/`

const $api = axios.create({
    withCredentials: true,
    baseURL: apiUrl
})

export default $api;