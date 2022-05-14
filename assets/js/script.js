// api keys / variables
var apikey1 = "7eb3dee3c7mshca977b3e70ebd78p1899f9jsnf27498159e6b";
var apikey2 = "ec338911d7mshf8557b4cdd01735p1f25fejsn2a239a957b84";
var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#input-search");

// <--------------- IMDB-Scraper is broken -------------->

// var top250Movies = function () {
//   fetch("https://imdb-scraper.p.rapidapi.com/top250", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
//       "x-rapidapi-key": apikey1,
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         response.json().then(function (data) {
//           createTop250(data);
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

// var top250Shows = function () {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'imdb-scraper.p.rapidapi.com',
//       'X-RapidAPI-Key': apikey
//     }
//   };

//   fetch('https://imdb-scraper.p.rapidapi.com/toptv250', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };

// var movieQuery = function () {
//   fetch("https://imdb-scraper.p.rapidapi.com/title/" + imdbID, {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
//       "x-rapidapi-key": apikey1,
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         response.json().then(function (data) {
//           replaceText(data);
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

// <--------------- Ott Details API ---------------->

// var ottMediaSearch = function () {
//   fetch('https://ott-details.p.rapidapi.com/search?title=' + titleQuery + '&page=1', {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
//       "x-rapidapi-key": apikey2,
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         response.json().then(function (data) {
//           // placeholder(data);
//           replaceMedia(data);
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

/* ---------------------- UTILITIES SECTION ---------------------- */

// Search Section

var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var searchMovie = searchInput.value.trim();

  // clear search input and old data
  $("#input-search").val("");
  window.localStorage.removeItem("searchFilm")

  // set localStorage for searchresults html page
  window.localStorage.setItem("searchFilm", JSON.stringify(searchMovie));
  window.location.assign('./assets/html/searchresults.html')
}

// Event Listener Section
window.addEventListener('DOMContentLoaded', function () {
  searchForm.addEventListener("submit", formSubmitHandler);
});

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