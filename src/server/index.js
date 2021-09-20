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
app.use(express.static('src/client'));


// Keep the server running and listen for activity
app.listen(port, ()=>{
	console.log(`Server running on port: ${port}`);
});


//Launch the homepage
app.get('/', (req,res) => {
	console.log("Get request");
	res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
});

// Process the form
app.post('/artProcess', (req, res) => {
	console.log("req.body from client ===", req.body);
	// const articleURL = req.body;
	// const analysisResult = "You entered this " + articleURL + "URL";
	// console.log(analysisResult);
	const successMsg = "Post request receieved successfully";
	const results = {
		successMsg
	};
	res.send(results);
})