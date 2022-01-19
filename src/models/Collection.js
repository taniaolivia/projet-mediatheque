import Media from './Media.js';
import Album from './Album.js';
import Movie from './Movie.js';
import Game from './Game.js';

const media1 = new Album("「群青」(Gunjō)", "2021-01-06", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GkmtV0ncmCHtcyBBDt0hJSs31XX8MSkPar6BUaKgxI0jItMJ1q0nDHONSzgZKhbI_3A&usqp=CAU", "Yoasobi", 10)
const media2 = new Game("The Last Of Us", "2019-06-05", 4, "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/99/EP9000-NPEA00435_00-THELASTOFUSDIG01/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720", "Sony Interactive Entertainment Europe", 1, "When the world you knew is gone and when life or death decisions are an everyday reality, what choices would you make to stay alive?")
const media3 = new Movie("Marly & Me", "2008-12-25", 5, "https://i0.wp.com/www.moviesinfocus.com/wp-content/uploads/2012/04/marley-and-me-review.jpg?fit=600%2C593", "David Frankel", "Owen Wilson, Jennifer Aniston, Eric Dane", "1h55m", "A newly married couple learns many of life's important lessons from their trouble-loving yellow Lab, Marley.")

let medias = [
    media1,
    media2,
    media3,
]

function addMedia(media)
{
    if (media instanceof Game)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>
            </div>
            <div class="info">
            <div class="info-top">
                <h1 class="info-h1" data-type="title">${media.title}</h1>
                <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>
                <div class="info-description info-plot">${media.plot}</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;

        document.querySelector("#content").innerHTML += html;
    }
    else if(media instanceof Movie)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>
            </div>
            <div class="info">
            <div class="info-top">
                <h1 class="info-h1" data-type="title">${media.title}</h1>
                <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>
                
                <div class="info-description info-plot">${media.plot}</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;
    

        document.querySelector("#content").innerHTML += html;
    }
    else if(media instanceof Album)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>            
            </div>
            <div class="info">
                <div class="info-top">
                    <h1 class="info-h1" data-type="title">${media.title}</h1>
                    <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>

                <div class="info-description info-plot">By ${media.artists}, contains ${media.nbTracks} tracks.</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;

        document.querySelector("#content").innerHTML += html;
    }

    
    medias.push(media);
    save();
    removeMedia();
    let edit = document.getElementById("form-edit");

        document.querySelectorAll(".btn-edit").forEach(editBtn => {
            editBtn.addEventListener('click', () => {
                edit.style.display = "block";
            })
        });

        document.querySelector('#edit-type').innerHTML = `
        <select name="type" id="selected-type1">
            <option value="game">Game</option>
            <option value="album">Album</option>
            <option value="movie">Movie</option>
        </select>
    `;
}

function removeMedia()
{
    document.querySelectorAll(".btn-remove").forEach(remove => {
        remove.onclick = () => {
            document.querySelector("#content").removeChild(remove.parentNode.parentNode.parentNode)
        }
    });
}

function editMedia()
{
    document.querySelectorAll(".btn-submit").forEach(edit=> {
        edit.onclick = () => {
            document.querySelector(".title").value = 'new';
        }
    });
}

function createMediaList(medias)
{
    let list = document.querySelector('#content');
    list.innerHTML = '';
    medias.forEach(media => {

        list.innerHTML += displayMedia(media);
        
        let edit = document.getElementById("form-edit");

        document.querySelectorAll(".btn-edit").forEach(editBtn => {
            editBtn.addEventListener('click', () => {
                edit.style.display = "block";
            })
        });

        document.querySelector('#edit-type').innerHTML = `
        <select name="type" id="selected-type1">
            <option value="game">Game</option>
            <option value="album">Album</option>
            <option value="movie">Movie</option>
        </select>
    `;

        document.querySelector("#selected-type1").addEventListener("change", displaySpecific1);

    });
}

