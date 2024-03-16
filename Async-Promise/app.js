const btn = document.getElementById("btn");
const time = ((Math.floor(Math.random()* 2)+1) * 1000);
const container = document.getElementById('container-users');

function getUsers(callback){
    setTimeout(() => {
        const users = [
            {id: 1, name: 'Leonardo', years: 20},
            {id: 2, name: 'Rogelio', years: 25}
        ];
        callback(users);
    }, time)
}

btn.addEventListener('click', () => {
    getUsers((users) => {
        const ul = document.createElement('ul');
        for(let i = 0; i < users.length; i++){
            const li = document.createElement('li');
            const btnli = document.createElement('button');

            btnli.innerText = "Get User Info"
            li.innerText = users[i].name;
            li.appendChild(btnli);

            ul.appendChild(li);

            btnli.addEventListener('click', () => {
                const id = users[i].id;
                getInfo(id, (info) => {
                    const ol = document.createElement('ol');
                    ol.innerHTML = `
                    <li> ${info.fullName} </li>
                    <li> ${info.birthday} </li>
                    `;
                    li.appendChild(ol);
                });
            });
        }
        container.innerHTML = ul.innerHTML;
    });
});

function getInfo(id, callback){
    setTimeout(() => {
        const userInfo = [
            {id: 1, idUser: 2, fullName: "Rogelio Trejo", birthday: "2001-03-24"},
            {id: 2, idUser: 1, fullName: "Leonardo Martinez", birthday: "2003-07-14"}
        ];
        const userFindInfo = userInfo.find(user => {
            return user.idUser === id
        })
        callback(userFindInfo);
    }, time)
}