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
                // limits string to 10 chars so time is cut out
                if(date01.length > 10) date01 = date01.substring(0,10);

                let date02 = list.list[8].dt_txt;
                // limits string to 10 chars so time is cut out
                if(date02.length > 10) date02 = date02.substring(0,10);

                let date03 = list.list[16].dt_txt;
                // limits string to 10 chars so time is cut out
                if(date03.length > 10) date03 = date03.substring(0,10);

                let date04 = list.list[24].dt_txt;
                // limits string to 10 chars so time is cut out
                if(date04.length > 10) date04 = date04.substring(0,10);

                let date05 = list.list[32].dt_txt;
                // limits string to 10 chars so time is cut out
                if(date05.length > 10) date05 = date05.substring(0,10);

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
                let cloudiness02 = [
                    list.list[8].weather[0].description, 
                    list.list[9].weather[0].description, 
                    list.list[10].weather[0].description, 
                    list.list[11].weather[0].description, 
                    list.list[12].weather[0].description, 
                    list.list[13].weather[0].description, 
                    list.list[14].weather[0].description, 
                    list.list[15].weather[0].description
                ];
                let cloudiness03 = [
                    list.list[16].weather[0].description, 
                    list.list[17].weather[0].description, 
                    list.list[18].weather[0].description, 
                    list.list[19].weather[0].description, 
                    list.list[20].weather[0].description, 
                    list.list[21].weather[0].description, 
                    list.list[22].weather[0].description, 
                    list.list[23].weather[0].description
                ];
                let cloudiness04 = [
                    list.list[24].weather[0].description, 
                    list.list[25].weather[0].description, 
                    list.list[26].weather[0].description, 
                    list.list[27].weather[0].description, 
                    list.list[28].weather[0].description, 
                    list.list[29].weather[0].description, 
                    list.list[30].weather[0].description, 
                    list.list[31].weather[0].description
                ];
                let cloudiness05 = [
                    list.list[32].weather[0].description, 
                    list.list[33].weather[0].description, 
                    list.list[34].weather[0].description, 
                    list.list[35].weather[0].description, 
                    list.list[36].weather[0].description, 
                    list.list[37].weather[0].description, 
                    list.list[38].weather[0].description, 
                    list.list[39].weather[0].description
                ];

                // // CLOUDINESS ICONS ONLY SHOWING CODE IN HTML; NOT DISPLAYING ICONS
                // // Cloudiness icons per day
                // let cloudinessIcon01 = [
                //     list.list[0].weather[0].icon,
                //     list.list[1].weather[0].icon,
                //     list.list[2].weather[0].icon,
                //     list.list[3].weather[0].icon,
                //     list.list[4].weather[0].icon,
                //     list.list[5].weather[0].icon,
                //     list.list[6].weather[0].icon,
                //     list.list[7].weather[0].icon
                // ];
                // let cloudinessIcon02 = [
                //     list.list[8].weather[0].icon,
                //     list.list[9].weather[0].icon,
                //     list.list[10].weather[0].icon,
                //     list.list[11].weather[0].icon,
                //     list.list[12].weather[0].icon,
                //     list.list[13].weather[0].icon,
                //     list.list[14].weather[0].icon,
                //     list.list[15].weather[0].icon
                // ];
                // let cloudinessIcon03 = [
                //     list.list[16].weather[0].icon,
                //     list.list[17].weather[0].icon,
                //     list.list[18].weather[0].icon,
                //     list.list[19].weather[0].icon,
                //     list.list[20].weather[0].icon,
                //     list.list[21].weather[0].icon,
                //     list.list[22].weather[0].icon,
                //     list.list[23].weather[0].icon
                // ];
                // let cloudinessIcon04 = [
                //     list.list[24].weather[0].icon,
                //     list.list[25].weather[0].icon,
                //     list.list[26].weather[0].icon,
                //     list.list[27].weather[0].icon,
                //     list.list[28].weather[0].icon,
                //     list.list[29].weather[0].icon,
                //     list.list[30].weather[0].icon,
                //     list.list[31].weather[0].icon
                // ];
                // let cloudinessIcon05 = [
                //     list.list[32].weather[0].icon,
                //     list.list[33].weather[0].icon,
                //     list.list[34].weather[0].icon,
                //     list.list[35].weather[0].icon,
                //     list.list[36].weather[0].icon,
                //     list.list[37].weather[0].icon,
                //     list.list[38].weather[0].icon,
                //     list.list[39].weather[0].icon
                // ];

                // Low Temperatures
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
                let lowTemp02 = [
                    list.list[8].main.temp_min,
                    list.list[9].main.temp_min,
                    list.list[10].main.temp_min,
                    list.list[11].main.temp_min,
                    list.list[12].main.temp_min,
                    list.list[13].main.temp_min,
                    list.list[14].main.temp_min,
                    list.list[15].main.temp_min
                ];
                let lowTemp03 = [
                    list.list[16].main.temp_min,
                    list.list[17].main.temp_min,
                    list.list[18].main.temp_min,
                    list.list[19].main.temp_min,
                    list.list[20].main.temp_min,
                    list.list[21].main.temp_min,
                    list.list[22].main.temp_min,
                    list.list[23].main.temp_min
                ];
                let lowTemp04 = [
                    list.list[24].main.temp_min,
                    list.list[25].main.temp_min,
                    list.list[26].main.temp_min,
                    list.list[27].main.temp_min,
                    list.list[28].main.temp_min,
                    list.list[29].main.temp_min,
                    list.list[30].main.temp_min,
                    list.list[31].main.temp_min
                ];
                let lowTemp05 = [
                    list.list[32].main.temp_min,
                    list.list[33].main.temp_min,
                    list.list[34].main.temp_min,
                    list.list[35].main.temp_min,
                    list.list[36].main.temp_min,
                    list.list[37].main.temp_min,
                    list.list[38].main.temp_min,
                    list.list[39].main.temp_min
                ];

                // High Temperatures
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
                let highTemp02 = [
                    list.list[8].main.temp_max,
                    list.list[9].main.temp_max,
                    list.list[10].main.temp_max,
                    list.list[11].main.temp_max,
                    list.list[12].main.temp_max,
                    list.list[13].main.temp_max,
                    list.list[14].main.temp_max,
                    list.list[15].main.temp_max
                ];
                let highTemp03 = [
                    list.list[16].main.temp_max,
                    list.list[17].main.temp_max,
                    list.list[18].main.temp_max,
                    list.list[19].main.temp_max,
                    list.list[20].main.temp_max,
                    list.list[21].main.temp_max,
                    list.list[22].main.temp_max,
                    list.list[23].main.temp_max
                ];
                let highTemp04 = [
                    list.list[24].main.temp_max,
                    list.list[25].main.temp_max,
                    list.list[26].main.temp_max,
                    list.list[27].main.temp_max,
                    list.list[28].main.temp_max,
                    list.list[29].main.temp_max,
                    list.list[30].main.temp_max,
                    list.list[31].main.temp_max
                ];
                let highTemp05 = [
                    list.list[32].main.temp_max,
                    list.list[33].main.temp_max,
                    list.list[34].main.temp_max,
                    list.list[35].main.temp_max,
                    list.list[36].main.temp_max,
                    list.list[37].main.temp_max,
                    list.list[38].main.temp_max,
                    list.list[39].main.temp_max
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
                let humidity02 = [
                    list.list[8].main.humidity,
                    list.list[9].main.humidity,
                    list.list[10].main.humidity,
                    list.list[11].main.humidity,
                    list.list[12].main.humidity,
                    list.list[13].main.humidity,
                    list.list[14].main.humidity,
                    list.list[15].main.humidity,
                ];
                let humidity03 = [
                    list.list[16].main.humidity,
                    list.list[17].main.humidity,
                    list.list[18].main.humidity,
                    list.list[19].main.humidity,
                    list.list[20].main.humidity,
                    list.list[21].main.humidity,
                    list.list[22].main.humidity,
                    list.list[23].main.humidity,
                ];
                let humidity04 = [
                    list.list[24].main.humidity,
                    list.list[25].main.humidity,
                    list.list[26].main.humidity,
                    list.list[27].main.humidity,
                    list.list[28].main.humidity,
                    list.list[29].main.humidity,
                    list.list[30].main.humidity,
                    list.list[31].main.humidity,
                ];
                let humidity05 = [
                    list.list[32].main.humidity,
                    list.list[33].main.humidity,
                    list.list[34].main.humidity,
                    list.list[35].main.humidity,
                    list.list[36].main.humidity,
                    list.list[37].main.humidity,
                    list.list[38].main.humidity,
                    list.list[39].main.humidity,
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
                let windSpeed02 = [
                    list.list[8].wind.speed,
                    list.list[9].wind.speed,
                    list.list[10].wind.speed,
                    list.list[11].wind.speed,
                    list.list[12].wind.speed,
                    list.list[13].wind.speed,
                    list.list[14].wind.speed,
                    list.list[15].wind.speed,
                ];
                let windSpeed03 = [
                    list.list[16].wind.speed,
                    list.list[17].wind.speed,
                    list.list[18].wind.speed,
                    list.list[19].wind.speed,
                    list.list[20].wind.speed,
                    list.list[21].wind.speed,
                    list.list[22].wind.speed,
                    list.list[23].wind.speed,
                ];
                let windSpeed04 = [
                    list.list[24].wind.speed,
                    list.list[25].wind.speed,
                    list.list[26].wind.speed,
                    list.list[27].wind.speed,
                    list.list[28].wind.speed,
                    list.list[29].wind.speed,
                    list.list[30].wind.speed,
                    list.list[31].wind.speed,
                ];
                let windSpeed05 = [
                    list.list[32].wind.speed,
                    list.list[33].wind.speed,
                    list.list[34].wind.speed,
                    list.list[35].wind.speed,
                    list.list[36].wind.speed,
                    list.list[37].wind.speed,
                    list.list[38].wind.speed,
                    list.list[39].wind.speed,
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
                let windGust02 = [
                    list.list[8].wind.gust,
                    list.list[9].wind.gust,
                    list.list[10].wind.gust,
                    list.list[11].wind.gust,
                    list.list[12].wind.gust,
                    list.list[13].wind.gust,
                    list.list[14].wind.gust,
                    list.list[15].wind.gust,
                ];
                let windGust03 = [
                    list.list[16].wind.gust,
                    list.list[17].wind.gust,
                    list.list[18].wind.gust,
                    list.list[19].wind.gust,
                    list.list[20].wind.gust,
                    list.list[21].wind.gust,
                    list.list[22].wind.gust,
                    list.list[23].wind.gust,
                ];
                let windGust04 = [
                    list.list[24].wind.gust,
                    list.list[25].wind.gust,
                    list.list[26].wind.gust,
                    list.list[27].wind.gust,
                    list.list[28].wind.gust,
                    list.list[29].wind.gust,
                    list.list[30].wind.gust,
                    list.list[31].wind.gust,
                ];
                let windGust05 = [
                    list.list[32].wind.gust,
                    list.list[33].wind.gust,
                    list.list[34].wind.gust,
                    list.list[35].wind.gust,
                    list.list[36].wind.gust,
                    list.list[37].wind.gust,
                    list.list[38].wind.gust,
                    list.list[39].wind.gust,
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
                highTempDom01.textContent = `High Temperature: ${parseInt(Math.max(...highTemp01))} °F`;

                // Display low temp for each day
                let lowTempDom01 = document.querySelector(`#tempLow01`);
                lowTempDom01.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp01))} °F`;

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
                windSpeedDom01.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed01))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed01))}mph`;

                // Display wind gust by day
                let windGustDom01 = document.querySelector(`#windGust01`);
                windGustDom01.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust01))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust01))}mph`;

                // Display humidity by day
                let humidityDom01 = document.querySelector(`#humidity01`);
                humidityDom01.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity01))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity01))}%`;

                // End of fetch
            };
        })
    };
});