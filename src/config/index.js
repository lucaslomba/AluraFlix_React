const URL_PRODUCAO = 'https://alura-flix-lomba.herokuapp.com';
const URL_DEV = 'http://localhost:8080';

const URL_BACKEND_TOP = window.location.hostname.includes('localhost') ? URL_DEV : URL_PRODUCAO;

export default {
  URL_BACKEND_TOP,
};