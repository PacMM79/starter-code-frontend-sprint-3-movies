// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(film => (film.director));
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(film => film.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let result = movies.filter(film => film.director === director)
  let scoreTotal = result.reduce((total,film) => total + film.score,0);
  let scoreMid = result.length > 0 ? scoreTotal / result.length : 0;
  let average = parseFloat(scoreMid.toFixed(2));
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(films => (films.title))
  result.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let order = result.slice(0,20);
  return order;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let years = [...movies];
  years.sort((a,b) => {
    if(a.year > b.year){
      return 1;
    }
    if(a.year < b.year){
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
  return years;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let result = movies.filter(film => film.genre .includes(genre));
  let scoreTotal = result.reduce((total,film) => total + film.score,0);
  let scoreMid = result.length > 0 ? scoreTotal / result.length : 0;
  let scoreAverage = parseFloat(scoreMid.toFixed(2));
  return scoreAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function convertToMinutes(time) {
  const regex = /(?:(\d+)h\s*)?(?:(\d+)\s*min)?/;
  const parts = time.match(regex);
  if (!parts) {
    console.log("Formato no válido");
    return 0;
  }
  const horas = parseInt(parts[1], 10) || 0;
  const minutos = parseInt(parts[2], 10) || 0;
  return horas * 60 + minutos;
}
function hoursToMinutes(movies) {
  const newMovies = movies.map(film => ({
    ...film,
    duration: convertToMinutes(film.duration)
    }));
    return newMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
