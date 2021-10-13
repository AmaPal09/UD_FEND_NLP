//Server side JS code
/*
* ALL REQUIRED PACKAGES
*/
//web framework - express
const express = require('express');
//Cross-Origin Resource Sharing (CORS)
const cors = require('cors');
//Body parser to parse JSON
const bodyParser = require('body-parser');
//Environment variables
const dotenv = require('dotenv');
//fetch command to access API
const fetch = require('node-fetch');

//configure env variables
dotenv.config();
// GLOBAL VARIABLES
const SENTIMENT_API = 'https://api.meaningcloud.com/sentiment-2.1';
const SENTIMENT_API_KEY = process.env.SENTIMENT_API_KEY;

// Start and instance of the app
const app = express();


//Configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// User cors for cross origin allowance. Use cors middleware
app.use(cors());

/*
* SERVER SET-UP
*/
// Set a port to run the server on
const port = 3000;

// Serve static files from website folder and connect them with the server
// app.use(express.static('src/client'));
app.use(express.static('dist'));


// Keep the server running and listen for activity
app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`);
});


//Launch the homepage
app.get('/', (req,res) => {
	console.log("Get request");
	// res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
	res.sendFile('dist/index.html');
});

// Process the form
app.post('/artProcess', async(req, res) => {
	console.log("req.body from client ===", req.body);
	// const articleURL = req.body;
	// const analysisResult = "You entered this " + articleURL + "URL";
	// console.log(analysisResult);
	const reqData = req.body;
	console.log('url', reqData);

	const analysisResponse = await fetchAnalysis(reqData.arturl)
	try {
		sendResponse(analysisResponse, res);
	}catch(error) {
		console.log('error', error);
	}


});


function sendResponse(analysisResponse, res) {
	console.log("sendResponse function");
	// console.log("analysis Response: ", analysisResponse);
	const successMsg = "Post request receieved successfully";
	const results = {
		successMsg
	};
	res.send(results);
}


const fetchAnalysis = async (inurl = '') => {
	console.log("enter fetchAnalysis");
	console.log(inurl);
	const formData = {
		// key: KEY,
		url: inurl,
		lang: 'auto'
	}

	const requestOptions = {
		method: 'POST',
		body: formData,
		redirect: 'follow'
	};

	// const response = await fetch(API, requestOptions)
	// const response = await fetch(API, {method: 'POST', body: formData})
	console.log(`${SENTIMENT_API}?key=${SENTIMENT_API_KEY}&url=${inurl}&lang=auto`);
	const response = await fetch( `${SENTIMENT_API}?key=${SENTIMENT_API_KEY}&url=${inurl}&lang=auto`, {method: 'POST'})

	try {
		console.log("Processing response");
		const newData = await response.json();
		console.log(newData.status);
		console.log(newData.model);
		console.log(newData.score_tag);
		console.log(newData.agreement);
		console.log(newData.subjectivity);
		console.log(newData.confidence);
		console.log(newData.irony);
		return newData;
	}catch(error) {
		console.log("error", error);
	}
}