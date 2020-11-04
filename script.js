const films = document.getElementById("films");
const listItem = document.createElement("li");
const baseUrl = "https://ghibliapi.herokuapp.com/films";

ghibliFetch = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      displayMovies(data);
    });
};
ghibliFetch();

displayMovies = (movies) => {
  for(let i = 0; i <= movies.length; i++){
    let id = movies[i].id
    let parentDiv = document.createElement("div");
    let childDiv = document.createElement("div");
    parentDiv.appendChild(childDiv);
    films.appendChild(parentDiv);
    childDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body" style="height: 14rem;">
      <h5 class="card-title">${movies[i].title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Director: ${movies[i].director}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Producer: ${movies[i].producer}</h6>
      <p class="card-text">${movies[i].release_date}</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#${id}">
  Description
</button>
    </div>
  </div>
  <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${movies[i].title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      ${movies[i].description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  `;
  };
};