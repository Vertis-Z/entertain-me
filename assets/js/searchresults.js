var apikey1 = "7eb3dee3c7mshca977b3e70ebd78p1899f9jsnf27498159e6b";
var apikey2 = "ec338911d7mshf8557b4cdd01735p1f25fejsn2a239a957b84";
var searchForm2 = document.querySelector("#search-form2");
var searchInput2 = document.querySelector("#input-search2");


var ottMediaSearch = function (searchValue) {
    fetch('https://ott-details.p.rapidapi.com/search?title=' + searchValue + '&page=1', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb-scraper.p.rapidapi.com",
            "x-rapidapi-key": apikey2,
        }
    })
        .then(response => {
            if (response.ok) {
                response.json().then(function (data) {
                    createResults(data);
                })
            } else {
                $(".modal-append").empty();
                $(".modal-append").append("Error: " + response.statusText)
            }
        })
        .catch(err => {
            console.log(err);
        });
};

var imdbRating = function (searchValue) {
    fetch('https://imdb-api.com/en/API/SearchTitle/k_1emmw9sw/' + searchValue, {
        "method": "GET"
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else { text("Movie Not Found") }
        }).then (data => {
            fetch('https://imdb-api.com/en/API/Ratings/k_1emmw9sw/' + data.results[0].id, {
                "method": "GET"
            })
                .then(response => {
                    if (response.ok) {
                        response.json().then(function (data) {
                            console.log(data)
                        })
                    } else {
                        $(".modal-append").empty();
                        $(".modal-append").append("Error: " + response.statusText)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
}

var createResults = function (data) {
    // empty previous data
    $("#card-section").empty();

    for (let i = 0; i < data.results.length; i++) {
        // get variables
        let movieName = data.results[i].title;
        let movieImg = data.results[i].imageurl[0];
        let movieSynopsis = data.results[i].synopsis;
        let mediaRating = data.results[i].imDb

        // create card for eatch [i]
        let outer_container = $("<div>").addClass("column is-4");
        let cardsize6 = $("<div>").addClass("card");
        let cardImage = $("<div>").addClass("card-image");
        let imageis2by3 = $("<figure>").addClass("image is-2by3");
        // catch if no image is found
        let mediaArt;
        if (data.results[i].imageurl[0] = null) {
            mediaArt = $("<img>").attr("src", "../images/image-not-available.png");
        } else {
            mediaArt = $("<img>").attr("src", movieImg);
        };
        let textcenter = $("<div>").addClass("card-content has-text-centered");
        let mediaDiv = $("<div>").addClass("media");
        let mediaContent = $("<div>").addClass("media-content");
        let mediaTitle = $("<p>").addClass("title is-4").text(movieName);
        // catch if no synopsis is found
        let synopsisText
        if (data.results[i].synopsis = null) {
            synopsisText = $("<div>").addClass("content").text("Synopsis Not Found.");
        } else {
            synopsisText = $("<div>").addClass("content").text(movieSynopsis);
        };
        let cardFooter = $("<footer>").addClass("card-footer");
        let rating = $("<p>").addClass("card-footer-item").text(mediaRating);
        // let addFavorite = $("<a>").attr("href", "#").addClass("card-footer-item");

        // append cards
        $(".card-section").append(outer_container);
        outer_container.append(cardsize6);
        cardsize6.append(cardImage, textcenter);
        cardImage.append(imageis2by3);
        imageis2by3.append(mediaArt);
        textcenter.append(mediaDiv, synopsisText, cardFooter, watchNow);
        mediaDiv.append(mediaContent);
        mediaContent.append(mediaTitle);
        cardFooter.append(rating, addFavorite);
    };
}


/* ---------------------- UTILITIES SECTION ---------------------- */

var formSubmitHandler = function (event) {
    event.preventDefault();

    // get value from input element
    var searchMovie = searchInput2.value.trim();

    // empty old data
    $("#input-search2").empty();
    $("#card-section").empty();

    // need to replace 'spaces' with %20 for fetch request to work
    let searchMovieReplaceSpace = searchMovie.split(" ").join("%20");
    // ottMediaSearch(searchMovieReplaceSpace);
    imdbRating(searchMovieReplaceSpace);

}

/* ---------------------- LOAD SECTION ---------------------- */


// Load Recent Film List Local Storage
var recentFilmStorage = JSON.parse(window.localStorage.getItem("FilmList")) || [];
// Limits list to 10 total items in the array. 
if (recentFilmStorage.length >= 10) {
    recentFilmStorage.splice(0, recentFilmStorage.length - 10)

}

for (let i = 0; i < recentFilmStorage.length; i++) {
    appendRow(recentFilmStorage[i].name, recentFilmStorage[i].id);
}

// Event Listener Section
searchForm2.addEventListener("submit", formSubmitHandler);

// Load Searched Film
var filmStorage = JSON.parse(window.localStorage.getItem("searchFilm")) || [];

// need to replace 'spaces' with %20 for fetch request to work
var filmStorageReplaceSpace = filmStorage.split(" ").join("%20");
// ottMediaSearch(filmStorageReplaceSpace);

/* ---------------------- Scroll to top button ---------------------- */

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