import axios from 'axios';

export const fetchData = async (text,quotes) => {
    return await axios.get(`https://breakingbadapi.com/api/characters?name=${text}`)
}