import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
  maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': '3bd3147edamsh878941630fef528p1d63c2jsn1ffe17dacd37',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};