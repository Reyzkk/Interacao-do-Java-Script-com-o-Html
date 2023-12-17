/*Você irá fazer um site utilizando unicamente JavaScript
Para isso, você deve:
Criar um arquivo HTML apenas com as divisões semânticas (header, main, etc)
Você irá pegar o header com o querySelector e colocar como filho dele
um título “h1” que você irá criar no javascript 
Você irá pegar o main com o querySelector e colocar como filho dele dois divs: cada um dos divs deve ter como filhos um título “h2” e um parágrafo “p” 

Obs: Você deve estilizar o seu site!!! Para isso, lembre de como adicionar ids e classes no javascript e defina a estilização no arquivo .CSS*/


const LocalHeader = document.querySelector('header')

const titulo = document.createElement('h1')
const tituloConteudo = document.createTextNode('Meu titulo')


titulo.appendChild(tituloConteudo)
LocalHeader.appendChild(titulo)


const LocalMain = document.querySelector('main')

const PrimeiraDiv = document.createElement('div');


const Subtitulo = document.createElement('h2');
const SubtituloConteudo = document.createTextNode('Meu Subtitulo')
Subtitulo.appendChild(SubtituloConteudo);

const paragrafo = document.createElement('p');
const paragrafoConteudo = document.createTextNode('Meu Paragrafo')
paragrafo.appendChild(paragrafoConteudo);


LocalMain.appendChild(PrimeiraDiv);
PrimeiraDiv.appendChild(Subtitulo)
PrimeiraDiv.appendChild(paragrafo)


const SegundaDiv = document.createElement('div')

PrimeiraDiv.appendChild(SegundaDiv)

const SegundoSubTitulo = document.createElement('h2');
const SegundoSubTituloConteudo = document.createTextNode('Segundo Subtitulo')
SegundoSubTitulo.appendChild(SegundoSubTituloConteudo)



const SegundoParagrafo = document.createElement('p');
const SegundoParagrafoConteudo = document.createTextNode('Segundo Paragrafo')
SegundoParagrafo.appendChild(SegundoParagrafoConteudo)

SegundaDiv.appendChild(SegundoSubTitulo)
SegundaDiv.appendChild(SegundoParagrafo)


PrimeiraDiv.classList.add('div1')
SegundaDiv.classList.add('div2')

titulo.classList.add('titulo')

Subtitulo.classList.add('subtitulo')
SegundoSubTitulo.classList.add('subtitulo')

paragrafo.classList.add('paragrafo')
SegundoParagrafo.classList.add('paragrafo')


