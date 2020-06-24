import axios from 'axios'
export default() => {
    return axios.create({
        // baseURL: `https://tobias-portfolio-backend.herokuapp.com/`
        baseURL: 'http://localhost:5000/'
    })
}