function displayMedia(media)
{
    if (media instanceof Game)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>
            </div>
            <div class="info">
            <div class="info-top">
                <h1 class="info-h1" data-type="title">${media.title}</h1>
                <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>
                <div class="info-description info-plot">${media.plot}</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;

        return html;
    }
    else if(media instanceof Movie)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>
            </div>
            <div class="info">
            <div class="info-top">
                <h1 class="info-h1" data-type="title">${media.title}</h1>
                <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>
                
                <div class="info-description info-plot">${media.plot}</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;
    

        return html;
    }
    else if(media instanceof Album)
    {
        let html = `
        <div class="media">
            <div class="image">
                <img src="${media.img}"></img>            
            </div>
            <div class="info">
                <div class="info-top">
                    <h1 class="info-h1" data-type="title">${media.title}</h1>
                    <p class="releaseDate" data-type="releaseDate">Released the ${media.releaseDate}, 12:00:00 AM</p>
                </div>

                <div class="info-description info-plot">By ${media.artists}, contains ${media.nbTracks} tracks.</div>

                <div class="info-description info-rating">
                    Rating: ${media.rating}
                </div>
                <div class="info-buttons">
                    <button type="button" class="btn btn-secondary btn-edit">Edit</button>
                    <button type="button" class="btn btn-primary btn-remove">Remove</button>
                </div>
            </div>
        </div>
        `;

        return html;
    }
}

function displaySpecific1()
{
    let selectedType = document.querySelector("#selected-type1");
    let option = selectedType.options[selectedType.selectedIndex].value;

    if (option === "game")
    {
        let html = `
            <p><label for="studio"><b>Studio</b></label>
                <input type="text" placeholder="Studio" name="studio" class="studio"></p>

            <p><label for="nbPlayers"><b>Number of players</b></label>
                <input type="text" placeholder="100" name="nbPlayers" class="nbPlayers"></p>    
            
            <p><label for="game-plot"><b>Plot</b></label>
                <input type="text" placeholder="A princess is trapped..." name="game-plot" class="game-plot"></p>    
        `;

        document.querySelector(".specific1").innerHTML = html;
    }
    else if (option === "album")
    {
        let html = `
            <p><label for="artists"><b>Artists</b></label>
                <input type="text" placeholder="Yoasobi" name="artists" class="artists"></p>

            <p><label for="nbTracks"><b>Number of tracks</b></label>
                <input type="text" placeholder="1" name="nbTracks" class="nbTracks"></p>   
        `;

        document.querySelector(".specific1").innerHTML = html;
    }
    else if (option === "movie")
    {
        let html = `
            <p><label for="director"><b>Director</b></label>
                <input type="text" placeholder="Michael" name="director" class="director"></p>

            <p><label for="actors"><b>Actors</b></label>
                <input type="text" placeholder="Jackie Chan" name="actors" class="actors"></p>    
            
            <p><label for="duration"><b>Duration</b></label>
                <input type="text" placeholder="1h 30m" name="duration" class="duration"></p>    
            
            <p><label for="movie-plot"><b>Plot</b></label>
                <input type="text" placeholder="After meeting with..." name="movie-plot" class="movie-plot"></p>    
        `;

        document.querySelector(".specific1").innerHTML = html;
    }
}

function displaySpecific2()
{
    let selectedType = document.querySelector("#selected-type2");
    let option = selectedType.options[selectedType.selectedIndex].value;

    if (option === "game")
    {
        let html = `
            <p><label for="studio"><b>Studio</b></label>
                <input type="text" placeholder="Studio" name="studio" class="studio"></p>

            <p><label for="nbPlayers"><b>Number of players</b></label>
                <input type="text" placeholder="100" name="nbPlayers" class="nbPlayers"></p>    
            
            <p><label for="game-plot"><b>Plot</b></label>
                <input type="text" placeholder="A princess is trapped..." name="game-plot" class="game-plot"></p>    
        `;

        document.querySelector(".specific2").innerHTML = html;
    }
    else if (option === "album")
    {
        let html = `
            <p><label for="artists"><b>Artists</b></label>
                <input type="text" placeholder="Yoasobi" name="artists" class="artists"></p>

            <p><label for="nbTracks"><b>Number of tracks</b></label>
                <input type="text" placeholder="1" name="nbTracks" class="nbTracks"></p>   
        `;

        document.querySelector(".specific2").innerHTML = html;
    }
    else if (option === "movie")
    {
        let html = `
            <p><label for="director"><b>Director</b></label>
                <input type="text" placeholder="Michael" name="director" class="director"></p>

            <p><label for="actors"><b>Actors</b></label>
                <input type="text" placeholder="Jackie Chan" name="actors" class="actors"></p>    
            
            <p><label for="duration"><b>Duration</b></label>
                <input type="text" placeholder="1h 30m" name="duration" class="duration"></p>    
            
            <p><label for="movie-plot"><b>Plot</b></label>
                <input type="text" placeholder="After meeting with..." name="movie-plot" class="movie-plot"></p>    
        `;

        document.querySelector(".specific2").innerHTML = html;
    }
}

