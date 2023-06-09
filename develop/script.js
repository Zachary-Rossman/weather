let homeBtn = document.querySelector(`#homeBtn`);
let searchForm = document.querySelector(`#searchForm`);
let searchText = document.querySelector(`#searchText`);
let submitBtn = document.querySelector(`#submitBtn`);
let weatherCard = document.querySelector(`#weatherCard`);
let errorMessage = document.querySelector(`#error`);

// empty string for searchText
let searchTextContent = "";

// url for api
// let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText.value}&appid=19646f0f6fda25aa9456a943e1eda27b`;

searchForm.addEventListener('submit', e => {
    e.preventDefault();

    if (searchText.value === null) {
        errorMessage.innerHTML = `Please enter valid search`;
    } else {
        // Fetch will grab a pre defined url
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchText.value}&appid=19646f0f6fda25aa9456a943e1eda27b`)
        // .then promise will return raw json response
        .then(function(response) {
            return response.json();
        })
        // .then go to data
        .then(function (data) {
            console.log(data);
            // Loop through data for manipulation
        });
    }
})