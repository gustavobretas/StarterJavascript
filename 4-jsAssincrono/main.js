function execAjax(){
    axios.get('https://api.github.com/users/gustavobretas')
        .then(function(response) {
            // console.log(response.data.avatar_url)
            console.log(response)
        })
        .catch(function(error) {
            console.warn(error)
        });
}

function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {  
            if (idade >= 18) {
                resolve("Maior que 18 anos!")
            } else {
                reject("Menor que 18 anos!")
            };
        }, 2000);
    })
};
    

document.getElementById('verificarIdade').onclick = function () {
    checaIdade(document.getElementById('inputIdade').value)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
        console.log(error);
        });    
};

function addRepos(repos){
    var ulElement = document.createElement('ul');
    for (repo of repos) {
        var liElement = document.createElement('li');
        var aElement = document.createElement('a');
        aElement.setAttribute('href', repo.html_url)
        aElement.innerHTML = repo.name;
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        document.getElementById('app').appendChild(ulElement);
    }
}

function addUsuario(username) {
    return new Promise(function(resolve, reject) {
        axios.get('https://api.github.com/users/'+username+'/repos')
            .then(function(response) {
                if (response.data.length > 0) {
                    var h2Element = document.createElement('h2');
                    h2Element.innerHTML = username;
                    document.getElementById('app').appendChild(h2Element);
                    resolve(response.data);
                } else {
                    reject(response)
                }
            })
            .catch(function(error) {
                reject(error);
            });
    });
};

document.getElementById('btnAddUsuario').onclick = function () {
    var divLoader = document.createElement('div');
    divLoader.setAttribute('class', 'loader');
    document.getElementById('app').appendChild(divLoader);
    addUsuario(document.getElementById('inputUsuario').value)
        .then(function(response){
            addRepos(response);
            document.getElementById('app').removeChild(divLoader);
            document.getElementById('inputUsuario').value = '';
        })
        .catch(function(error) {
            alert('Usuário não Encontrado.')
            document.getElementById('app').removeChild(divLoader);
        });
}

