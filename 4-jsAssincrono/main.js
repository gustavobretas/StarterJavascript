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

function addUsuario(username) {
    function addRepos(repos){
        var h2Element = document.createElement('h2');
        h2Element.innerHTML = username;
        document.getElementById('app').appendChild(h2Element);
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
    axios.get('https://api.github.com/users/'+username+'/repos')
        .then(function(response) {
            addRepos(response.data);
        })
        .catch(function(error) {
            console.warn(error)
        });
};

document.getElementById('btnAddUsuario').onclick = function () {
    addUsuario(document.getElementById('inputUsuario').value);
    document.getElementById('inputUsuario').value = '';
}