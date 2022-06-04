let total = 0;

let btn = document.querySelector('#addBtn');
btn.addEventListener('click',function(){
let txtbox = document.querySelector('#new-number');
let num = parseInt(txtbox.value)
 total += num;
let unorderedList = document.querySelector('#num-list');
unorderedList.innerHTML += `<li>${num}</li>`
let totalSpan = document.querySelector("#total");
totalSpan.innerHTML = total;

})