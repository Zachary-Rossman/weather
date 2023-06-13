let searchForm = document.querySelector(`#searchForm`);
let searchText = document.querySelector(`#searchText`);
let submitBtn = document.querySelector(`#submitBtn`);
let weatherCard = document.querySelector(`#weatherCards`);
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
                // All data needed from api defined
                let cityName = list.city.name;

                // Dates; also marks index in list array where each day begins
                let date01 = list.list[0].dt_txt;
                let date02 = list.list[8].dt_txt;
                let date03 = list.list[16].dt_txt;
                let date04 = list.list[24].dt_txt;
                let date05 = list.list[32].dt_txt;

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

                // Display name of city searched
                let cityNameDom = document.querySelector(`#cityName`);
                cityNameDom.textContent = `5-day forecast for ${cityName}`;

                // Display date on top of each weather card
                let dateDom01 = document.querySelector(`#date01`);
                dateDom01.textContent = date01;

                // Display cloudiness icon in card by day; ICON NOT SHOWING
                // let cloudinessIconDom01 = document.querySelector(`#cloudinessIcon01`);
                // cloudinessIconDom01.innerHTML = `${cloudinessIcon01[0]}`

                // Display high temp for each day
                let highTempDom01 = document.querySelector(`#tempHigh01`);
                highTempDom01.textContent = "High Temperature: " + parseInt(Math.max(...highTemp01));

                // Display low temp for each day
                let lowTempDom01 = document.querySelector(`#tempLow01`);
                lowTempDom01.textContent = "Low Temperature: " + parseInt(Math.min(...lowTemp01));

                // Display cloudiness for each day
                let cloudinessDom01 = document.querySelector(`#cloudiness01`);

                // Loop through cloudiness each day to display most frequent item in that array
                for(let i in cloudiness01) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness01[i]] = (frequency[cloudiness01[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness01[i]] > max) {
                        // update max
                        max = frequency[cloudiness01[i]];
                        // update result
                        result = cloudiness01[i];
                        // Show result in element
                        cloudinessDom01.textContent = result;
                    };
            };

                // Display wind speed by day
                let windSpeedDom01 = document.querySelector(`#windSpeed01`);

                // Display wind gust by day
                let windGustDom01 = document.querySelector(`#windGust01`);

                // Display humidity by day
                let humidityDom01 = document.querySelector(`#humidity01`);

                // Display visibility by day
                let visibilityDom01 = document.querySelector(`#visibility01`);

                // End of fetch
            };
        })
    };
});