import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:3004',
    baseURL: 'https://luminuspark.azurewebsites.net'
});