function getData( city ) {
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=cbb3210df49fdf1c3c675a785e42454b";
    
    fetch( url ).then(async function(
        data
    ) {
        var data = await data.json();
		console.log('here');
	var body = {}
		body[city] = data
		console.log(body);
		var postResult =  await fetch('http://localhost:3000/weather', {  
			method: 'post',  
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		}).catch(err=>console.log(err))
		console.log(postResult);
        //получаем прогноз на неделю
        getWeek( data );

        //получаем заголовок
        getHeader( data );
        
    });
}

// День
function getNamesDay( date ) {
    let day = "";
    date = new Date(date);

    switch (date.getDay()) {
        case 0 :
        day = "Sunday";
        break;
        case 1 :
        day = "Monday";
        break;
        case 2 :
        day = "Tuesday";
        break;
        case 3 :
        day = "Wednesday";
        break;
        case 4 :
        day = "Thursday";
        break;
        case 5 :
        day = "Friday";
        break;
        case 6 :
        day = "Saturday";
        break;
    }

    return day;
}

//Месяц
function getNamesMonth( date ) {
    let month = "";
    date = new Date(date);

     switch (date.getMonth()) {
       case 0:
         month = "January";
         break;
       case 1:
         month = "February";
         break;
       case 2:
         month = "March";
         break;
       case 3:
         month = "April";
         break;
       case 4:
         month = "May";
         break;
       case 5:
         month = "June";
         break;
       case 6:
         month = "July";
         break;
       case 7:
         month = "August";
         break;
       case 8:
         month = "September";
         break;
       case 9:
         month = "October";
         break;
       case 10:
         month = "November";
         break;
       case 11:
         month = "December";
         break;
     }

     return month;
}

//число
function getNamesDayNumber( date ) {
    let day = "";
    date = new Date(date).getDate();

    return date;
}

//шапка виджета
function getHeader( data ) {
    let name = data.city.name,
        country = data.city.country,
        type = data.list[0].weather[0].description,
        icon = data.list[0].weather[0].icon,
        temperature = data.list[0].main.temp,
        humidity = data.list[0].main.humidity,
        speed = data.list[0].wind.speed,
        pressure = data.list[0].main.pressure,
        date = data.list[0].dt_txt,
        widget_header = document.getElementById("widget_header"),
        h = "";

    h += `<h1>${name},&nbsp;${country}</h1>   
    <section class="widget-weather__wrapper-time-and-type-weather">
        <time class="widget-weather__time" datetime="2018-01-14">${getNamesDay(date)}, ${getNamesMonth(date)} ${getNamesDayNumber(date)}</time>
        <p class="widget-weather__type-weather">${type}</p>
    </section>
    <section class="widget-weather__wrapper-data">
        <figure class="widget-weather__illustration-type-weather">
        <img class="widget-weather__illustration" src="./assets/media/img/${icon}.png" alt="snowflake">
        <figcaption class="widget-weather__temperature">
            <h2>
            ${temperature.toFixed()}
            <sup class="widget-weather__unit">°C</sup>
            </h2>
        </figcaption>
        </figure>
        <ul class="widget-weather__list-parameters">
        <li class="widget-weather__inner">
            <p class="widget-weather__name-parameter">
            Pressure:
            <span class="widget-weather__value-parameter">
              ${pressure} %
            </span>
            </p>
        </li>
        <li class="widget-weather__inner">
            <p class="widget-weather__name-parameter">
            Humidity:
            <span class="widget-weather__value-parameter">
               ${humidity} %
            </span>
            </p>
        </li>
        <li class="widget-weather__inner">
            <p class="widget-weather__name-parameter">
            Wind:
            <span class="widget-weather__value-parameter">
               ${speed} m/s
            </span>
            </p>
        </li>
        </ul>
    </section>`;

    widget_header.innerHTML = h;
}

//прогноз на неделю
function getWeek( data ) {
    var max = data.list.length,
        week = document.getElementById("week"),
        elems = week.getElementsByTagName('*'),
        w = "";

    for (var i = 4; i < max; i +=8) {
        var date = data.list[i].dt_txt,
            type_weather = data.list[i].weather[0].icon,
            title_weather = data.list[i].weather[0].description,
            max_t = data.list[i].main.temp_max,
            min_t = data.list[i].main.temp_min,
            pressure = data.list[i].main.pressure;

        w += `<article class="widget-weather__forecast">
          <h6>${getNamesDay(date)}</h6>
          <div class="widget-weather__forecast-wrapper-illustration" title="${title_weather}">
            <img
              id="type_weather"
              class="widget-weather__forecast-illustration"
              src="./assets/media/img/${type_weather}.png"
              alt="snowflake"
            >
          </div>
          <footer class="widget-weather__forecast-footer">
            <section class="widget-weather__forecast-wrapper-degrees">
              <p class="widget-weather__forecast-degrees">
                ${max_t.toFixed()}°
              </p>
              ...
              <p class="widget-weather__forecast-to-degrees">
                ${min_t.toFixed()}°
              </p>
            </section>
            <p class="widget-weather__forecast-sense" title="Pressure ${pressure}">
              Pressure ${pressure}
            </p>
          </footer>
        </article>`;
    }

    week.innerHTML = w;
    elems[0].setAttribute("class", "widget-weather__forecast widget-weather__forecast_active");
}



function downloadTodayNode() {
  var city = document.getElementById("search_input").value;
    //city = city.getAttribute("value");
	var url = `http://localhost:3000/weather/${city}`
    fetch(url)
    .then(async function (data){
      var data = await data.json();
	
      if (data == 404) {
          getData( city );
      } else {
		 getWeek( data );

        //получаем заголовок
        getHeader( data );
      }

    })
    .catch(err=>console.log(err))
}
