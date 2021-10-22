// JS for vaidating URL

/*
* isValidURL FUNCTION
* @description: Validates if the user input is an URL
* @param {string} inputURL: url provided by the user,
* @returns {Boolean}: true if it an URL, false if it is not
*/
function isValidURL(inputURL) {
	// console.log("Validate URL: ", inputURL);
 	const pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?'+ // port
	'(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
	'(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(inputURL);
}


// Functions to be exported
export {isValidURL}