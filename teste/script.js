async function getMovieList(year) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
  await fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
    .then((response) => response.json())
    .then((data) => data.data.map((titulos) => titulos.Title))
    .then((data) => console.log(data));
}

console.log(getMovieList('2015'));
