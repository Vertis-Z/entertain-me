// ott details api key
var apikey = "7eb3dee3c7mshca977b3e70ebd78p1899f9jsnf27498159e6b"

var movietest = function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
            'X-RapidAPI-Key': apikey,
        }
    };
    fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
};

var top250 = function(){
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