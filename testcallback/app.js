const button = document.getElementById('btn')
const container = document.getElementById('container')
console.log("This is working!!!");

function sum(a,b){
    return a+b;
};

function Suma2Numeros(callback){
    const resultadoSuma = sum(1,2);

    //Realice anteriormente mas cosas...
    callback(resultadoSuma);
};

// function algo(valor) {
//     console.log(valor);
// }

Suma2Numeros(function(valor) { 
    console.log(valor)
 });

// Tienes que estar en la carpeta contenedora

function getUsers() {
    return fetch("http://127.0.0.1:5501/info.json")
        .then((response)=>{
            return response.json();
        });
};

 button.addEventListener('click',()=>{
    getUsers().then((text)=>{
        const ul = document.createElement('ul');
        for (let index = 0; index < text.usuarios.length; index++) {
            const li = document.createElement('li');
            li.innerText = text.usuarios[index].name;

            ul.appendChild(li);
        }
        container.appendChild(ul);
        console.log(text.usuarios)
    });

 });
