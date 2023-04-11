// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response){
//         console.log('response', response.json());
//     })
//     .catch(function(reason){
//         console.log('reason', reason);
//     })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        // response.json().then(function(data){
        //     console.log('data', data);
        // });
        return response.json()
    })
    .catch(function(reason){
        console.log('reason', reason);
    })
    .then(function(data){
        console.log('data', data);
    })