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

// var testCase1 = "http://en.wikipedia.org/wiki/Procter_&_Gamble";
// console.log(isValidURL(testCase1)); // return true

// var testCase2 = "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707";
// console.log(isValidURL(testCase2)); // return true

// var testCase3 = "https://sdfasd";
// console.log(isValidURL(testCase3)); // return false

// var testCase4 = "dfdsfdsfdfdsfsdfs";
// console.log(isValidURL(testCase4)); // return false

// var testCase5 = "magnet:?xt=urn:btih:123";
// console.log(isValidURL(testCase5)); // return false

// var testCase6 = "https://stackoverflow.com/";
// console.log(isValidURL(testCase6)); // return true

// var testCase7 = "https://w";
// console.log(isValidURL(testCase7)); // return false

// var testCase8 = "https://sdfasdp.ppppppppppp";
// console.log(isValidURL(testCase8)); // return false


/*
event listener
*/
artProcess.addEventListener('click', submitForm);