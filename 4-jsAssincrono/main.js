axios.get('https://api.github.com/users/gustavobretas')
    .then(function(response) {
        // console.log(response.data.avatar_url)
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    });