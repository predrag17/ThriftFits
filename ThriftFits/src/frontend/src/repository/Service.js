import axios from '../custom-axios/axios'

const Service = {
    registerUser: (data) => {
        return axios.post("/auth/register", data)
    },

    loginUser: (data) => {
        return axios.post("/auth/authenticate", data)
    },

    addAd: (data) => {
        return axios.post("/ads/add", data);
    }
}

export default Service