

fetch('https://dog.ceo/api/breeds/image/random', {method : 'get'})
.then( response => response.json() )
.then( data => console.log(data.message) )
.catch( error => console.error(error) );