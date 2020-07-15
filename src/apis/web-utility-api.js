import axios from 'axios'

export default axios.create({
	// baseURL: 'https://sheetcode-api.herokuapp.com/'
    //flask ports
    baseURL: 'http://localhost:5000/'
})