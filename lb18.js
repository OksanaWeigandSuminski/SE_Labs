// const imdb = [
//   {title: 'The Shawshank Redemption', rating: 9.2, rank: 1, votes: 1071904, url: "<a href='https://www.imdb.com/title/tt0111161/'></a>"},
//   {title: 'The Godfather', rating: 9.2, rank: 2, votes: 751381, url: "<a href='https://www.imdb.com/title/tt0068646/'></a>"},
//   {title: 'The Godfather: Part 2', rating: 9, rank: 3, votes: 488889, url: "<a href='https://www.imdb.com/title/tt0071562/'></a>"}
// ];

var movies = {
  "title": "",
  "rating": "",
  "rank": "",
  "votes":"",
  "directors": ["", ""]
}
function myFunction(){
movies.title = document.getElementById("title").value;
movies.rating = document.getElementById("rating").value;
movies.rank = document.getElementById("rank").value;
movies.votes = document.getElementById("votes").value;
movies.directors = document.getElementById("directors").value.split(", ");
console.log(movies);
document.getElementById("code").innerHTML = movies.title + " has rating of " + movies.rating + " has rank # " + movies.rank + " by " + movies.votes + " votes";
var h1 = document.createElement('h1');
h1.innerHTML = movies.title + " has rating " + movies.rating + " has rank # " + movies.rank + " by " + movies.votes + " votes <br>";
h1.innerHTML += "My favorite movie is " +  movies.title + " directed by: " + movies.directors.join(", ");
document.body.appendChild(h1);
document.getElementById("title").value = "";
document.getElementById("rating").value = "";
document.getElementById("rank").value = "";
document.getElementById("votes").value = "";
document.getElementById("directors").value = "";
}

// var movies = {
//   "title": "The Godfather",
//   "rating": "9.2",
//   "rank": "2",
//   "votes":"1543876",
//   "directors": ["Frencis Coppola", "Sophia Coppola"]
// };
// var h1 = document.createElement('h1');
// h1.innerHTML = movies.title + " has rating " + movies.rating + " has rank # " + movies.rank + " by " + movies.votes + " votes '<br>'";
// h1.innerHTML += "My favorite movie is " +  movies.title + " directed by: " + movies.directors.join(", ");
// document.body.appendChild(h1);
