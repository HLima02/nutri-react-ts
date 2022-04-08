import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/',
})

const getPosts = (param:string) => {
  const posts = api.get(param);
  return posts;
}

export default getPosts;