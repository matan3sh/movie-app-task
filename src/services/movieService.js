import axios from 'axios';
const BASE_URL = '/allMovies/allMovies.txt';

const query = async () => {
  try {
    const res = await axios.get(BASE_URL);
    const data = await res.data;
    return data.movies.sort((movieA, movieB) => movieA.year - movieB.year);
  } catch (err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    const res = await axios.get(`/descriptionMovies/${id}.txt`);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
  getById
};
