import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-a1a95.firebaseio.com/",
});

export default instance;