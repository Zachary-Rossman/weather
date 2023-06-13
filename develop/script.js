let homeBtn = document.querySelector(`#homeBtn`);
let searchForm = document.querySelector(`#searchForm`);
let searchText = document.querySelector(`#searchText`);
let submitBtn = document.querySelector(`#submitBtn`);
let weatherCard = document.querySelector(`#weatherCard`);
let errorMessage = document.querySelector(`#error`);

searchForm.addEventListener('submit', e => {
    // If text input is empty, no event takes place
    e.preventDefault();

    // If statement to narrow search
    if (searchText.value === null) {
        // Define content for error message
        errorMessage.innerHTML = `Please enter a valid search`;

        // End function
        return;

        // If there city has a US country code, function will continue
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
            generateWeather(data);
            function generateWeather(list) {
                // Defined variables with different pieces of data from api
                let country = list.city.country;

                // Checks country code to work for US cities only
                if (country === 'US') {
                    // Hides error section if previously shown
                    errorMessage.style.display = 'none';
                } else {
                    // Shows error message if search is outside of United States
                    errorMessage.style.display = 'flex';
                    errorMessage.innerHTML = 'Please enter a valid search. City must be within United States.';
                    return;
                };
                // Bound data from api to variables
                // KEEP IN MIND!!! THERE ARE 8 TIME STAMPS PER DAY
                // Create empty arrays and push values as needed to empty arrays for each day of forecast to be able to find highs, lows, and averages
                let cityName = list.city.name;

                // Returns text of cloudiness statuses per day
                let cloudiness01 = [
                    list.list[0].weather[0].description, 
                    list.list[1].weather[0].description, 
                    list.list[2].weather[0].description, 
                    list.list[3].weather[0].description, 
                    list.list[4].weather[0].description, 
                    list.list[5].weather[0].description, 
                    list.list[6].weather[0].description, 
                    list.list[7].weather[0].description
                ];

                // Cloudiness icons per day
                let cloudinessIcon01 = [
                    list.list[0].weather[0].icon,
                    list.list[1].weather[0].icon,
                    list.list[2].weather[0].icon,
                    list.list[3].weather[0].icon,
                    list.list[4].weather[0].icon,
                    list.list[5].weather[0].icon,
                    list.list[6].weather[0].icon,
                    list.list[7].weather[0].icon
                ];

                // Arrays of temps per day and find highest and lowest to display high/low temps per day
                let temp01 = [
                    list.list[0].main.temp,
                    list.list[1].main.temp,
                    list.list[2].main.temp,
                    list.list[3].main.temp,
                    list.list[4].main.temp,
                    list.list[5].main.temp,
                    list.list[6].main.temp,
                    list.list[7].main.temp
                ];

                let lowTemp01 = [
                    list.list[0].main.temp_min,
                    list.list[1].main.temp_min,
                    list.list[2].main.temp_min,
                    list.list[3].main.temp_min,
                    list.list[4].main.temp_min,
                    list.list[5].main.temp_min,
                    list.list[6].main.temp_min,
                    list.list[7].main.temp_min
                ];

                let highTemp01 = [
                    list.list[0].main.temp_max,
                    list.list[1].main.temp_max,
                    list.list[2].main.temp_max,
                    list.list[3].main.temp_max,
                    list.list[4].main.temp_max,
                    list.list[5].main.temp_max,
                    list.list[6].main.temp_max,
                    list.list[7].main.temp_max
                ];

                // Humidity by day and time stamp
                let humidity01 = [
                    list.list[0].main.humidity,
                    list.list[1].main.humidity,
                    list.list[2].main.humidity,
                    list.list[3].main.humidity,
                    list.list[4].main.humidity,
                    list.list[5].main.humidity,
                    list.list[6].main.humidity,
                    list.list[7].main.humidity,
                ];

                // Wind speed by day
                let windSpeed01 = [
                    list.list[0].wind.speed,
                    list.list[1].wind.speed,
                    list.list[2].wind.speed,
                    list.list[3].wind.speed,
                    list.list[4].wind.speed,
                    list.list[5].wind.speed,
                    list.list[6].wind.speed,
                    list.list[7].wind.speed,
                ];

                // Wind gust by day
                let windGust01 = [
                    list.list[0].wind.gust,
                    list.list[1].wind.gust,
                    list.list[2].wind.gust,
                    list.list[3].wind.gust,
                    list.list[4].wind.gust,
                    list.list[5].wind.gust,
                    list.list[6].wind.gust,
                    list.list[7].wind.gust,
                ];

                // Visibility
                let visibility01 = [
                    list.list[0].visibility,
                    list.list[1].visibility,
                    list.list[2].visibility,
                    list.list[3].visibility,
                    list.list[4].visibility,
                    list.list[5].visibility,
                    list.list[6].visibility,
                    list.list[7].visibility,
                ];
                // End of promise
            };

            // NEED DIFFERENT API CALL FOR CURRENT WEATHER!!!
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