import test from 'ava';
import Game from "../../src/models/Game.js";

const game = new Game("The Last Of Us", "2019-06-05", 4, "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", "Sony Interactive Entertainment Europe", 1, "When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?")


test('title = The Last Of Us', t => {
    t.is(game.title, 'The Last Of Us');
});


test('releaseDate = 2019-06-05', t => {
    t.is(game.releaseDate, '2019-06-05');
});


test('rating = 4', t => {
    t.is(game.rating, 4);
});


test('img = https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720', t => {
    t.is(game.img, 'https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720');
});


test('studio = Sony Interactive Entertainment Europe', t => {
    t.is(game.studio, 'Sony Interactive Entertainment Europe');
});


test('nbPlayers = 1', t => {
    t.is(game.nbPlayers, 1);
});


test('plot = When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?', t => {
    t.is(game.plot, 'When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?');
});


test('game instanceof Game = true', t => {
    t.is(game instanceof Game, true);
});
