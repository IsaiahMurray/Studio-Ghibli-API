
const films = document.getElementById('films');
const listItem = document.createElement('li'); 
const baseUrl = 'https://ghibliapi.herokuapp.com/';


(async function(){
    const movies = await fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json());
        
    movies.forEach(movie => {
      console.log(movie);

     let divOne = document.createElement('div');
     divOne.classList.add("card");
     divOne.classList.add("col-sm-6");

     let divTwo = document.createElement('div');
     divTwo.classList.add("card-header");

     let h2 = document.createElement('h4');
     h2.innerHTML = movie.title;

     divTwo.appendChild(h2);
     divOne.appendChild(divTwo);

     let divThree = document.createElement('div');
     divThree.classList.add("card-body");

     let p = document.createElement('p');
     p.innerHTML = movie.description;

     divThree.appendChild(p);
     divOne.appendChild(divThree);

     films.appendChild(divOne);
    });
  })();

  /*
  Make cards
  -create a div
  -give it the class of "card col-md"

  -create another div
  -give it the class "card-header"
  -create an h2 tag
  -set the h2 tag to the movie title
  -append the h2 tag to the card-header div
  -append the card-header div to the card

  -create another div
  -give it the class "card-body"
  -create a p tag
  -set the p tag innerHTML to the movie description
  -append the p tag to the card-body
  -append the card-body to the card



  */