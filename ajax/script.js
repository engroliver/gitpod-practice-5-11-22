document.querySelector('#loadBtn')
.addEventListener('click', async function (){

let response = await axios.get('data.txt');
let areatxt = document.querySelector('#txt');
areatxt.value = response.data

})