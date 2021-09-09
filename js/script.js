"use strict";



const numberOfFilms = +prompt('How many moview have you seen?', 'enter a number');

const personalMovieDatabase = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genre : [],
    privat : false
};

for (let i = 0; i<=1; ++i) {
    personalMovieDatabase.movies[prompt('The last sovn movie', 'name of movie')] = 
                                                prompt('How would you rate it?', 'rate from 0 to 10');
}


console.log(personalMovieDatabase);

