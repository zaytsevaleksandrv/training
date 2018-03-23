var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/Vladivostok", function(req, res) {
  res.json(Vladivostok);
});
app.get("/Dubai", function(req, res) {
  res.json(Dubai);
});
app.get("/Tokio", function(req, res) {
  res.json(Tokio);
});

app.listen(3001, function() {
  console.log("Откройте localhost:3001");
});

var Vladivostok = {
  cod: "200",
  message: 0.0124,
  cnt: 40,
  list: [
    {
      dt: 1521838800,
      main: {
        temp: 1.53,
        temp_min: -0.26,
        temp_max: 1.53,
        pressure: 1022.84,
        sea_level: 1029.14,
        grnd_level: 1022.84,
        humidity: 95,
        temp_kf: 1.78
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 92 },
      wind: { speed: 1.66, deg: 125.5 },
      rain: { "3h": 0.135 },
      snow: { "3h": 0.552 },
      sys: { pod: "n" },
      dt_txt: "2018-03-23 21:00:00"
    },
    {
      dt: 1521849600,
      main: {
        temp: 2.47,
        temp_min: 1.14,
        temp_max: 2.47,
        pressure: 1023.01,
        sea_level: 1029.22,
        grnd_level: 1023.01,
        humidity: 91,
        temp_kf: 1.33
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 64 },
      wind: { speed: 0.95, deg: 143.5 },
      rain: { "3h": 0.01 },
      snow: { "3h": 0.002 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 00:00:00"
    },
    {
      dt: 1521860400,
      main: {
        temp: 5.34,
        temp_min: 4.46,
        temp_max: 5.34,
        pressure: 1022.02,
        sea_level: 1028.03,
        grnd_level: 1022.02,
        humidity: 74,
        temp_kf: 0.89
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.36, deg: 184.5 },
      rain: { "3h": 0.005 },
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-24 03:00:00"
    },
    {
      dt: 1521871200,
      main: {
        temp: 5.89,
        temp_min: 5.45,
        temp_max: 5.89,
        pressure: 1020.54,
        sea_level: 1026.41,
        grnd_level: 1020.54,
        humidity: 63,
        temp_kf: 0.44
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 56 },
      wind: { speed: 1.61, deg: 184.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-24 06:00:00"
    },
    {
      dt: 1521882000,
      main: {
        temp: 3.89,
        temp_min: 3.89,
        temp_max: 3.89,
        pressure: 1020.4,
        sea_level: 1026.5,
        grnd_level: 1020.4,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 64 },
      wind: { speed: 0.86, deg: 220.502 },
      rain: {},
      snow: { "3h": 0.00024999999999997 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 09:00:00"
    },
    {
      dt: 1521892800,
      main: {
        temp: 1.21,
        temp_min: 1.21,
        temp_max: 1.21,
        pressure: 1021.66,
        sea_level: 1027.78,
        grnd_level: 1021.66,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 48 },
      wind: { speed: 0.97, deg: 242.506 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 12:00:00"
    },
    {
      dt: 1521903600,
      main: {
        temp: 0.21,
        temp_min: 0.21,
        temp_max: 0.21,
        pressure: 1022.11,
        sea_level: 1028.38,
        grnd_level: 1022.11,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.42, deg: 298.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 15:00:00"
    },
    {
      dt: 1521914400,
      main: {
        temp: -1.01,
        temp_min: -1.01,
        temp_max: -1.01,
        pressure: 1022.72,
        sea_level: 1028.99,
        grnd_level: 1022.72,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.92, deg: 289.52 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 18:00:00"
    },
    {
      dt: 1521925200,
      main: {
        temp: -1.93,
        temp_min: -1.93,
        temp_max: -1.93,
        pressure: 1023.15,
        sea_level: 1029.53,
        grnd_level: 1023.15,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.96, deg: 274.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 21:00:00"
    },
    {
      dt: 1521936000,
      main: {
        temp: 4.28,
        temp_min: 4.28,
        temp_max: 4.28,
        pressure: 1023.73,
        sea_level: 1029.83,
        grnd_level: 1023.73,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.46, deg: 159.006 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 00:00:00"
    },
    {
      dt: 1521946800,
      main: {
        temp: 7.51,
        temp_min: 7.51,
        temp_max: 7.51,
        pressure: 1022.19,
        sea_level: 1028.19,
        grnd_level: 1022.19,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.86, deg: 159.504 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 03:00:00"
    },
    {
      dt: 1521957600,
      main: {
        temp: 8.23,
        temp_min: 8.23,
        temp_max: 8.23,
        pressure: 1020.02,
        sea_level: 1025.94,
        grnd_level: 1020.02,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.47, deg: 169 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 06:00:00"
    },
    {
      dt: 1521968400,
      main: {
        temp: 5.85,
        temp_min: 5.85,
        temp_max: 5.85,
        pressure: 1019.24,
        sea_level: 1025.23,
        grnd_level: 1019.24,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.03, deg: 163.004 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 09:00:00"
    },
    {
      dt: 1521979200,
      main: {
        temp: 0.73,
        temp_min: 0.73,
        temp_max: 0.73,
        pressure: 1020.43,
        sea_level: 1026.47,
        grnd_level: 1020.43,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.97, deg: 145.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 12:00:00"
    },
    {
      dt: 1521990000,
      main: {
        temp: -0.44,
        temp_min: -0.44,
        temp_max: -0.44,
        pressure: 1021.3,
        sea_level: 1027.54,
        grnd_level: 1021.3,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.6, deg: 285.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 15:00:00"
    },
    {
      dt: 1522000800,
      main: {
        temp: 0.56,
        temp_min: 0.56,
        temp_max: 0.56,
        pressure: 1021.53,
        sea_level: 1027.84,
        grnd_level: 1021.53,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.86, deg: 314.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 18:00:00"
    },
    {
      dt: 1522011600,
      main: {
        temp: 0.14,
        temp_min: 0.14,
        temp_max: 0.14,
        pressure: 1021.95,
        sea_level: 1028.26,
        grnd_level: 1021.95,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.96, deg: 298.004 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 21:00:00"
    },
    {
      dt: 1522022400,
      main: {
        temp: 6.31,
        temp_min: 6.31,
        temp_max: 6.31,
        pressure: 1022.67,
        sea_level: 1028.77,
        grnd_level: 1022.67,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.15, deg: 224.505 },
      rain: { "3h": 0.005 },
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 00:00:00"
    },
    {
      dt: 1522033200,
      main: {
        temp: 10.55,
        temp_min: 10.55,
        temp_max: 10.55,
        pressure: 1022.18,
        sea_level: 1028.05,
        grnd_level: 1022.18,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 12 },
      wind: { speed: 1.61, deg: 161 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 03:00:00"
    },
    {
      dt: 1522044000,
      main: {
        temp: 11,
        temp_min: 11,
        temp_max: 11,
        pressure: 1020.84,
        sea_level: 1026.68,
        grnd_level: 1020.84,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.78, deg: 179.503 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 06:00:00"
    },
    {
      dt: 1522054800,
      main: {
        temp: 7.99,
        temp_min: 7.99,
        temp_max: 7.99,
        pressure: 1020.55,
        sea_level: 1026.55,
        grnd_level: 1020.55,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.42, deg: 180.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 09:00:00"
    },
    {
      dt: 1522065600,
      main: {
        temp: 3.69,
        temp_min: 3.69,
        temp_max: 3.69,
        pressure: 1021.33,
        sea_level: 1027.37,
        grnd_level: 1021.33,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.36, deg: 130.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 12:00:00"
    },
    {
      dt: 1522076400,
      main: {
        temp: 1.83,
        temp_min: 1.83,
        temp_max: 1.83,
        pressure: 1020.89,
        sea_level: 1027.09,
        grnd_level: 1020.89,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.02, deg: 144.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 15:00:00"
    },
    {
      dt: 1522087200,
      main: {
        temp: -0.06,
        temp_min: -0.06,
        temp_max: -0.06,
        pressure: 1020.46,
        sea_level: 1026.75,
        grnd_level: 1020.46,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 20 },
      wind: { speed: 2.07, deg: 162.004 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 18:00:00"
    },
    {
      dt: 1522098000,
      main: {
        temp: -0.3,
        temp_min: -0.3,
        temp_max: -0.3,
        pressure: 1020.17,
        sea_level: 1026.42,
        grnd_level: 1020.17,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 44 },
      wind: { speed: 1.21, deg: 167.003 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 21:00:00"
    },
    {
      dt: 1522108800,
      main: {
        temp: 3.7,
        temp_min: 3.7,
        temp_max: 3.7,
        pressure: 1020.72,
        sea_level: 1026.86,
        grnd_level: 1020.72,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.97, deg: 218 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 00:00:00"
    },
    {
      dt: 1522119600,
      main: {
        temp: 6.95,
        temp_min: 6.95,
        temp_max: 6.95,
        pressure: 1019.56,
        sea_level: 1025.53,
        grnd_level: 1019.56,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02d" }
      ],
      clouds: { all: 8 },
      wind: { speed: 2.21, deg: 156.507 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 03:00:00"
    },
    {
      dt: 1522130400,
      main: {
        temp: 7.22,
        temp_min: 7.22,
        temp_max: 7.22,
        pressure: 1017.89,
        sea_level: 1023.76,
        grnd_level: 1017.89,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.58, deg: 167.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 06:00:00"
    },
    {
      dt: 1522141200,
      main: {
        temp: 4.78,
        temp_min: 4.78,
        temp_max: 4.78,
        pressure: 1017.63,
        sea_level: 1023.58,
        grnd_level: 1017.63,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 12 },
      wind: { speed: 3.46, deg: 162.001 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 09:00:00"
    },
    {
      dt: 1522152000,
      main: {
        temp: 1.96,
        temp_min: 1.96,
        temp_max: 1.96,
        pressure: 1019.29,
        sea_level: 1025.24,
        grnd_level: 1019.29,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 76 },
      wind: { speed: 2.66, deg: 153.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 12:00:00"
    },
    {
      dt: 1522162800,
      main: {
        temp: 1.78,
        temp_min: 1.78,
        temp_max: 1.78,
        pressure: 1018.63,
        sea_level: 1024.82,
        grnd_level: 1018.63,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 88 },
      wind: { speed: 2.66, deg: 137.503 },
      rain: { "3h": 0.02 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 15:00:00"
    },
    {
      dt: 1522173600,
      main: {
        temp: 1.54,
        temp_min: 1.54,
        temp_max: 1.54,
        pressure: 1018.31,
        sea_level: 1024.37,
        grnd_level: 1018.31,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 76 },
      wind: { speed: 1.85, deg: 155.502 },
      rain: { "3h": 0.01 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 18:00:00"
    },
    {
      dt: 1522184400,
      main: {
        temp: 1.53,
        temp_min: 1.53,
        temp_max: 1.53,
        pressure: 1018.07,
        sea_level: 1024.19,
        grnd_level: 1018.07,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 88 },
      wind: { speed: 1.96, deg: 151.501 },
      rain: { "3h": 0.01 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 21:00:00"
    },
    {
      dt: 1522195200,
      main: {
        temp: 3.88,
        temp_min: 3.88,
        temp_max: 3.88,
        pressure: 1018.07,
        sea_level: 1024.18,
        grnd_level: 1018.07,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 56 },
      wind: { speed: 1.86, deg: 148.5 },
      rain: { "3h": 0.02 },
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 00:00:00"
    },
    {
      dt: 1522206000,
      main: {
        temp: 6.84,
        temp_min: 6.84,
        temp_max: 6.84,
        pressure: 1017.59,
        sea_level: 1023.32,
        grnd_level: 1017.59,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: { all: 44 },
      wind: { speed: 3.63, deg: 163.004 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 03:00:00"
    },
    {
      dt: 1522216800,
      main: {
        temp: 6.49,
        temp_min: 6.49,
        temp_max: 6.49,
        pressure: 1016.2,
        sea_level: 1022.11,
        grnd_level: 1016.2,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 68 },
      wind: { speed: 3.71, deg: 160.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 06:00:00"
    },
    {
      dt: 1522227600,
      main: {
        temp: 4.08,
        temp_min: 4.08,
        temp_max: 4.08,
        pressure: 1017.48,
        sea_level: 1023.49,
        grnd_level: 1017.48,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 92 },
      wind: { speed: 2.06, deg: 140.5 },
      rain: { "3h": 0.34 },
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 09:00:00"
    },
    {
      dt: 1522238400,
      main: {
        temp: 3.11,
        temp_min: 3.11,
        temp_max: 3.11,
        pressure: 1019.1,
        sea_level: 1025.26,
        grnd_level: 1019.1,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" }
      ],
      clouds: { all: 92 },
      wind: { speed: 0.9, deg: 154.502 },
      rain: { "3h": 3.52 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 12:00:00"
    },
    {
      dt: 1522249200,
      main: {
        temp: 3.59,
        temp_min: 3.59,
        temp_max: 3.59,
        pressure: 1020.91,
        sea_level: 1027,
        grnd_level: 1020.91,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" }
      ],
      clouds: { all: 92 },
      wind: { speed: 2.12, deg: 327 },
      rain: { "3h": 6.45 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 15:00:00"
    },
    {
      dt: 1522260000,
      main: {
        temp: 4.13,
        temp_min: 4.13,
        temp_max: 4.13,
        pressure: 1022.2,
        sea_level: 1028.35,
        grnd_level: 1022.2,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" }
      ],
      clouds: { all: 92 },
      wind: { speed: 4.9, deg: 331.004 },
      rain: { "3h": 3.34 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 18:00:00"
    }
  ],
  city: {
    id: 2013348,
    name: "Vladivostok",
    coord: { lat: 43.1151, lon: 131.8856 },
    country: "RU",
    population: 587022
  }
};

var Dubai = {
  cod: "200",
  message: 0.002,
  cnt: 40,
  list: [
    {
      dt: 1521838800,
      main: {
        temp: 20.65,
        temp_min: 19.05,
        temp_max: 20.65,
        pressure: 1023.81,
        sea_level: 1025.94,
        grnd_level: 1023.81,
        humidity: 100,
        temp_kf: 1.6
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.91, deg: 81.0005 },
      sys: { pod: "n" },
      dt_txt: "2018-03-23 21:00:00"
    },
    {
      dt: 1521849600,
      main: {
        temp: 19.41,
        temp_min: 18.21,
        temp_max: 19.41,
        pressure: 1023.82,
        sea_level: 1025.9,
        grnd_level: 1023.82,
        humidity: 100,
        temp_kf: 1.2
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02n" }
      ],
      clouds: { all: 8 },
      wind: { speed: 1.05, deg: 177.5 },
      sys: { pod: "n" },
      dt_txt: "2018-03-24 00:00:00"
    },
    {
      dt: 1521860400,
      main: {
        temp: 19.75,
        temp_min: 18.96,
        temp_max: 19.75,
        pressure: 1025.75,
        sea_level: 1027.91,
        grnd_level: 1025.75,
        humidity: 100,
        temp_kf: 0.8
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 20 },
      wind: { speed: 1.76, deg: 17.5003 },
      rain: { "3h": 0.015 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 03:00:00"
    },
    {
      dt: 1521871200,
      main: {
        temp: 24.25,
        temp_min: 23.85,
        temp_max: 24.25,
        pressure: 1027.34,
        sea_level: 1029.33,
        grnd_level: 1027.34,
        humidity: 91,
        temp_kf: 0.4
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.76, deg: 56.0005 },
      rain: { "3h": 0.02 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 06:00:00"
    },
    {
      dt: 1521882000,
      main: {
        temp: 28.84,
        temp_min: 28.84,
        temp_max: 28.84,
        pressure: 1026.08,
        sea_level: 1028.17,
        grnd_level: 1026.08,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.31, deg: 28.0021 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-24 09:00:00"
    },
    {
      dt: 1521892800,
      main: {
        temp: 29.66,
        temp_min: 29.66,
        temp_max: 29.66,
        pressure: 1024.74,
        sea_level: 1026.73,
        grnd_level: 1024.74,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.62, deg: 30.5061 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-24 12:00:00"
    },
    {
      dt: 1521903600,
      main: {
        temp: 27.26,
        temp_min: 27.26,
        temp_max: 27.26,
        pressure: 1025.51,
        sea_level: 1027.49,
        grnd_level: 1025.51,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.82, deg: 45.5008 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 15:00:00"
    },
    {
      dt: 1521914400,
      main: {
        temp: 24.6,
        temp_min: 24.6,
        temp_max: 24.6,
        pressure: 1026.94,
        sea_level: 1029.07,
        grnd_level: 1026.94,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.62, deg: 86.5204 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 18:00:00"
    },
    {
      dt: 1521925200,
      main: {
        temp: 21.78,
        temp_min: 21.78,
        temp_max: 21.78,
        pressure: 1026.8,
        sea_level: 1028.92,
        grnd_level: 1026.8,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.06, deg: 62.0005 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 21:00:00"
    },
    {
      dt: 1521936000,
      main: {
        temp: 21,
        temp_min: 21,
        temp_max: 21,
        pressure: 1026.65,
        sea_level: 1028.85,
        grnd_level: 1026.65,
        humidity: 98,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.66, deg: 48.5061 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 00:00:00"
    },
    {
      dt: 1521946800,
      main: {
        temp: 20.99,
        temp_min: 20.99,
        temp_max: 20.99,
        pressure: 1028.1,
        sea_level: 1030.25,
        grnd_level: 1028.1,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.91, deg: 72.0045 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 03:00:00"
    },
    {
      dt: 1521957600,
      main: {
        temp: 27.7,
        temp_min: 27.7,
        temp_max: 27.7,
        pressure: 1030.15,
        sea_level: 1032.14,
        grnd_level: 1030.15,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.22, deg: 160 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 06:00:00"
    },
    {
      dt: 1521968400,
      main: {
        temp: 29.63,
        temp_min: 29.63,
        temp_max: 29.63,
        pressure: 1029.05,
        sea_level: 1031.1,
        grnd_level: 1029.05,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.58, deg: 234.504 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 09:00:00"
    },
    {
      dt: 1521979200,
      main: {
        temp: 29.58,
        temp_min: 29.58,
        temp_max: 29.58,
        pressure: 1027.57,
        sea_level: 1029.51,
        grnd_level: 1027.57,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.57, deg: 331.5 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 12:00:00"
    },
    {
      dt: 1521990000,
      main: {
        temp: 26.07,
        temp_min: 26.07,
        temp_max: 26.07,
        pressure: 1028.43,
        sea_level: 1030.45,
        grnd_level: 1028.43,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.45, deg: 359.501 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 15:00:00"
    },
    {
      dt: 1522000800,
      main: {
        temp: 22.48,
        temp_min: 22.48,
        temp_max: 22.48,
        pressure: 1029.72,
        sea_level: 1031.77,
        grnd_level: 1029.72,
        humidity: 98,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.26, deg: 23.5011 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 18:00:00"
    },
    {
      dt: 1522011600,
      main: {
        temp: 20.94,
        temp_min: 20.94,
        temp_max: 20.94,
        pressure: 1029.09,
        sea_level: 1031.13,
        grnd_level: 1029.09,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.66, deg: 49.0037 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 21:00:00"
    },
    {
      dt: 1522022400,
      main: {
        temp: 20.29,
        temp_min: 20.29,
        temp_max: 20.29,
        pressure: 1028.27,
        sea_level: 1030.43,
        grnd_level: 1028.27,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.45, deg: 71.5053 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 00:00:00"
    },
    {
      dt: 1522033200,
      main: {
        temp: 20.48,
        temp_min: 20.48,
        temp_max: 20.48,
        pressure: 1029.39,
        sea_level: 1031.54,
        grnd_level: 1029.39,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.06, deg: 115.5 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 03:00:00"
    },
    {
      dt: 1522044000,
      main: {
        temp: 27.85,
        temp_min: 27.85,
        temp_max: 27.85,
        pressure: 1030.81,
        sea_level: 1032.92,
        grnd_level: 1030.81,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.98, deg: 164.003 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 06:00:00"
    },
    {
      dt: 1522054800,
      main: {
        temp: 29.66,
        temp_min: 29.66,
        temp_max: 29.66,
        pressure: 1029.54,
        sea_level: 1031.5,
        grnd_level: 1029.54,
        humidity: 61,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.47, deg: 308.501 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 09:00:00"
    },
    {
      dt: 1522065600,
      main: {
        temp: 29.09,
        temp_min: 29.09,
        temp_max: 29.09,
        pressure: 1027.08,
        sea_level: 1029.08,
        grnd_level: 1027.08,
        humidity: 60,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.21, deg: 320.001 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 12:00:00"
    },
    {
      dt: 1522076400,
      main: {
        temp: 25.53,
        temp_min: 25.53,
        temp_max: 25.53,
        pressure: 1027.21,
        sea_level: 1029.24,
        grnd_level: 1027.21,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.67, deg: 302.5 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 15:00:00"
    },
    {
      dt: 1522087200,
      main: {
        temp: 21.82,
        temp_min: 21.82,
        temp_max: 21.82,
        pressure: 1028.17,
        sea_level: 1030.23,
        grnd_level: 1028.17,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.52, deg: 315.504 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 18:00:00"
    },
    {
      dt: 1522098000,
      main: {
        temp: 20.33,
        temp_min: 20.33,
        temp_max: 20.33,
        pressure: 1027.22,
        sea_level: 1029.38,
        grnd_level: 1027.22,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.91, deg: 140.503 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 21:00:00"
    },
    {
      dt: 1522108800,
      main: {
        temp: 19.48,
        temp_min: 19.48,
        temp_max: 19.48,
        pressure: 1026.15,
        sea_level: 1028.28,
        grnd_level: 1026.15,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.22, deg: 183.5 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 00:00:00"
    },
    {
      dt: 1522119600,
      main: {
        temp: 19.48,
        temp_min: 19.48,
        temp_max: 19.48,
        pressure: 1026.78,
        sea_level: 1028.89,
        grnd_level: 1026.78,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.41, deg: 188.507 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 03:00:00"
    },
    {
      dt: 1522130400,
      main: {
        temp: 26.62,
        temp_min: 26.62,
        temp_max: 26.62,
        pressure: 1027.54,
        sea_level: 1029.59,
        grnd_level: 1027.54,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.38, deg: 203.501 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 06:00:00"
    },
    {
      dt: 1522141200,
      main: {
        temp: 28.65,
        temp_min: 28.65,
        temp_max: 28.65,
        pressure: 1026.22,
        sea_level: 1028.15,
        grnd_level: 1026.22,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.91, deg: 270.001 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 09:00:00"
    },
    {
      dt: 1522152000,
      main: {
        temp: 27.58,
        temp_min: 27.58,
        temp_max: 27.58,
        pressure: 1024.31,
        sea_level: 1026.25,
        grnd_level: 1024.31,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.56, deg: 280.501 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 12:00:00"
    },
    {
      dt: 1522162800,
      main: {
        temp: 24.61,
        temp_min: 24.61,
        temp_max: 24.61,
        pressure: 1024.79,
        sea_level: 1026.73,
        grnd_level: 1024.79,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.46, deg: 262.503 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 15:00:00"
    },
    {
      dt: 1522173600,
      main: {
        temp: 21.49,
        temp_min: 21.49,
        temp_max: 21.49,
        pressure: 1025.36,
        sea_level: 1027.53,
        grnd_level: 1025.36,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.75, deg: 249.502 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 18:00:00"
    },
    {
      dt: 1522184400,
      main: {
        temp: 20.28,
        temp_min: 20.28,
        temp_max: 20.28,
        pressure: 1024.8,
        sea_level: 1026.83,
        grnd_level: 1024.8,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.56, deg: 234.001 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 21:00:00"
    },
    {
      dt: 1522195200,
      main: {
        temp: 19.18,
        temp_min: 19.18,
        temp_max: 19.18,
        pressure: 1023.91,
        sea_level: 1025.97,
        grnd_level: 1023.91,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.31, deg: 198 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 00:00:00"
    },
    {
      dt: 1522206000,
      main: {
        temp: 18.99,
        temp_min: 18.99,
        temp_max: 18.99,
        pressure: 1024.8,
        sea_level: 1026.85,
        grnd_level: 1024.8,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.38, deg: 195.004 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 03:00:00"
    },
    {
      dt: 1522216800,
      main: {
        temp: 25.64,
        temp_min: 25.64,
        temp_max: 25.64,
        pressure: 1026.01,
        sea_level: 1027.98,
        grnd_level: 1026.01,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.68, deg: 214.001 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 06:00:00"
    },
    {
      dt: 1522227600,
      main: {
        temp: 27.88,
        temp_min: 27.88,
        temp_max: 27.88,
        pressure: 1024.77,
        sea_level: 1026.57,
        grnd_level: 1024.77,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.96, deg: 287.5 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 09:00:00"
    },
    {
      dt: 1522238400,
      main: {
        temp: 27.41,
        temp_min: 27.41,
        temp_max: 27.41,
        pressure: 1022.74,
        sea_level: 1024.65,
        grnd_level: 1022.74,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.18, deg: 308.502 },
      rain: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 12:00:00"
    },
    {
      dt: 1522249200,
      main: {
        temp: 24.29,
        temp_min: 24.29,
        temp_max: 24.29,
        pressure: 1023.26,
        sea_level: 1025.22,
        grnd_level: 1023.26,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.17, deg: 295.5 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 15:00:00"
    },
    {
      dt: 1522260000,
      main: {
        temp: 21.06,
        temp_min: 21.06,
        temp_max: 21.06,
        pressure: 1024.22,
        sea_level: 1026.32,
        grnd_level: 1024.22,
        humidity: 100,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.6, deg: 284.504 },
      rain: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 18:00:00"
    }
  ],
  city: {
    id: 292223,
    name: "Dubai",
    coord: { lat: 25.2684, lon: 55.2962 },
    country: "AE",
    population: 1137347
  }
};

var Tokio = {
  cod: "200",
  message: 0.0023,
  cnt: 40,
  list: [
    {
      dt: 1521838800,
      main: {
        temp: 6.41,
        temp_min: 4.75,
        temp_max: 6.41,
        pressure: 947.69,
        sea_level: 1025.17,
        grnd_level: 947.69,
        humidity: 85,
        temp_kf: 1.66
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" }
      ],
      clouds: { all: 44 },
      wind: { speed: 6.91, deg: 194.5 },
      rain: { "3h": 0.16 },
      snow: { "3h": 0.001 },
      sys: { pod: "d" },
      dt_txt: "2018-03-23 21:00:00"
    },
    {
      dt: 1521849600,
      main: {
        temp: 7.01,
        temp_min: 5.76,
        temp_max: 7.01,
        pressure: 946,
        sea_level: 1023.34,
        grnd_level: 946,
        humidity: 75,
        temp_kf: 1.24
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 48 },
      wind: { speed: 3.8, deg: 184.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 00:00:00"
    },
    {
      dt: 1521860400,
      main: {
        temp: 3.68,
        temp_min: 2.86,
        temp_max: 3.68,
        pressure: 945.26,
        sea_level: 1023.17,
        grnd_level: 945.26,
        humidity: 89,
        temp_kf: 0.83
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 88 },
      wind: { speed: 3.01, deg: 196 },
      rain: { "3h": 0.13 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-24 03:00:00"
    },
    {
      dt: 1521871200,
      main: {
        temp: 1.56,
        temp_min: 1.15,
        temp_max: 1.56,
        pressure: 944.01,
        sea_level: 1022.32,
        grnd_level: 944.01,
        humidity: 95,
        temp_kf: 0.41
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 92 },
      wind: { speed: 2.21, deg: 134.501 },
      rain: { "3h": 0.535 },
      snow: { "3h": 0.483 },
      sys: { pod: "n" },
      dt_txt: "2018-03-24 06:00:00"
    },
    {
      dt: 1521882000,
      main: {
        temp: 0.74,
        temp_min: 0.74,
        temp_max: 0.74,
        pressure: 942.02,
        sea_level: 1020.42,
        grnd_level: 942.02,
        humidity: 100,
        temp_kf: 0
      },
      weather: [{ id: 601, main: "Snow", description: "snow", icon: "13n" }],
      clouds: { all: 92 },
      wind: { speed: 1.86, deg: 27.5021 },
      rain: {},
      snow: { "3h": 4.12025 },
      sys: { pod: "n" },
      dt_txt: "2018-03-24 09:00:00"
    },
    {
      dt: 1521892800,
      main: {
        temp: 0.19,
        temp_min: 0.19,
        temp_max: 0.19,
        pressure: 943.03,
        sea_level: 1021.66,
        grnd_level: 943.03,
        humidity: 97,
        temp_kf: 0
      },
      weather: [{ id: 601, main: "Snow", description: "snow", icon: "13n" }],
      clouds: { all: 92 },
      wind: { speed: 3.87, deg: 260.006 },
      rain: {},
      snow: { "3h": 2.67625 },
      sys: { pod: "n" },
      dt_txt: "2018-03-24 12:00:00"
    },
    {
      dt: 1521903600,
      main: {
        temp: 0.01,
        temp_min: 0.01,
        temp_max: 0.01,
        pressure: 944.86,
        sea_level: 1023.76,
        grnd_level: 944.86,
        humidity: 99,
        temp_kf: 0
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" }
      ],
      clouds: { all: 88 },
      wind: { speed: 6.17, deg: 208.001 },
      rain: {},
      snow: { "3h": 0.41125 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 15:00:00"
    },
    {
      dt: 1521914400,
      main: {
        temp: 1.67,
        temp_min: 1.67,
        temp_max: 1.67,
        pressure: 946.85,
        sea_level: 1025.09,
        grnd_level: 946.85,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        { id: 600, main: "Snow", description: "light snow", icon: "13d" }
      ],
      clouds: { all: 64 },
      wind: { speed: 6.62, deg: 217.52 },
      rain: {},
      snow: { "3h": 0.06625 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 18:00:00"
    },
    {
      dt: 1521925200,
      main: {
        temp: 4.85,
        temp_min: 4.85,
        temp_max: 4.85,
        pressure: 947.52,
        sea_level: 1025.24,
        grnd_level: 947.52,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 12 },
      wind: { speed: 6.56, deg: 222.001 },
      rain: {},
      snow: { "3h": 0.0050000000000008 },
      sys: { pod: "d" },
      dt_txt: "2018-03-24 21:00:00"
    },
    {
      dt: 1521936000,
      main: {
        temp: 4.53,
        temp_min: 4.53,
        temp_max: 4.53,
        pressure: 947.53,
        sea_level: 1025.08,
        grnd_level: 947.53,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 48 },
      wind: { speed: 4.81, deg: 213.006 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 00:00:00"
    },
    {
      dt: 1521946800,
      main: {
        temp: 0.94,
        temp_min: 0.94,
        temp_max: 0.94,
        pressure: 947.53,
        sea_level: 1025.88,
        grnd_level: 947.53,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 44 },
      wind: { speed: 2.81, deg: 182.504 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 03:00:00"
    },
    {
      dt: 1521957600,
      main: {
        temp: -2.53,
        temp_min: -2.53,
        temp_max: -2.53,
        pressure: 947.31,
        sea_level: 1026.18,
        grnd_level: 947.31,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 20 },
      wind: { speed: 1.82, deg: 116.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 06:00:00"
    },
    {
      dt: 1521968400,
      main: {
        temp: -5.55,
        temp_min: -5.55,
        temp_max: -5.55,
        pressure: 946.93,
        sea_level: 1026.12,
        grnd_level: 946.93,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 12 },
      wind: { speed: 1.28, deg: 30.5036 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 09:00:00"
    },
    {
      dt: 1521979200,
      main: {
        temp: -6.33,
        temp_min: -6.33,
        temp_max: -6.33,
        pressure: 946.99,
        sea_level: 1026.55,
        grnd_level: 946.99,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.52, deg: 63.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-25 12:00:00"
    },
    {
      dt: 1521990000,
      main: {
        temp: -4.09,
        temp_min: -4.09,
        temp_max: -4.09,
        pressure: 948.1,
        sea_level: 1027.58,
        grnd_level: 948.1,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 64 },
      wind: { speed: 1.3, deg: 136.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 15:00:00"
    },
    {
      dt: 1522000800,
      main: {
        temp: 4.36,
        temp_min: 4.36,
        temp_max: 4.36,
        pressure: 949.71,
        sea_level: 1027.8,
        grnd_level: 949.71,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.86, deg: 227.501 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 18:00:00"
    },
    {
      dt: 1522011600,
      main: {
        temp: 6.24,
        temp_min: 6.24,
        temp_max: 6.24,
        pressure: 950.05,
        sea_level: 1027.61,
        grnd_level: 950.05,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.46, deg: 242.504 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-25 21:00:00"
    },
    {
      dt: 1522022400,
      main: {
        temp: 5.34,
        temp_min: 5.34,
        temp_max: 5.34,
        pressure: 950.61,
        sea_level: 1028.29,
        grnd_level: 950.61,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 80 },
      wind: { speed: 5.25, deg: 257.505 },
      rain: { "3h": 0.025 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 00:00:00"
    },
    {
      dt: 1522033200,
      main: {
        temp: 1.18,
        temp_min: 1.18,
        temp_max: 1.18,
        pressure: 951.9,
        sea_level: 1030.65,
        grnd_level: 951.9,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.96, deg: 232.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 03:00:00"
    },
    {
      dt: 1522044000,
      main: {
        temp: -1.9,
        temp_min: -1.9,
        temp_max: -1.9,
        pressure: 954.05,
        sea_level: 1033.57,
        grnd_level: 954.05,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.88, deg: 263.503 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 06:00:00"
    },
    {
      dt: 1522054800,
      main: {
        temp: -3.84,
        temp_min: -3.84,
        temp_max: -3.84,
        pressure: 955.61,
        sea_level: 1035.67,
        grnd_level: 955.61,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.27, deg: 248.001 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 09:00:00"
    },
    {
      dt: 1522065600,
      main: {
        temp: -5.04,
        temp_min: -5.04,
        temp_max: -5.04,
        pressure: 957.21,
        sea_level: 1037.71,
        grnd_level: 957.21,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02n" }
      ],
      clouds: { all: 8 },
      wind: { speed: 4.06, deg: 221.001 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-26 12:00:00"
    },
    {
      dt: 1522076400,
      main: {
        temp: -3.7,
        temp_min: -3.7,
        temp_max: -3.7,
        pressure: 958.96,
        sea_level: 1039.53,
        grnd_level: 958.96,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 20 },
      wind: { speed: 4.32, deg: 203.5 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 15:00:00"
    },
    {
      dt: 1522087200,
      main: {
        temp: 2.62,
        temp_min: 2.62,
        temp_max: 2.62,
        pressure: 960.07,
        sea_level: 1039.31,
        grnd_level: 960.07,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: { all: 32 },
      wind: { speed: 5.72, deg: 203.004 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 18:00:00"
    },
    {
      dt: 1522098000,
      main: {
        temp: 5.28,
        temp_min: 5.28,
        temp_max: 5.28,
        pressure: 960.11,
        sea_level: 1038.66,
        grnd_level: 960.11,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02d" }
      ],
      clouds: { all: 8 },
      wind: { speed: 7.01, deg: 213.003 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-26 21:00:00"
    },
    {
      dt: 1522108800,
      main: {
        temp: 5.95,
        temp_min: 5.95,
        temp_max: 5.95,
        pressure: 959.68,
        sea_level: 1038.08,
        grnd_level: 959.68,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 32 },
      wind: { speed: 6.92, deg: 221 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 00:00:00"
    },
    {
      dt: 1522119600,
      main: {
        temp: 3.63,
        temp_min: 3.63,
        temp_max: 3.63,
        pressure: 960.07,
        sea_level: 1039.03,
        grnd_level: 960.07,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 68 },
      wind: { speed: 4.91, deg: 224.007 },
      rain: { "3h": 0.02 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 03:00:00"
    },
    {
      dt: 1522130400,
      main: {
        temp: 2.3,
        temp_min: 2.3,
        temp_max: 2.3,
        pressure: 960.26,
        sea_level: 1039.56,
        grnd_level: 960.26,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" }
      ],
      clouds: { all: 56 },
      wind: { speed: 4.78, deg: 219.501 },
      rain: { "3h": 0.13 },
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 06:00:00"
    },
    {
      dt: 1522141200,
      main: {
        temp: 0.4,
        temp_min: 0.4,
        temp_max: 0.4,
        pressure: 959.99,
        sea_level: 1039.46,
        grnd_level: 959.99,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02n" }
      ],
      clouds: { all: 8 },
      wind: { speed: 5.11, deg: 217.001 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 09:00:00"
    },
    {
      dt: 1522152000,
      main: {
        temp: 0.46,
        temp_min: 0.46,
        temp_max: 0.46,
        pressure: 959.87,
        sea_level: 1039.46,
        grnd_level: 959.87,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 76 },
      wind: { speed: 5.21, deg: 216.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-27 12:00:00"
    },
    {
      dt: 1522162800,
      main: {
        temp: 1.21,
        temp_min: 1.21,
        temp_max: 1.21,
        pressure: 960.11,
        sea_level: 1039.45,
        grnd_level: 960.11,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 20 },
      wind: { speed: 5.16, deg: 224.003 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 15:00:00"
    },
    {
      dt: 1522173600,
      main: {
        temp: 7.74,
        temp_min: 7.74,
        temp_max: 7.74,
        pressure: 960.26,
        sea_level: 1038.55,
        grnd_level: 960.26,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 12 },
      wind: { speed: 6.65, deg: 240.002 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 18:00:00"
    },
    {
      dt: 1522184400,
      main: {
        temp: 11.3,
        temp_min: 11.3,
        temp_max: 11.3,
        pressure: 959.79,
        sea_level: 1037.12,
        grnd_level: 959.79,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 7.46, deg: 255.001 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-27 21:00:00"
    },
    {
      dt: 1522195200,
      main: {
        temp: 12.03,
        temp_min: 12.03,
        temp_max: 12.03,
        pressure: 959.22,
        sea_level: 1036.38,
        grnd_level: 959.22,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 5.71, deg: 258.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 00:00:00"
    },
    {
      dt: 1522206000,
      main: {
        temp: 6.99,
        temp_min: 6.99,
        temp_max: 6.99,
        pressure: 959.95,
        sea_level: 1037.91,
        grnd_level: 959.95,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 12 },
      wind: { speed: 3.93, deg: 245.504 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 03:00:00"
    },
    {
      dt: 1522216800,
      main: {
        temp: 3.64,
        temp_min: 3.64,
        temp_max: 3.64,
        pressure: 960.68,
        sea_level: 1039.41,
        grnd_level: 960.68,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.06, deg: 243.501 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 06:00:00"
    },
    {
      dt: 1522227600,
      main: {
        temp: 1.08,
        temp_min: 1.08,
        temp_max: 1.08,
        pressure: 961.3,
        sea_level: 1040.48,
        grnd_level: 961.3,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 20 },
      wind: { speed: 4.11, deg: 216.5 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 09:00:00"
    },
    {
      dt: 1522238400,
      main: {
        temp: 0.21,
        temp_min: 0.21,
        temp_max: 0.21,
        pressure: 962.2,
        sea_level: 1041.71,
        grnd_level: 962.2,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 32 },
      wind: { speed: 3.58, deg: 212.002 },
      rain: {},
      snow: {},
      sys: { pod: "n" },
      dt_txt: "2018-03-28 12:00:00"
    },
    {
      dt: 1522249200,
      main: {
        temp: 0.64,
        temp_min: 0.64,
        temp_max: 0.64,
        pressure: 963.36,
        sea_level: 1042.89,
        grnd_level: 963.36,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "02d" }
      ],
      clouds: { all: 8 },
      wind: { speed: 1.87, deg: 200.5 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 15:00:00"
    },
    {
      dt: 1522260000,
      main: {
        temp: 8.41,
        temp_min: 8.41,
        temp_max: 8.41,
        pressure: 964.56,
        sea_level: 1042.53,
        grnd_level: 964.56,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.3, deg: 208.004 },
      rain: {},
      snow: {},
      sys: { pod: "d" },
      dt_txt: "2018-03-28 18:00:00"
    }
  ],
  city: {
    id: 5808453,
    name: "Tokio",
    coord: { lat: 47.2096, lon: -118.2697 },
    country: "US",
    population: 1673
  }
};
