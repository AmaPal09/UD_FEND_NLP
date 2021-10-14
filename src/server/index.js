//Server side JS code
/*
* ALL REQUIRED PACKAGES
*/
const express = require('express'); //web framework - express
const cors = require('cors'); //Cross-Origin Resource Sharing (CORS)
const bodyParser = require('body-parser'); //Body parser to parse JSON
const dotenv = require('dotenv'); //Environment variables
const fetch = require('node-fetch'); //fetch command to access API

dotenv.config(); //configure env variables
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


/*
* GET METHOD
* @description: Launch the homepage
* @param req: request with details of method and information about data requested
* @param res: response sent with details of status and data
*/
app.get('/', (req,res) => {
	console.log("Get request");
	// res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
	res.sendFile('dist/index.html');
});


/*
* POST METHOD
* @description: Process user input form to obtain sentiment analysis for it and posts analysis 					for requesting route
* @param req: request with details of method and information about data requested
* @param res: response sent with details of status and data
*/
app.post('/artProcess', async(req, res) => {
	console.log("req.body from client ===", req.body);
	const reqData = req.body;

	// Call fetchAnalysis function to perform the fetch request
	const analysisResponse = await fetchAnalysis(reqData.arturl)
	try {
		sendResponse(analysisResponse, res);
	}catch(error) {
		console.log('error', error);
	}
});


/*
* sendResponse FUNCTION
* @description: sends analysis response to client
* @param {json} analysisResponse: sentiment analysis for provided url in json format
* @param res: response sent with details of status and data
*/
function sendResponse(analysisResponse, res) {
	console.log("sendResponse function");
	// console.log("analysis Response: ", analysisResponse);
	const successMsg = "Post request receieved successfully";
	const results = {
		successMsg
	};
	res.send(results);
}


/*
* fetchAnalysis FUNCTION
* @description: Makes a fetch request to sentiment analysis API
* @param {string} inurl: url for which sentiment analysis is requested
* @return {json} newData: sentiment analysis response received from API
*/
const fetchAnalysis = async (inurl = '') => {
	console.log("enter fetchAnalysis");
	console.log(inurl);

	// console.log(`${SENTIMENT_API}?key=${SENTIMENT_API_KEY}&url=${inurl}&lang=auto`);
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