import test from 'ava';
import Movie from "../../src/models/Movie.js";

const movie = new Movie("Marly & Me", "2008-12-25", 5, "https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593", "David Frankel", "Owen Wilson, Jennifer Aniston, Eric Dane", "1h55m", "A newly married couple learns many of life's important lessons from their trouble-loving yellow Lab, Marley.")


test('title = Marly & Me', t => {
    t.is(movie.title, 'Marly & Me');
});


test('releaseDate = 2008-12-25', t => {
    t.is(movie.releaseDate, '2008-12-25');
});


test('rating = 5', t => {
    t.is(movie.rating, 5);
});


test('img = https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593', t => {
    t.is(movie.img, 'https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593');
});


test('director = David Frankel', t => {
    t.is(movie.director, 'David Frankel');
});


test('actors = Owen Wilson, Jennifer Aniston, Eric Dane', t => {
    t.is(movie.actors, 'Owen Wilson, Jennifer Aniston, Eric Dane');
});


test('duration = 1h55m', t => {
    t.is(movie.duration, '1h55m');
});


test("plot = A newly married couple learns many of life's important lessons from their trouble-loving yellow Lab, Marley.", t => {
    t.is(movie.plot, "A newly married couple learns many of life's important lessons from their trouble-loving yellow Lab, Marley.");
});


test('movie instanceof Movie = true', t => {
    t.is(movie instanceof Movie, true);
});

