function randomExcuse()
{
let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let randomnumber1= Math.floor(Math.random()*4)
let randomnumber2= Math.floor(Math.random()*4)
let randomnumber3= Math.floor(Math.random()*5)

let texto= `${who[randomnumber1]} ${what[randomnumber2]} ${who[randomnumber3]}`

let parrafo = document.querySelector("#excuse")
parrafo.innerHTML = texto
};
randomExcuse()
