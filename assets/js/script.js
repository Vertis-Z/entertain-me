// ott details api key
var apikey1 = "7eb3dee3c7mshca977b3e70ebd78p1899f9jsnf27498159e6b";
var apikey2 = "ec338911d7mshf8557b4cdd01735p1f25fejsn2a239a957b84";
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#input-search");
// var cardContainer = document.getElementById('card-section')

// <-------------------IMDB-SCRAPPER API---------------------->

var top250Movies = function () {
  fetch("https://imdb-scraper.p.rapidapi.com/top250", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
      "x-rapidapi-key": apikey1,
    }
  })
    .then(response => {
      if (response.ok) {
        response.json().then(function (data) {
          createTop250(data);
        })
      } else {
        $(".modal-append").empty();
        $(".modal-append").append("Error: " + response.statusText)
        let popup = new Foundation.Reveal($("#modal"));
        popup.open();
      }
    })
    .catch(err => {
      $(".modal-append").empty();
      $(".modal-append").append("Catch Error: Check console log")
      let popup = new Foundation.Reveal($("#modal"));
      popup.open();
      console.error(err);
    });
};

// var top250Movies = function () {
//   fetch("https://imdb-scraper.p.rapidapi.com/toptv250", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
//       "x-rapidapi-key": apikey1,
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         response.json().then(function (data) {
//           placeholder(data);
//         })
//       } else {
//         $(".modal-append").empty();
//         $(".modal-append").append("Error: " + response.statusText)
//         let popup = new Foundation.Reveal($("#modal"));
//         popup.open();
//       }
//     })
//     .catch(err => {
//       $(".modal-append").empty();
//       $(".modal-append").append("Catch Error: Check console log")
//       let popup = new Foundation.Reveal($("#modal"));
//       popup.open();
//       console.error(err);
//     });
// };

// <---------------------OTT DETAILS API----------------------->

var ottMediaSearch = function () {
  fetch('https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=' + titleQuery, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
      "x-rapidapi-key": apikey2,
    }
  })
    .then(response => {
      if (response.ok) {
        response.json().then(function (data) {
          placeholder(data);
        })
      } else {
        $(".modal-append").empty();
        $(".modal-append").append("Error: " + response.statusText)
        let popup = new Foundation.Reveal($("#modal"));
        popup.open();
      }
    })
    .catch(err => {
      $(".modal-append").empty();
      $(".modal-append").append("Catch Error: Check console log")
      let popup = new Foundation.Reveal($("#modal"));
      popup.open();
      console.error(err);
    });
};

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

// test code

// creates card
var createTop250 = function (data) {
  let media250 = data.movies[0];

  for (let i = 0; i < media250.length(Math.max(10)); i++) {
    // get variables
    let mediaName = media250[i].Title;
    let mediaID = media250[i].movieId;
    let mediaRating = media250[i].Rating;
    let mediaImage = data.results[i].imageurl;
    let mediaType = data.results[i].type;
    let mediaSynopsis = data.results[i].synopsis
    let whereWatch = data.results[i].value

    // create card for eatch [i]
    //let container_section = $("<div>").addClass("container is-fluid cardContainer");
    let card_section = $("<div>").addClass("columns is-multiline card-section");
    let outer_container = $("<div>").addClass("column is-4");
    let cardsize6 = $("<div>").addClass("card size-6");
    let cardImage = $("<div>").addClass("card-image");
    let imageis2by3 = $("<figure>").addClass("image is-2by3");
    let mediaArt = $("<img>").attr("src", mediaImage);
    let textcenter = $("<div>").addClass("card-content has-text-centered");
    let mediaDiv = $("<div>").addClass("media");
    let mediaContent = $("<div>").addClass("media-content");
    let mediaTitle = $("<p>").addClass("title is-4").text(mediaName);
    let synopisText = $("<div>").addClass("content").text(mediaSynopsis);
    let cardFooter = $("<footer>").addClass("card-footer");
    let rating = $("<p>").addClass("card-footer-item").text(mediaRating);
    let addFavorite = $("<a>").attr("href", "#").addClass("card-footer-item");
    let watchNow = $("div").addClass("watchNow").attr("type","text");
    // append cards
    $(".columnsContainer").append(card_section);
    //container_section.append(card_section);
    card_section.append(outer_container);
    outer_container.append(cardsize6);
    cardsize6.append(cardImage, textcenter);
    cardImage.append(imageis2by3);
    imageis2by3.append(mediaArt);
    textcenter.append(mediaDiv, synopisText, cardFooter, watchNow);
    mediaDiv.append(mediaContent);
    mediaContent.append(mediaTitle);
    cardFooter.append(rating,addFavorite);
  }
};

// Search Section
var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var searchMovie = searchInput.value.trim();
}

// Event Listener Section
window.addEventListener('DOMContentLoaded', function() {
  searchForm.addEventListener("submit", formSubmitHandler);
});
ottMediaSearch();
top250Movies();
createTop250();
// top250Shows();
// mediaSearch();