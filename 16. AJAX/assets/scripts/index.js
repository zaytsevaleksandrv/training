function getData( id ) {
    let url = "http://api.openweathermap.org/data/2.5/forecast?id=" + id + "&units=metric&APPID=cbb3210df49fdf1c3c675a785e42454b";
    
    fetch( url ).then(async function(
        data
    ) {
        var data = await data.json();
        //получаем прогноз на неделю
        getWeek( data );

        //получаем заголовок
        getHeader( data );
        
        //получаем дату
        getNames( data );
        
        //получить тип погоды
        getTypeWeather( data );

        //получить иконку погоды
        getIcon( data );

        //получить t
        getTemperature( data );

        //получить влажность
        getHumidity( data );

        //скорость ветра
        getSpeed( data );

        //давление
        getPressure( data );
    });
}

function getHeader( data ) {
    let name = data.city.name,
        country = data.city.country,
        header = "";
    header += name + ",&nbsp;" + country;
    //отправляем в html
    document
        .getElementById("widget-weather__header")
        .innerHTML = header;
}

// День и месяц
function getNames( data ) {
    let date = data.list[0].dt_txt,
      day = "",
      month = "",
      time = "";
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

    switch (date.getMonth()) {
        case 0 :
        month = "January";
        break;
        case 1 :
        month = "February";
        break;
        case 2 :
        month = "March";
        break;
        case 3 :
        month = "April";
        break;
        case 4 :
        month = "May";
        break;
        case 5 :
        month = "June";
        break;
        case 6 :
        month = "July";
        break;
        case 7 :
        month = "August";
        break;
        case 8 :
        month = "September";
        break;
        case 9 :
        month = "October";
        break;
        case 10 :
        month = "November";
        break;
        case 11 :
        month = "December";
        break;
    }
    time += day + ", " + month + "&nbsp;" + date.getDate();

    document
        .getElementById("widget-weather__time")
        .innerHTML = time;
}

//день
function getNamesDay(week_day) {
  let day = "";
  date = new Date(week_day);

  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  return day;
}

//тип погоды
function getTypeWeather( data ) {
    let type = data.list[0].weather[0].description,
        type_weather = "";
    type_weather += type;
    document
        .getElementById("widget-weather__type-weather")
        .innerHTML = type_weather;
}

//иллюстрация
function getIcon( data ) {
    let icon = data.list[0].weather[0].icon,
        path = "";

    switch (icon) {
      case "13n":
        path = "./assets/media/img/13n.png";
        break;
      case "01d":
        path = "./assets/media/img/01d.png";
        break;
      case "02n":
        path = "./assets/media/img/02n.png";
        break;
      case "04n":
        path = "./assets/media/img/04n.png";
        break;
      case "10d":
        path = "./assets/media/img/10d.png";
        break;
      case "10n":
        path = "./assets/media/img/10n.png";
        break;
      default:
        path = "./assets/media/img/01n.png";
        break;
    }
    document
      .getElementById("widget-weather__illustration")
      .setAttribute("src", path);
}

//температура
function getTemperature( data ) {
    let temperature = data.list[0].main.temp,
        t = "";
    t += temperature.toFixed();
    document
        .getElementById("widget-weather__temperature")
        .innerHTML = t;
}

//влажность
function getHumidity( data ) {
    let humidity = data.list[0].main.humidity,
        h = "";
    h += humidity;
    document
        .getElementById("widget-weather__humidity")
        .innerHTML = h;
}

//температура
function getSpeed( data ) {
    let speed = data.list[0].wind.speed,
        s = "";
    s += speed;
    document
        .getElementById("widget-weather__speed")
        .innerHTML = s;
}

//давление
function getPressure( data ) {
    let pressure = data.list[0].main.pressure,
        p = "";
    p += pressure;
    document
        .getElementById("widget-weather__pressure")
        .innerHTML = p;
}

//прогноз на неделю
function getWeek( data ) {
    var max = data.list.length,
        week = document.getElementById("week"),
        elems = week.getElementsByTagName('*'),
        w = "";

    for (var i = 4; i < max; i +=8) {
        var week_day = data.list[i].dt_txt,
            type_weather = data.list[i].weather[0].icon,
            title_weather = data.list[i].weather[0].description,
            max_t = data.list[i].main.temp_max,
            min_t = data.list[i].main.temp_min,
            pressure = data.list[i].main.pressure;

        w += `<article class="widget-weather__forecast">
          <h6>${getNamesDay(week_day)}</h6>
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
