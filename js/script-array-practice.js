//STEP 1
//let favMovies = ['Glory', 'Brave Heart', ' Wonder Woman', ' Rambo ', ' Spirited Away']
//console.log(favMovies[1])

//STEP 2
/* let myMovies = new Array(5)
myMovies[0] = 'Glory'
myMovies[1] = 'Brave Heart'
myMovies[2] = 'Wonder Woman'
myMovies[3] = 'Rambo'
myMovies[4] = 'Spirited Away'
console.log(myMovies[0])
*/

//STEP 3
/* let myMovies = new Array(5)
myMovies[0] = 'Glory'
myMovies[1] = 'Brave Heart'
myMovies[2] = 'Wonder Woman'
myMovies[3] = 'Rambo'
myMovies[4] = 'Spirited Away'
//console.log(myMovies[0])
myMovies.splice(2, 0, 'Disney\'s Robin Hood')
console.log(myMovies.length)
 */

//STEP 4
/* let movies = ['Glory', 'Brave Heart', ' Wonder Woman', ' Rambo ', ' Spirited Away']
delete movies[0]               
console.log(movies)
*/

//STEP 5
/* let movies =[]
movies[0] = 'Glory'
movies[1] = 'Brave Heart'
movies[2] = 'Wonder Woman'
movies[3] = 'Rambo'
movies[4] = 'Spirited Away'
movies[5] = 'A Shot in the Dark'
movies[6] = 'Jurassic Park'
//use for-in loop to display
for (let movie in movies) {
	console.log(movies[movie])
}
*/
//STEP 6
/* let movies =[]
movies[0] = 'Glory'
movies[1] = 'Brave Heart'
movies[2] = 'Wonder Woman'
movies[3] = 'Rambo'
movies[4] = 'Spirited Away'
movies[5] = 'A Shot in the Dark'
movies[6] = 'Jurassic Park'
//use for-of loop to display
for (let i of movies) {
	console.log(i)	
}
*/ 
//STEP 7
/* let movies =[]
movies[0] = 'Glory'
movies[1] = 'Brave Heart'
movies[2] = 'Wonder Woman'
movies[3] = 'Rambo'
movies[4] = 'Spirited Away'
movies[5] = 'A Shot in the Dark'
movies[6] = 'Jurassic Park'
for (let i of movies.sort()) {
	console.log(i)	
}
*/

//STEP 8
/* let movies =[]
movies[0] = 'Glory'
movies[1] = 'Brave Heart'
movies[2] = 'Wonder Woman'
movies[3] = 'Rambo'
movies[4] = 'Spirited Away'
movies[5] = 'A Shot in the Dark'
movies[6] = 'Jurassic Park'
console.log('Movies I like: \n')
//use for-in loop to display
for (let movie in movies) {
	console.log(movies[movie])
}
let leastFavMovies =[]
leastFavMovies[0] = 'Coctail'
leastFavMovies[1] = 'Scary Movie'
leastFavMovies[2] = 'The Smurfs'
console.log('\nMovies I regret watching: \n')
for (let movie in leastFavMovies) {
	console.log(leastFavMovies[movie])
}
*/ 

//STEP 9
/* let fmovies =[]
fmovies[0] = 'Glory'
fmovies[1] = 'Brave Heart'
fmovies[2] = 'Wonder Woman'
fmovies[3] = 'Rambo'
fmovies[4] = 'Spirited Away'
fmovies[5] = 'A Shot in the Dark'
fmovies[6] = 'Jurassic Park'

let leastFavMovies =[]
leastFavMovies[0] = 'Coctail'
leastFavMovies[1] = 'Scary Movie'
leastFavMovies[2] = 'The Smurfs'
//join with concat 
let movies = fmovies.concat(leastFavMovies)
console.log('All movies: \n')
//display reverse sorted 
movies = movies.sort()
console.log(movies.reverse())
*/
//STEP 10
/* let fmovies =[]
fmovies[0] = 'Glory'
fmovies[1] = 'Brave Heart'
fmovies[2] = 'Wonder Woman'
fmovies[3] = 'Rambo'
fmovies[4] = 'Spirited Away'
fmovies[5] = 'A Shot in the Dark'
fmovies[6] = 'Jurassic Park'

let leastFavMovies =[]
leastFavMovies[0] = 'Coctail'
leastFavMovies[1] = 'Scary Movie'
leastFavMovies[2] = 'The Smurfs'
//join with concat 
let movies = fmovies.concat(leastFavMovies)
console.log('Last movie: ')
//display reverse sorted 
movies = movies.sort()
let movie = movies.reverse().pop()                                                                                                      
console.log(movie)
*/
//STEP 11
let fmovies =[]
fmovies[0] = 'Glory'
fmovies[1] = 'Brave Heart'
fmovies[2] = 'Wonder Woman'
fmovies[3] = 'Rambo'
fmovies[4] = 'Spirited Away'
fmovies[5] = 'A Shot in the Dark'
fmovies[6] = 'Jurassic Park'

let leastFavMovies =[]
leastFavMovies[0] = 'Coctail'
leastFavMovies[1] = 'Scary Movie'
leastFavMovies[2] = 'The Smurfs'
//join with concat 
let movies = fmovies.concat(leastFavMovies)
console.log('First movie: ')
//display reverse sorted 
movies = movies.sort()
let movie = movies.reverse().shift()                                                                                                      
console.log(movie)

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17
