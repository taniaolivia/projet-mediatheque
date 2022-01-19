import test from 'ava';
import Album from "../../src/models/Album.js";

const album = new Album("「群青」(Gunjō)", "2021-01-06", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU", "Yoasobi", 10)


test('title = 「群青」(Gunjō)', t => {
    t.is(album.title, '「群青」(Gunjō)');
});


test('releaseDate = 2021-01-06', t => {
    t.is(album.releaseDate, '2021-01-06');
});


test('rating = 5', t => {
    t.is(album.rating, 5);
});


test('img = https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU', t => {
    t.is(album.img, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU');
});


test('artists = Yoasobi', t => {
    t.is(album.artists, 'Yoasobi');
});


test('nbTracks = 10', t => {
    t.is(album.nbTracks, 10);
});


test('album instanceof Album = true', t => {
    t.is(album instanceof Album, true);
});