function displayEditType(media)
{
    if (media == 'game')
    {
        document.querySelector("#edit-type").innerHTML = 'Game';
    }
    else if(media == 'album')
    {
        document.querySelector("#edit-type").innerHTML = 'Album';
    }
    else if(media == 'movie')
    {
        document.querySelector("#edit-type").innerHTML = 'Movie';
    }
}

function save()
{
    localStorage.removeItem('medias');
    localStorage.setItem('medias', JSON.stringify(medias));
}

function filterAll()
{
    return medias.filter(media => {
        return (media instanceof Media);
    });
}

function filterAllByAlbums()
{
    return medias.filter(media => {
        return (media instanceof Album);
    });
}

function filterAllByGames()
{
    return medias.filter(media => {
        return (media instanceof Game);
    });
}

function filterAllByMovies()
{
    return medias.filter(media => {
        return (media instanceof Movie);
    });
}

function filterAllByCollections(search)
{
    return medias.filter(media => {
        return (media.title.indexOf(search) !== -1) || (media.releaseDate.indexOf(search) !== -1);
    });
}

function resetForm()
{
    document.querySelectorAll(".btn-cancel").forEach(cancel => {

        cancel.onclick = () => {
            document.querySelectorAll(".title").forEach(title => {
                title.value = '';
             });
             document.querySelectorAll(".date").forEach(date => {
                 date.value = '';
              });
            document.querySelectorAll(".rating").forEach(rating => {
                rating.value = '';
            });

            document.querySelectorAll(".image-url").forEach(images => {
                images.value = '';
            });

            document.querySelectorAll(".studio").forEach(studio => {
                studio.value = '';
            });
            
            document.querySelectorAll(".nbPlayers").forEach(nbPlayers => {
                nbPlayers.value = '';
            });
            
            document.querySelectorAll(".game-plot").forEach(plot => {
                plot.value = '';
            });

            document.querySelectorAll(".artists").forEach(artists => {
                artists.value = '';
            });
             
            document.querySelectorAll(".nbTracks").forEach(nbTracks => {
                nbTracks.value = '';
            });

            document.querySelectorAll(".director").forEach(director => {
                director.value = '';
            });
            
            document.querySelectorAll(".actors").forEach(actors => {
                actors.value = '';
            });
            
            document.querySelectorAll(".duration").forEach(duration => {
                duration.value = '';
            });

            document.querySelectorAll(".movie-plot").forEach(plot => {
                plot.value = '';
            });
        }

    });
}

function main()
{
    document.querySelector("#selected-type2").addEventListener("change", displaySpecific2);
    document.querySelector('#search').addEventListener('keyup', (event)=>{
        createMediaList(filterAllByCollections(event.target.value));
        removeMedia();
    });

    createMediaList(medias);
    removeMedia();

    document.querySelector(".btn-add").addEventListener("click", ()=> {

        let title =  document.querySelector(".title").value;
        let releaseDate = document.querySelector(".date").value;
        let rating = document.querySelector(".rating").value;
        let image = document.querySelector(".image-url").value;
        let selectedType = document.querySelector("#selected-type2");
        let option = selectedType.options[selectedType.selectedIndex].value;

        if (option === "game")
        {
            let studio = document.querySelector(".studio").value;
            let nbPlayers = document.querySelector(".nbPlayers").value;
            let plot = document.querySelector(".game-plot").value;
            let game = new Game(title, releaseDate, rating, image, studio, nbPlayers, plot);

            addMedia(game);

            let add = document.querySelector("#form-add");
            add.style.display = "none";
        
        }
        else if (option === "album")
        {
            let artists = document.querySelector(".artists").value;
            let nbTracks = document.querySelector(".nbTracks").value;
            let album = new Album(title, releaseDate, rating, image, artists, nbTracks);
            
            addMedia(album);

            let add = document.querySelector("#form-add");
            add.style.display = "none";


        }
        else if (option === "movie")
        {
            let director = document.querySelector(".director").value;
            let actors = document.querySelector(".actors").value;
            let duration = document.querySelector(".duration").value;
            let plot = document.querySelector(".movie-plot").value;
            let movie = new Movie(title, releaseDate, rating, image, director, actors, duration, plot);

            addMedia(movie);
            
            let add = document.querySelector("#form-add");
            add.style.display = "none";
        }
    });
}

export default {
    medias: medias,
    main: main,
    createMediaList: createMediaList,
    removeMedia: removeMedia,
    filterAll: filterAll,
    filterAllByAlbums: filterAllByAlbums,
    filterAllByGames: filterAllByGames,
    filterAllByMovies: filterAllByMovies,
    filterAllByCollections: filterAllByCollections,
    displayEditType: displayEditType,
    resetForm: resetForm,
}

