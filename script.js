fetch('https://jsonplaceholder.typicode.com/posts/10')
.then(response => response.json())
.then(json => console.log(json))

