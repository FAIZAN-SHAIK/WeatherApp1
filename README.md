API CALLS : 
You can call by city name or city name, state code and country code. Please note that searching by states available only for the USA locations.

API call

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

Parameters
q	required       -->	City name, state code and country code divided by comma, Please refer to ISO 3166 for the state codes or country codes.
                      You can specify the parameter not only in English. In this case, the API response should be returned in the same language as the language of requested location name if the location is in our predefined list of more than 200,000 locations.

appid	required   -->	Your unique API key (you can always find it on your account page under the "API key" tab)
mode	optional   -->	Response format. Possible values are xml and html. If you don't use the mode parameter format is JSON by default. Learn more
units	optional	 -->  Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. Learn more
lang	optional	 -->  You can use this parameter to get the output in your language. Learn more

Examples of API calls:
https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
