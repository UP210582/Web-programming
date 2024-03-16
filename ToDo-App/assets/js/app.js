alert("Selecciona un usuario")

const chooseUser = document.getElementById('select-users');
const contUser = document.getElementById('user-container');
const contTasks = document.getElementById('task-container');
const btn = document.getElementById('btn');

function getAllUsers() {
    return fetch('data/usuarios.json')
    .then((resp) => console.log(resp.json()));
    
}

function getUserTasks(userId){
    return fetch('data/tareas.json')
    .then((resp)=>{
        return resp.json()
    }).then((resp)=>{
        const array = []
        for (let i = 0; i < resp.length; i++) {
            const element = resp[i];
            if (element.userId==userId) {
                array.push(element);
            }
        }
        return array
    })
}

function getInfoUser(value) {
    return fetch('data/usuarios.json')
    .then((resp) => {
        return resp.json()
    }).then((resp)=>{
        return resp[value-1]
    });
}

btn.addEventListener('click',()=>{
    getInfoUser(chooseUser.value).then((text)=>{
        const nombre = contUser.children[1].children[0];
        const email = contUser.children[1].children[1];     
        nombre.textContent = `Nombre completo: ${text.firstname} ${text.lastname}`
        email.textContent = `Email: ${text.email}`
    })
    getUserTasks(chooseUser.value).then((text)=>{
        const ul = contTasks.children[1]
        while(ul.firstChild){
            ul.removeChild(ul.firstChild)
        }
            for (let i = 0; i < text.length; i++) {
                const li = document.createElement('li')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type','checkbox')
                li.innerText = text[i].title
                if (text[i].completed) {
                    checkbox.checked = true
                }
                li.appendChild(checkbox)
                ul.appendChild(li)    
            }            
    })
    
})