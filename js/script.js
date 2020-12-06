"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
}

    start();
    
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for(let i=0; i<2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a.length < 50 && a != "" && b != "") {
        personalMovieDB.movies[a] = b;
        console.log("Done");
    }
    else {
        console.log("Something went wrong");
        i--;
    }
}

if(personalMovieDB.count < 10) {
    console.log("Просмотренно мало фильмов");
}
else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}
else if(personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}
else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);