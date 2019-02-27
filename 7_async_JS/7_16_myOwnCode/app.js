const getTodos = document.getElementById('get-todos').addEventListener('click', get);

// async function get() {
//     console.log('testing')
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();

//     let output = '';

//     data.forEach(element => {
//         todo = `<li class="list-group-item">${element.title} ID:${element.id}`
//         output += todo
//     });

//     document.querySelector('#output').innerHTML = output
// };

function get() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(element => {
            todo = `<li class="list-group-item">${element.title} ID:${element.id}</li>`
            output += todo
        });
        document.querySelector('#output').innerHTML = output

    })
    .catch(err => {
        error = `<h2 class="danger">There was something wrong ${err}</h2>`;
        document.querySelector('#output').innerHTML = error
    })
}