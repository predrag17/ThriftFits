import axios from '../custom-axios/axios.js'

const Service = {
    registerUser: (data) => {
        return axios.post("/auth/register", data)
    },

    loginUser: (data) => {
        return axios.post("/auth/authenticate", data)
    }
}

export default Service