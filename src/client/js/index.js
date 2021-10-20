// Imported files and functions
import {isValidURL} from './validateURL'
import {printResult} from './printResults'
import {createAndDisplayErrorMsg} from './printResults'

console.log("js added");
//Vars for user input
const articleURL = document.getElementById('artURL');


/*
* sendURLToServer ASYNC FUNCTION
* @description: Makes a post request to the server to
* 				post data.
* @param {string} url: url to post to,
* @param  {object} data: data that is to be posted
* @returns {json} response: response from the server
*/
const sendURLToServer = async (url = '', data = {}) => {
	console.log("Enter sendURLToServer fucntion");
	const response = await fetch (url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		});
		try {
			const results = await response.json();
			console.log(results);
			printResult(results);

		}catch(error){
			console.log("error", error);
		}
}

/*
* submitForm FUNCTION
* @description: Prevents default submit of the generate button
*				Calls sendURLToServer funtion
*/
function submitForm(e) {
    e.preventDefault();
    const arturl = artURL.value;
    if (arturl == ""){
    	console.log('Enter a URL');
    }
    else {
    	if (Client.isValidURL(arturl)) {
	    	console.log("value entered", arturl);
	    	const data = {
	    		arturl
	    	}
	  		sendURLToServer('http://localhost:3000/artProcess', data)
	  	}
	  	else {
	  		console.log("Please enter a valid URL");
	  		const errorMsg = "Please enter a valid URL."
	  		const error1 = document.getElementById('errorResult1');
			const errMsg1 = document.getElementById('errorMsg1')
	  		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	  	}
	}
}


/*
event listener
*/
// artProcess.addEventListener('click', submitForm);


// Exported functions
export { submitForm }
export { sendURLToServer }
