const BASE_API_URL = "https://pokeapi.co/api/v2"


document.querySelector('#SearchBtn')
.addEventListener('click',async function (){
    
let pokeSearch = document.querySelector('#txtSearch').value;
let endpointURL = BASE_API_URL +'/pokemon/'+ pokeSearch;
let response = await axios.get(endpointURL)
let resultData = document.querySelector('#result');
resultData.innerHTML =`
 { <img src="${response.data.sprites.front_default}"/> }
<ul>
<li>Name:${response.data.name}</li>    
<li>Abilities:${response.data.abilities[0].ability.name}</li>
<li>Base Experience:${response.data.base_experience}</li>
<li>Forms:${response.data.forms}</li>
<li>Moves:${response.data.moves}</li>
<li>Weight:${response.data.weight}</li>


</ul>`

})
