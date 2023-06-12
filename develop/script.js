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
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchText.value}&units=imperial&appid=19646f0f6fda25aa9456a943e1eda27b`)
        // .then promise will return raw json response
        .then(function(response) {
            return response.json();
        })
        // .then go to data
        .then(function (data) {
            // Function checking to make sure city is within United States
            checkLocation(data);
            function checkLocation(list) {
                // Defined variables with different pieces of data from api
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
                    return;
                };
                // Loop through data for manipulation
                
                // Bound data from api to variables
                // KEEP IN MIND!!! THERE ARE 8 TIME STAMPS PER DAY
                let cityName = list.city.name;
                console.log(list.list); // Accesses nested data
                // List.list[0] only pulls first timestamp for first day; Need to define all variables per day and find averages, highs, and lows
                console.log(list.list[0]); // Pulls first piece of array in list
                console.log(list.list[0].weather); // Gets cloudiness data
                console.log(list.list[0].weather[0].description); // Returns text of cloudiness status
                console.log(list.list[0].weather[0].icon); // Code for cloudiness icon
                console.log(list.list[0].main); // Pulls temp data
                // Create array of temps per day and find highest and lowest to display high/low temps per day
                console.log(list.list[0].main.temp); // Gets avg temp (Farenheit defined in api link)
                console.log(list.list[0].main.temp_min); // Gets low temp (Farenheit defined in api link)
                console.log(list.list[0].main.temp_max); // Gets high temp (Farenheit defined in api link)
                console.log(list.list[0].main.humidity); // Gets humidity (percentage)
                console.log(list.list[0].wind.speed); // Wind speed
                console.log(list.list[0].wind.gust); // Wind gust speed
                console.log(list.list[0].wind.deg); // Wind direction
                console.log(list.list[0].visibility) // Visibility
            };


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