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

async function checaIdade(idade) {
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