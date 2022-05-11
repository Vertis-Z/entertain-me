// ott details api key
var apikey = "7eb3dee3c7mshca977b3e70ebd78p1899f9jsnf27498159e6b";
var searchForm2 = document.querySelector("#search-form2");
var searchInput = document.querySelector("#input-search");

var top250Movies = function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'imdb-scraper.p.rapidapi.com',
            'X-RapidAPI-Key': apikey,
        }
    };
    
    fetch('https://imdb-scraper.p.rapidapi.com/top250', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

var top250Shows = function(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'imdb-scraper.p.rapidapi.com',
      'X-RapidAPI-Key': apikey
    }
  };
  
  fetch('https://imdb-scraper.p.rapidapi.com/toptv250', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

var mediaSearch = function(mediaquery){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
      'X-RapidAPI-Key': apikey
    }
  };
  
  fetch('https://ott-details.p.rapidapi.com/search?title=' + mediaquery + '&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

// return to top button logic
mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// test code

// creates card
var createTop250 = function(data){
  let media250 = data.results[2].movies;

  for (let i=0; i < media250.length-2; i++) {
    // get variables
    // let mediaName = data.results[i].movies.Title;
    // let mediaImage = data.results[i].imageurl;
    // let mediaID = data.results[i].movies.movieId;
    // let mediaType = data.results[i].type;
    // let mediaRating = data.results[i].movies.Rating;
    // let mediaSynopsis = data.results[i].synopsis

    let mediaName = media250[i].Title;
    let mediaImage = data.results[i].imageurl;
    let mediaID = media250[i].movieId;
    let mediaType = data.results[i].type;
    let mediaRating = media250[i].Rating;
    let mediaSynopsis = data.results[i].synopsis

    // create card for eatch [i]
    var outer_container = document.createElement("<div>").addClass("column is-4");
    document.body.appendChild(outer_container);
    var cardsize6 = document.createElement("<div>").addClass("card size-6");
    outer_container.appendChild(cardsize6);
    var cardImage = document.createElement("<div>").addClass("card-image");
    cardsize6.appendChild(cardImage);
    var imageis2by3 = document.createElement("<figure>").addClass("image is-2by3");
    cardImage.appendChild(imageis2by3);
    // Media art
    var mediaArt = document.createElement("<img>").attr("src", mediaImage);
    imageis2by3.appendChild(mediaArt);
    var textcenter = document.createElement("<div>").addClass("card-content has-text-centered");
    cardsize6.appendChild(textcenter);
    var mediaDiv = document.createElement("<div>").addClass("media");
    textcenter.appendChild(mediaDiv);
    var mediaContent = document.createElement("<div>").addClass("media-content");
    mediaDiv.appendChild(mediaContent);
    // Media Title
    var mediaTitle = document.createElement("<p>").addClass("title is-4").text(mediaName);
    mediaContent.appendChild(mediaTitle);
    // Synopsis text
    var synopisText = document.createElement("<div>").addClass("content").text(mediaSynopsis);
    textcenter.appendChild(synopisText);
    var cardFooter = document.createElement("<footer>").addClass("card-footer");
    textcenter.appendChild(cardFooter);
    // IMDB rating
    var rating = document.createElement("<p>").addClass("card-footer-item").text(mediaRating);
    cardFooter.appendChild(rating);
    // create add to favorites
    var addFavorite = document.createElement("<a>").attr("href", "#").addClass("card-footer-item");
    cardFooter.appendChild(addFavorite);
  }
}


// <--------------- Scroll to top button ------------------>

//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

top250Movies();
top250Shows();
mediaSearch();