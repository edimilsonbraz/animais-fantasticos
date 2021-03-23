/*
const animais = document.getElementById('animais');
//console.log(animais)

const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection[2])

const primeiroUl = document.querySelector('ul')
console.log(primeiroUl)

const linkInterno = document.querySelector('[href^="#"]')
//console.log(linkInterno)

const grids = document.querySelectorAll('.grid-section')
console.log(grids)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

*/

//Exercício
// Retorne no console todas as imagens do site
const imagesAll = document.querySelectorAll('img')
console.log(imagesAll)


// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagens)


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)


// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)


// Selecione o último p do site
const lastP = document.querySelector('.copy p')
console.log(lastP)