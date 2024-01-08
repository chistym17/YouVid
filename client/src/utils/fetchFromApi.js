import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url, params = {}) => {
  const options = {
    params: {
      part: 'snippet',
      ...params,  // Allow additional parameters to be passed
    },
    headers: {
      'X-RapidAPI-Key': '3bd3147edamsh878941630fef528p1d63c2jsn1ffe17dacd37',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      ...params.headers,  // Allow additional headers to be passed
    },
  };

  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    // Handle errors here
    console.error('API request failed:', error.message);
    throw error;  // Propagate the error to the caller if needed
  }
};
