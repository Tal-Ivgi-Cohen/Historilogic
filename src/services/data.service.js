//Axios import.
import axios from 'axios';

export const dataService = {
    query, 
};

async function query() {
    const res = await axios.get('https://history.muffinlabs.com/date/9/30');
    return res.data;
}