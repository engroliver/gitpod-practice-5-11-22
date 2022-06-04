let movies = [
{
    "title":"The Lord of the Rings",
    "Genre":"Fantasy",
    "Duration":180,
},
{
    "title":"Intersteallar",
    "Genre":"Sci-fi",
    "Duration":180,
},
{
    "title":"Stranger Things 4",
    "Genre":"Sci-fi",
    "Duration":60,
}

]
for (let m of movies) {
let html = `
    <tr>
    <td>${m.title}</td>
    <td>${m.Genre}</td>
    <td>${m.Duration}</td>

</tr>
`
let tableBody = document.querySelector('#movie-rows')
tableBody.innerHTML +=  html

}