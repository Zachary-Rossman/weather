let searchForm = document.querySelector(`#searchForm`);
let searchText = document.querySelector(`#searchText`);
let submitBtn = document.querySelector(`#submitBtn`);
let weatherCard = document.querySelector(`#weatherCards`);
let errorMessage = document.querySelector(`#error`);
let cityNameDom = document.querySelector(`#cityName`);

// Hide icons so empty imgs do not populate
let weatherIcon01 = document.querySelector(`#cloudinessIcon01`);
let weatherIcon02 = document.querySelector(`#cloudinessIcon02`);
let weatherIcon03 = document.querySelector(`#cloudinessIcon03`);
let weatherIcon04 = document.querySelector(`#cloudinessIcon04`);
let weatherIcon05 = document.querySelector(`#cloudinessIcon05`);
weatherIcon01.style.display = 'none';
weatherIcon02.style.display = 'none';
weatherIcon03.style.display = 'none';
weatherIcon04.style.display = 'none';
weatherIcon05.style.display = 'none';

// Hide weatherCard and
weatherCard.style.display = 'none';
cityNameDom.style.display = 'none';
errorMessage.style.display = 'none';


searchForm.addEventListener('submit', e => {
    // If text input is empty, no event takes place
    e.preventDefault();
    // If statement to narrow search
    if (searchText.value === null || searchText.value === "") {
        // Define content for error message
        errorMessage.display = 'block';
        errorMessage.innerHTML = `Please enter a valid search. City must be within United States.`;
        // End function
        return;
        // If there city has a US country code, function will continue
    } else {
        // Display weather cards
        weatherCard.style.display = 'flex';
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
                } else if (searchText.value === null || country !== 'US') {
                    // Shows error message if search is outside of United States
                    errorMessage.style.display = 'block';
                    errorMessage.innerHTML = 'Please enter a valid search. City must be within United States.';
                    return;
                }
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
                ];
                let cloudiness02 = [
                    list.list[8].weather[0].description, 
                    list.list[9].weather[0].description, 
                    list.list[10].weather[0].description, 
                    list.list[11].weather[0].description, 
                    list.list[12].weather[0].description, 
                ];
                let cloudiness03 = [
                    list.list[16].weather[0].description, 
                    list.list[17].weather[0].description, 
                    list.list[18].weather[0].description, 
                    list.list[19].weather[0].description, 
                    list.list[20].weather[0].description, 
                ];
                let cloudiness04 = [
                    list.list[24].weather[0].description, 
                    list.list[25].weather[0].description, 
                    list.list[26].weather[0].description, 
                    list.list[27].weather[0].description, 
                    list.list[28].weather[0].description, 
                ];
                let cloudiness05 = [
                    list.list[32].weather[0].description, 
                    list.list[33].weather[0].description, 
                    list.list[34].weather[0].description, 
                    list.list[35].weather[0].description, 
                    list.list[36].weather[0].description, 
                ];

                // CLOUDINESS ICONS ONLY SHOWING CODE IN HTML; NOT DISPLAYING ICONS
                // Cloudiness icons per day
                let cloudinessIcon01 = [
                    list.list[0].weather[0].icon, //0900
                    list.list[1].weather[0].icon, //1200
                    list.list[2].weather[0].icon, //1500
                    list.list[3].weather[0].icon, //1800
                    list.list[4].weather[0].icon, //2100
                    // list.list[5].weather[0].icon, //00
                    // list.list[6].weather[0].icon, //0300
                    // list.list[7].weather[0].icon // 0600
                ];

                let cloudinessIcon02 = [
                    list.list[8].weather[0].icon,
                    list.list[9].weather[0].icon,
                    list.list[10].weather[0].icon,
                    list.list[11].weather[0].icon,
                    list.list[12].weather[0].icon,
                ];
                let cloudinessIcon03 = [
                    list.list[16].weather[0].icon,
                    list.list[17].weather[0].icon,
                    list.list[18].weather[0].icon,
                    list.list[19].weather[0].icon,
                    list.list[20].weather[0].icon,
                ];
                let cloudinessIcon04 = [
                    list.list[24].weather[0].icon,
                    list.list[25].weather[0].icon,
                    list.list[26].weather[0].icon,
                    list.list[27].weather[0].icon,
                    list.list[28].weather[0].icon,
                ];
                let cloudinessIcon05 = [
                    list.list[32].weather[0].icon,
                    list.list[33].weather[0].icon,
                    list.list[34].weather[0].icon,
                    list.list[35].weather[0].icon,
                    list.list[36].weather[0].icon,
                ];

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
                cityNameDom.style.display = 'block';
                cityNameDom.textContent = `5-day forecast for ${cityName}`;

                // Display date on top of each weather card
                // Day 1
                let dateDom01 = document.querySelector(`#date01`);
                dateDom01.textContent = date01;
                // Day 2
                let dateDom02 = document.querySelector(`#date02`);
                dateDom02.textContent = date02;
                // Day 3
                let dateDom03 = document.querySelector(`#date03`);
                dateDom03.textContent = date03;
                // Day 4
                let dateDom04 = document.querySelector(`#date04`);
                dateDom04.textContent = date04;
                // Day 5
                let dateDom05 = document.querySelector(`#date05`);
                dateDom05.textContent = date05;

                // Loop to find most frequent weatherIcon for each day
                // Day 1
                for(let i in cloudinessIcon01) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudinessIcon01[i]] = (frequency[cloudinessIcon01[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudinessIcon01[i]] > max) {
                        // update max
                        max = frequency[cloudinessIcon01[i]];
                        // update result
                        let result = cloudinessIcon01[i];
                        // Show result in element
                        weatherIcon01.style.display = 'block';
                        document.querySelector(`#cloudinessIcon01`).src = `https://openweathermap.org/img/w/${result}.png`;
                    };
                };
                // Day 2
                for(let i in cloudinessIcon02) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudinessIcon02[i]] = (frequency[cloudinessIcon02[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudinessIcon02[i]] > max) {
                        // update max
                        max = frequency[cloudinessIcon02[i]];
                        // update result
                        let result = cloudinessIcon02[i];
                        // Show result in element
                        weatherIcon02.style.display = 'block';
                        document.querySelector(`#cloudinessIcon02`).src = `https://openweathermap.org/img/w/${result}.png`;
                    };
                };
                // Day 3
                for(let i in cloudinessIcon03) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudinessIcon03[i]] = (frequency[cloudinessIcon03[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudinessIcon03[i]] > max) {
                        // update max
                        max = frequency[cloudinessIcon03[i]];
                        // update result
                        let result = cloudinessIcon03[i];
                        // Show result in element
                        weatherIcon03.style.display = 'block';
                        document.querySelector(`#cloudinessIcon03`).src = `https://openweathermap.org/img/w/${result}.png`;
                    };
                };
                // Day 4
                for(let i in cloudinessIcon04) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudinessIcon04[i]] = (frequency[cloudinessIcon04[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudinessIcon04[i]] > max) {
                        // update max
                        max = frequency[cloudinessIcon04[i]];
                        // update result
                        let result = cloudinessIcon04[i];
                        // Show result in element
                        weatherIcon04.style.display = 'block';
                        document.querySelector(`#cloudinessIcon04`).src = `https://openweathermap.org/img/w/${result}.png`;
                    };
                };
                // Day 5
                for(let i in cloudinessIcon05) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudinessIcon05[i]] = (frequency[cloudinessIcon05[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudinessIcon05[i]] > max) {
                        // update max
                        max = frequency[cloudinessIcon05[i]];
                        // update result
                        let result = cloudinessIcon05[i];
                        // Show result in element
                        weatherIcon05.style.display = 'block';
                        document.querySelector(`#cloudinessIcon05`).src = `https://openweathermap.org/img/w/${result}.png`;
                    };
                };

                // Display high temp for each day
                //Day 1
                let highTempDom01 = document.querySelector(`#tempHigh01`);
                highTempDom01.textContent = `High Temperature: ${parseInt(Math.max(...highTemp01))} °F`;
                // Day 2
                let highTempDom02 = document.querySelector(`#tempHigh02`);
                highTempDom02.textContent = `High Temperature: ${parseInt(Math.max(...highTemp02))} °F`;
                // Day 3
                let highTempDom03 = document.querySelector(`#tempHigh03`);
                highTempDom03.textContent = `High Temperature: ${parseInt(Math.max(...highTemp03))} °F`;
                // Day 4
                let highTempDom04 = document.querySelector(`#tempHigh04`);
                highTempDom04.textContent = `High Temperature: ${parseInt(Math.max(...highTemp04))} °F`;
                // Day 5
                let highTempDom05 = document.querySelector(`#tempHigh05`);
                highTempDom05.textContent = `High Temperature: ${parseInt(Math.max(...highTemp05))} °F`;

                // Display low temp for each day
                // Day 1
                let lowTempDom01 = document.querySelector(`#tempLow01`);
                lowTempDom01.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp01))} °F`;
                // Day 2
                let lowTempDom02 = document.querySelector(`#tempLow02`);
                lowTempDom02.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp02))} °F`;
                // Day 3
                let lowTempDom03 = document.querySelector(`#tempLow03`);
                lowTempDom03.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp03))} °F`;
                // Day 4
                let lowTempDom04 = document.querySelector(`#tempLow04`);
                lowTempDom04.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp04))} °F`;
                // Day 5
                let lowTempDom05 = document.querySelector(`#tempLow05`);
                lowTempDom05.textContent = `Low Temperature: ${parseInt(Math.min(...lowTemp05))} °F`;

                // Display cloudiness for each day
                let cloudinessDom01 = document.querySelector(`#cloudiness01`);
                let cloudinessDom02 = document.querySelector(`#cloudiness02`);
                let cloudinessDom03 = document.querySelector(`#cloudiness03`);
                let cloudinessDom04 = document.querySelector(`#cloudiness04`);
                let cloudinessDom05 = document.querySelector(`#cloudiness05`);
                // Loop through cloudiness each day to display most frequent item in that array
                // Day 1
                for(let i in cloudiness01) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness01[i]] = (frequency[cloudiness01[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness01[i]] > max) {
                        // update max
                        max = frequency[cloudiness01[i]];
                        // update result
                        let result = cloudiness01[i];
                        // Show result in element
                        cloudinessDom01.innerHTML = result;
                    };
                };
                // Day 2
                for(let i in cloudiness02) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness02[i]] = (frequency[cloudiness02[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness02[i]] > max) {
                        // update max
                        max = frequency[cloudiness02[i]];
                        // update result
                        let result = cloudiness02[i];
                        // Show result in element
                        cloudinessDom02.textContent = result;
                    };
                };
                // Day 3
                for(let i in cloudiness03) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness03[i]] = (frequency[cloudiness03[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness03[i]] > max) {
                        // update max
                        max = frequency[cloudiness03[i]];
                        // update result
                        let result = cloudiness03[i];
                        // Show result in element
                        cloudinessDom03.textContent = result;
                    };
                };
                // Day 4
                for(let i in cloudiness04) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness04[i]] = (frequency[cloudiness04[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness04[i]] > max) {
                        // update max
                        max = frequency[cloudiness04[i]];
                        // update result
                        let result = cloudiness04[i];
                        // Show result in element
                        cloudinessDom04.textContent = result;
                    };
                };
                // Day 5
                for(let i in cloudiness05) {
                    let frequency = [];
                    let max = 0;
                    frequency[cloudiness05[i]] = (frequency[cloudiness05[i]] || 0)+1; // increment frequency.
                    if(frequency[cloudiness05[i]] > max) {
                        // update max
                        max = frequency[cloudiness05[i]];
                        // update result
                        let result = cloudiness05[i];
                        // Show result in element
                        cloudinessDom05.textContent = result;
                    };
                };

                // Display wind speed by day
                // Day 1
                let windSpeedDom01 = document.querySelector(`#windSpeed01`);
                windSpeedDom01.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed01))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed01))}mph`;
                // Day 2
                let windSpeedDom02 = document.querySelector(`#windSpeed02`);
                windSpeedDom02.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed02))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed02))}mph`;
                // Day 3
                let windSpeedDom03 = document.querySelector(`#windSpeed03`);
                windSpeedDom03.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed03))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed03))}mph`;
                // Day 4
                let windSpeedDom04 = document.querySelector(`#windSpeed04`);
                windSpeedDom04.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed04))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed04))}mph`;
                // Day 5
                let windSpeedDom05 = document.querySelector(`#windSpeed05`);
                windSpeedDom05.innerHTML = `Maximum Wind Speed: ${parseInt(Math.max(...windSpeed05))}mph <br> Minimum Wind Speed: ${parseInt(Math.min(...windSpeed05))}mph`;

                // Display wind gust by day
                // Day 1
                let windGustDom01 = document.querySelector(`#windGust01`);
                windGustDom01.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust01))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust01))}mph`;
                // Day 2
                let windGustDom02 = document.querySelector(`#windGust02`);
                windGustDom02.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust02))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust02))}mph`;
                // Day 3
                let windGustDom03 = document.querySelector(`#windGust03`);
                windGustDom03.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust03))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust03))}mph`;
                // Day 4
                let windGustDom04 = document.querySelector(`#windGust04`);
                windGustDom04.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust04))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust04))}mph`;
                // Day 5
                let windGustDom05 = document.querySelector(`#windGust05`);
                windGustDom05.innerHTML = `Maximum Wind Gust: ${parseInt(Math.max(...windGust05))}mph <br> Minimum Wind Gust: ${parseInt(Math.min(...windGust05))}mph`;

                // Display humidity by day
                // Day 1
                let humidityDom01 = document.querySelector(`#humidity01`);
                humidityDom01.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity01))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity01))}%`;
                // Day 2
                let humidityDom02 = document.querySelector(`#humidity02`);
                humidityDom02.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity02))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity02))}%`;
                // Day 3
                let humidityDom03 = document.querySelector(`#humidity03`);
                humidityDom03.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity03))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity03))}%`;
                // Day 4
                let humidityDom04 = document.querySelector(`#humidity04`);
                humidityDom04.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity04))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity04))}%`;
                // Day 5
                let humidityDom05 = document.querySelector(`#humidity05`);
                humidityDom05.innerHTML = `Maximum Humidity: ${parseInt(Math.max(...humidity05))}% <br> Minimum Humidity: ${parseInt(Math.min(...humidity05))}%`;

                // End of fetch
            };
        })
    };
});