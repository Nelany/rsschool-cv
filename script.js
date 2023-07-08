const conteiner = document.querySelector(".feather-container")
const feather =document.querySelector(".feather")
const func = () => { eval(document.querySelector('.code__example').textContent); }
const container = document.querySelector('.feather-container');
container.addEventListener('click', func);
feather.addEventListener('click',func);