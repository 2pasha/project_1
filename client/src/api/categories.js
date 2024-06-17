import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3005'

export function getAll() {
  return axios.get('/category')
    .then(res => res.data)
    .catch(error => console.error(error));
}

export async function add({ title, description }) {
  const responce = await axios.post('/category', { title, description });

  return responce.data;
}