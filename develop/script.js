let homeBtn = document.querySelector(`#homeBtn`);
let searchForm = document.querySelector(`#searchForm`);
let searchText = document.querySelector(`#searchText`);
let submitBtn = document.querySelector(`#submitBtn`);
let weatherCard = document.querySelector(`#weatherCard`);
let errorMessage = document.querySelector(`#error`);

searchForm.addEventListener('submit', e => {
    // If text input is empty, no event takes place
    e.preventDefault();

    // If 
    if (searchText.value === null) {
        // Define content for error message
        errorMessage.innerHTML = `Please enter a valid search`;

        // End function
        return;
    } else {
        // Fetch will grab url
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchText.value}&appid=19646f0f6fda25aa9456a943e1eda27b`)
        // .then promise will return raw json response
        .then(function(response) {
            return response.json();
        })
        // .then go to data
        .then(function (data) {
            // Function checking to make sure city is within United States
            checkLocation(data);
            function checkLocation(list) {
                // Gets country code from API
                let country = list.city.country;

                // Checks country code to work for US cities only
                if (country === 'US') {
                    // Hides error section if previously shown
                    errorMessage.style.display = 'none';
                    console.log(country);
                } else {
                    // Shows error message if search is outside of United States
                    errorMessage.style.display = 'flex';
                    errorMessage.innerHTML = 'Please enter a valid search. City must be within United States.';
                }
            };
            // Loop through data for manipulation

            // Define current temperature, feels like, temp low, temp high, cloudiness (description), wind speed, visibility; as well as future forecast
            //let currentTemp = ;
            // let currentFeelLike = ;
            // let currentCloudiness = ;
            // let currentLow = ;
            // let currentHigh = ;
            // let currentHumidity = ;
            // let currentWindSpeed = ;
            // let currentVisibility = ;
            // let lastUpdate (meta.lastUpdate);
            
            // Define forecasted items one day out
            // let oneTemp = ;
            // let oneFeelLike = ;
            // let oneCloudiness = ;
            // let oneLow = ;
            // let oneHigh = ;
            // let oneHumidity = ;
            // let oneWindSpeed = ;
            // let oneVisibility = ;
            // let sunRise = sun.rise;
            // let sunSet = sun.set;

            // Define forecasted items two days out
            // let twoTemp = ;
            // let twoFeelLike = ;
            // let twoCloudiness = ;
            // let twoLow = ;
            // let twoHigh = ;
            // let twoHumidity = ;
            // let twoWindSpeed = ;
            // let twoVisibility = ;
            // let sunRise = sun.rise;
            // let sunSet = sun.set;

            // Define forecasted items three days out
            // let threeTemp = ;
            // let threeFeelLike = ;
            // let threeCloudiness = ;
            // let threeLow = ;
            // let threeHigh = ;
            // let threeHumidity = ;
            // let threeWindSpeed = ;
            // let threeVisibility = ;
            // let sunRise = sun.rise;
            // let sunSet = sun.set;

            // Define forecasted items four days out
            // let fourTemp = ;
            // let fourFeelLike = ;
            // let fourCloudiness = ;
            // let fourLow = ;
            // let fourHigh = ;
            // let fourHumidity = ;
            // let fourWindSpeed = ;
            // let fourVisibility = ;
            // let sunRise = sun.rise;
            // let sunSet = sun.set;

            // Define forecasted items five days out
            // let fiveTemp = ;
            // let fiveFeelLike = ;
            // let fiveCloudiness = ;
            // let fiveLow = ;
            // let fiveHigh = ;
            // let fiveHumidity = ;
            // let fiveWindSpeed = ;
            // let fiveVisibility = ;
            // let sunRise = sun.rise;
            // let sunSet = sun.set;

            // Set all text and append to HTML

        })
    };
});