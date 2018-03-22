var express = require('express'); 
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const fileName = "./data.json";


app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/weather/:cityName', function (req, res) { 

	const cityName = req.params.cityName;
	
	console.log(cityName);
	fs.readFile(fileName, (err,data) => {
		if (err) {
			res.status(500).send("500");
		} else {
			const listCity = JSON.parse(data);
			const city = listCity.data.find((city) => { return (city.city.name == cityName) });
			if( city ) {
				res.json(city.weather);
			} else {
				res.status(404).send("404");
			}
		}
	});
});

app.post('/weather', (request, response) => {
	console.log(request.body);
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        let weather = JSON.parse(data);
        let weatherKeys = Object.keys(weather);
        let requestBodyKeys = Object.keys(request.body);
        let weatherKey = requestBodyKeys.find(item => {
            return weatherKeys.includes(item);
        });
 
        if(!weatherKey){
            weather.data.push(request.body[requestBodyKeys[0]]);
            fs.writeFile('data.json', JSON.stringify(weather), (err) => {
                if (err) throw err;
                response.send("ku");
            });
        } else {
            console.log("ERROR");
        }
    });
});
app.listen(3000, function () {
	 console.log('Example app listening on port 3000!'); 
});
