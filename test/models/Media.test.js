import test from 'ava';
import Media from "../../src/models/Media.js";

const media = new Media("Encore", "2021-01-06", 5, "https://upload.wikimedia.org/wikipedia/en/c/c0/Yoasobi_-_Encore.jpeg");


test('title = Encore', t => {
    t.is(media.title, 'Encore');
});


test('releaseDate = 2022-12-01', t => {
    t.is(media.releaseDate, '2021-01-06');
});


test('rating = 5', t => {
    t.is(media.rating, 5);
});


test('img = https://upload.wikimedia.org/wikipedia/en/c/c0/Yoasobi_-_Encore.jpeg', t => {
    t.is(media.img, "https://upload.wikimedia.org/wikipedia/en/c/c0/Yoasobi_-_Encore.jpeg");
});


test('media instanceof Media = true', t => {
    t.is(media instanceof Media, true);
});
