// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
let allDirector=[]
const getAllDirectors=(items)=>items.map((items)=>{
  
 if(allDirector.indexOf(items.director)===-1){
   allDirector.push(items.director)
 }
})
console.log(`All directors`, allDirector)
getAllDirectors(movies) 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let drama=[]
const howManyMovies=movies=>{
    let moviesSpienberg=movies.filter(item=> item.director==="Steven Spielberg")
    for (i in moviesSpienberg){
    moviesSpienberg[i].genre.filter(a=>a==="Drama"? drama.push(moviesSpienberg[i]):null)
    }      
      console.log(`Dramatic movies Spielberg :`,drama)
} 
howManyMovies(movies)

// console.log(dramaticMoviesSpienberg)
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
let scores=[]
let average=[]
function scoresAverage() {
    for (i of movies){
      scores.push(i.score)
    }
    average=(scores.reduce( (act, acc)=> act + acc  )/movies.length).toFixed(2)
}       
scoresAverage(movies)
console.log(`Average : `, average )

// Iteration 4: Drama movies - Get the average of Drama Movies
moviesOfDrama=[]
scoreMoviesDrama=[]
let scoresDrama=0
function dramaMoviesScore(movies) {
  for (i in movies){
    movies[i].genre.filter(a=>a==="Drama"? moviesOfDrama.push(movies[i]):null)   
    } 
    for(i in moviesOfDrama){
      scoreMoviesDrama.push(moviesOfDrama[i].score)
    } 
    scoresDrama= scoreMoviesDrama.reduce((a,b)=> a+ b )      
    return scoresDrama/=scoreMoviesDrama.length  
}
dramaMoviesScore(movies)
console.log(`Average movies of drama :`,scoresDrama.toFixed(2))

//Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 let [...orderYears]=movies
function orderByYear(movies) {
  orderYears.sort((a,b)=> a.year - b.year)
  console.log(`Orderyears : `,orderYears)
 }
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let [...orderAlphabet]=movies
function orderAlphabetically(movies) {
  orderAlphabet.sort((a,b)=> a.title.localeCompare(b.title))
  orderAlphabet=orderAlphabet.splice(0,20)
}
orderAlphabetically(movies)
console.log()
console.log(`OrderAlphabet : `,orderAlphabet)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let convertion=[]
let hours=[]
let mins=[]
let durationMins=[]
let [...moviesInMinutes]=movies
function turnHoursToMinutes(moviesToMinutes) {}
for(i in moviesInMinutes){
  convertion.push(moviesInMinutes[i].duration[0].replace(/[ hmin]/g,"").split(""))
  hours.push(convertion[i]*60)
  mins.push(moviesInMinutes[i].duration.replace(/[ h,min]/g,"").split(""))
  mins[i].shift()
  mins[i]=mins[i].toString().replace(",","")*1
  durationMins.push(hours[i]+mins[i])
  moviesInMinutes[i].duration=durationMins[i]
}
turnHoursToMinutes(moviesInMinutes)
console.log(`Movies in minutes : `, moviesInMinutes)

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) { 

}
bestYearAvg(movies)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
