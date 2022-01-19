import test from 'ava';
import Collection from "../../src/models/Collection.js";
import Game from "../../src/models/Game.js";
import Album from "../../src/models/Album.js";
import Movie from "../../src/models/Movie.js";


test('length = 3', t => {
    t.is(Collection.medias.length, 3);
});


test('filterAll().length = 3', t => {
    t.is(Collection.filterAll().length, 3);
});


test('filterAllByAlbums().length = 1', t => {
    t.is(Collection.filterAllByAlbums().length, 1);
});


test('filterAllByMovies().length = 1', t => {
    t.is(Collection.filterAllByMovies().length, 1);
});


test('filterAllByGames().length = 1', t => {
    t.is(Collection.filterAllByGames().length, 1);
});


test('filterAllByCollections().length = 0', t => {
    t.is(Collection.filterAllByCollections().length, 0);
});


test('filterAllByAlbums() = {"「群青」(Gunjō)", "2021-01-06", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU", "Yoasobi", 10}', t => {
    t.deepEqual(Collection.filterAllByAlbums()[0], new Album("「群青」(Gunjō)", "2021-01-06", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU", "Yoasobi", 10), "identical");
});


test('filterAllByGames() = {"The Last Of Us", "2019-06-05", 4, "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", "Sony Interactive Entertainment Europe", 1, "When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?"}', t => {
    t.deepEqual(Collection.filterAllByGames()[0], new Game("The Last Of Us", "2019-06-05", 4, "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", "Sony Interactive Entertainment Europe", 1, "When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?"), "identical");
});


test('filterAllByMovies() = {"Marly & Me", "2008-12-25", 5, "https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593", "David Frankel", "Owen Wilson, Jennifer Aniston, Eric Dane", "1h55m", "A newly married couple learns many of life\'s important lessons from their trouble-loving yellow Lab, Marley."}', t => {
    t.deepEqual(Collection.filterAllByMovies()[0], new Movie("Marly & Me", "2008-12-25", 5, "https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593", "David Frankel", "Owen Wilson, Jennifer Aniston, Eric Dane", "1h55m", "A newly married couple learns many of life's important lessons from their trouble-loving yellow Lab, Marley."), "identical");

});

