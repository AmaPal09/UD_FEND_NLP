// Gloal variables


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
    	if (isValidURL(arturl)) {
	    	console.log("value entered", arturl);
	    	const data = {
	    		arturl
	    	}
	  		sendURLToServer('/artProcess', data)
	  	}
	  	else {
	  		console.log("Please enter a valid URL");
	  	}
	}
}


/*
* isValidURL FUNCTION
* @description: Validates if the user input is an URL
* @param {string} inputURL: url provided by the user,
* @returns {Boolean}: true if it an URL, false if it is not
*/
function isValidURL(inputURL) {
	console.log("Validate URL: ", inputURL);
 	const pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?'+ // port
	'(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
	'(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(inputURL);
}


/*
event listener
*/
artProcess.addEventListener('click', submitForm);

export { isValidURL }
export { submitForm }
export { sendURLToServer }