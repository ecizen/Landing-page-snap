// pages/api/hotel.js
import axios from 'axios';

export default async function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
    params: {
      hotel_id: '1377073',
      locale: 'en-gb'
    },
    headers: {
      'x-rapidapi-key': '6e9d7afe51mshc29365adb5dd14ep1ca425jsnf14d6fe3bb1d',
      'x-rapidapi-host': 'booking-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
