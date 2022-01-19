import Collection from "./models/Collection.js"

let add = document.getElementById("form-add");
let addBtn = document.getElementById("btn-add");
let edit = document.getElementById("form-edit");

Collection.resetForm();

document.querySelectorAll(".close").forEach(cancelBtn => {
  cancelBtn.addEventListener('click', () => {
      edit.style.display = "none";
      add.style.display = "none";
  })
});

addBtn.onclick = function() 
{
  add.style.display = "block";
}

window.onclick = function(event) 
{
  if(event.target == add || event.target == edit ) 
  {
    add.style.display = "none";
    edit.style.display = "none";
  }
}

window.onload = Collection.main();

  
document.querySelector("#filter-all").addEventListener("click", ()=>{
    Collection.createMediaList(Collection.filterAll());
    Collection.removeMedia();
});

document.querySelector("#filter-albums").addEventListener("click", ()=>{
    Collection.createMediaList(Collection.filterAllByAlbums());
    Collection.displayEditType('album');
    Collection.removeMedia();
    let html = `
    <p><label for="artists"><b>Artists</b></label>
        <input type="text" placeholder="Yoasobi" name="artists" id="artists"></p>

    <p><label for="nbTracks"><b>Number of tracks</b></label>
        <input type="text" placeholder="1" name="nbTracks" id="nbTracks"></p>   
`;

    document.querySelector(".specific1").innerHTML = html;
});

document.querySelector("#filter-games").addEventListener("click", ()=>{
    Collection.createMediaList(Collection.filterAllByGames());
    Collection.displayEditType('game');
    Collection.removeMedia();
    let html = `
            <p><label for="studio"><b>Studio</b></label>
                <input type="text" placeholder="Studio" name="studio" id="studio"></p>

            <p><label for="nbPlayers"><b>Number of players</b></label>
                <input type="text" placeholder="100" name="nbPlayers" id="nbPlayers"></p>    
            
            <p><label for="game-plot"><b>Plot</b></label>
                <input type="text" placeholder="A princess is trapped..." name="game-plot" id="game-plot"></p>    
        `;

    document.querySelector(".specific1").innerHTML = html;
});

document.querySelector("#filter-movies").addEventListener("click", ()=>{
    Collection.createMediaList(Collection.filterAllByMovies());
    Collection.displayEditType('movie');
    Collection.removeMedia();
    let html = `
            <p><label for="director"><b>Director</b></label>
                <input type="text" placeholder="Michael" name="director" id="director"></p>

            <p><label for="actors"><b>Actors</b></label>
                <input type="text" placeholder="Jackie Chan" name="actors" id="actors"></p>    
            
            <p><label for="duration"><b>Duration</b></label>
                <input type="text" placeholder="1h 30m" name="duration" id="duration"></p>    
            
            <p><label for="movie-plot"><b>Plot</b></label>
                <input type="text" placeholder="After meeting with..." name="movie-plot" id="movie-plot"></p>    
        `;

    document.querySelector(".specific1").innerHTML = html;
});