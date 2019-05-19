openweathermap reporter: hosted by Heroku at https://owm-reporter.herokuapp.com/home.html

OWMReporter finds the current weather in a city by calling openweathermap.org's API.

openweathermap's API has some limits on searches:
- The API accepts a city and a country. States or districts can't be searched for cities, only countries can.
- For cities with the same name in the same country, only data on the city with the highest population is returned.
- Certain cities or countries with special characters such as Montréal don't always return data as expected.