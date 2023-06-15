# weather

## Description

This is a 5 day forecast that can find most major cities within the United States. Once you type in the city in which you would like to see the weather and search, you will be presented with a 5 day forecast with key data. The rest of the functionality pertaining this program will be found in the Usage section of this README. This program utilizes the Openweathermap 5-Day Forecast API to display the forecast, which has a provided link in the Credits section of this README. 

My purpose behind this project was to introduce myself to the world of APIs while using a real world example. I understand as a developer, APIs are very important, so I wanted to familiarize myself with fetching and working with a JSON file. This came with challenges at first. I overcame issues pertaining traversing the JSON file and becoming familiar with it. Once I found out how to pull the data, getting it on screen with traversing the DOM through IDs was simple. What I found was outside of the fetch() and pulling JSON values, most of how to work with this was basic JavaScript. 

This program also was my introduction to Tailwind CSS. I used zero custom CSS for this program for the purpose of familiarizing myself with a CSS framework. With my good working knowledge of CSS, I found it made styling much more streamlined. The styling on this program was very simple, however, reviewing the documentation of Tailwind and using only their classes was my focus. Not using any custom CSS forced me to refer to the documentation and become familiar with a CSS framework. 

## Installation

No installation is required for this application.

## Usage

** User must keep in mind prior to use that this application only works for cities within the United States. International cities will prompt an error message, and will contain a message directing to search for a city within the United States. The API used also does not allow a search for City, State format. ** 

Upon opening this program, the user will be prompted with a card that contains a form. Within the form, there are instructions, a text box, and a submit button. Once the form is submitted, the user will either be prompted with an error, or 5 separate cards displaying the forecast for the next 5 days for the selected city.

If the user wishes to search for a new city, type in the city that would like to be searched. Upon submitting the form again, if the search is valid, the page will refresh all the data on the page and replace it with the results for the new search.

## Credits

I used the 5-Day Openweather API. The link is listed below:
https://openweathermap.org/forecast5

Tailwind CSS was used to style this program. This program solely utilizes the cdn link for Tailwind currently.
The link for Tailwind CSS site is listed below:
https://tailwindcss.com/

## Future Development

Future development of this program may include displaying the current weather, saving previous searches, and including a dropdown menu to previous searches. As the developer of this program, I am also open to discussion through Github pertaining any ideas, bugs, and future collaborations. The link to this program's respository will be found at the bottom of this README file. 

## License

This project contains an MIT License

## Link to GitHub repository

https://github.com/Zachary-Rossman/weather