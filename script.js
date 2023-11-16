const conteiner = document.querySelector(".feather-container")
const feather =document.querySelector(".feather")
const cast = () => { eval(document.querySelector('.code__example').textContent); }
const container = document.querySelector('.feather-container');
container.addEventListener('click', cast);