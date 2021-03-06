// JS for printing messages and results to the screen

/*
* printResult FUNCTION
* @description: Print analysis response in table form on client side
* @param {json} analysisResponse: json with result to be printed
* @returns {json} response: response from the server
*/
function printResult(analysisResponse) {
	// console.log('printResult statys');
	const resultSection = document.getElementById('resultSection');
	const resultTable = document.getElementById('resultTable');
	const resultTableBody = document.getElementById('resultTableBody');
	const error1 = document.getElementById('errorResult1');
	const errMsg1 = document.getElementById('errorMsg1')

	// console.log(analysisResponse.status.code)
	if (analysisResponse.status.code === '0') {
		refreshTable(resultTableBody);
		// console.log('enter if 1');
		const tabFragment = document.createDocumentFragment();

		if (analysisResponse.model) {
			const newRow = createTableRow('Model', analysisResponse.model)
			tabFragment.appendChild(newRow);
		}
		if (analysisResponse.score_tag) {
			const newRow = createTableRow('Score Tag', analysisResponse.score_tag)
			tabFragment.appendChild(newRow);
		}
		if (analysisResponse.agreement) {
			const newRow = createTableRow('Agreement', analysisResponse.agreement)
			tabFragment.appendChild(newRow);
		}
		if (analysisResponse.subjectivity) {
			const newRow = createTableRow('Subjectivity', analysisResponse.subjectivity)
			tabFragment.appendChild(newRow);
		}
		if (analysisResponse.confidence) {
			const newRow = createTableRow('Confidence', analysisResponse.confidence)
			tabFragment.appendChild(newRow);
		}
		if (analysisResponse.irony) {
			const newRow = createTableRow('Irony', analysisResponse.irony)
			tabFragment.appendChild(newRow);
		}
		resultTableBody.appendChild(tabFragment);
		resultSection.classList.remove("hide");
		resultTable.classList.remove("hide");
		error1.classList.add('hide');
		errMsg1.classList.add('hide');
	}

	else if (analysisResponse.status.code === '105') {
		const errorMsg = "Resource access denied. \nThe link you" +
							" have provided denied permissionto" +
						 	" analyse its content.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
	else if (analysisResponse.status.code === '103') {
		const errorMsg = "Request too large. \nThe article you are" +
							" trying to analyse is bigger than" +
							" 50000 words. Please provide a smaller" +
							" article.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
	else if (analysisResponse.status.code === '204') {
		const errorMsg = "Resource not compatible for the language" +
							" automatically identified for the" +
							" text. \nLanguage automatically detected" +
							" does not match analytical models.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
	else if (analysisResponse.status.code === '205') {
		const errorMsg = "Language not supported." +
						 	"\nLanguage detected not supported by" +
						 	" the API.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
	else if (analysisResponse.status.code === '212') {
		const errorMsg = "No content to analyze." +
						 	"\nNo content available on the url" +
						 	" provided. Please use a different url.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
	else {
		const errorMsg = "Something went wrong. Please try again" +
							" after sometime.";
		createAndDisplayErrorMsg(errorMsg, errMsg1, error1);
	}
}


/*
* createTableRow FUNCTION
* @description: Populate table data in a table row with 2 columns
* @param {string} col1: string content for table colum 1
* @param  {string} col2: string content for table colum 2
*/
function createTableRow(col1, col2) {

	// console.log('inputData', col1, col2);
	const table__row = document.createElement('tr');
	const table__data__1 = document.createElement('td');
	table__data__1.innerText = col1;
	const table__data__2 = document.createElement('td');
	table__data__2.innerText = col2;
	table__row.appendChild(table__data__1);
	table__row.appendChild(table__data__2);

	return table__row
}


/*
* createAndDisplayErrorMsg FUNCTION
* @description: Display error message on client side and hide any
* 				table if present
* @param {string} errTxt: error text message content,
* @param  {string} errPara: document para element where the error
*							message is displayed
* @param  {string} errDiv: document div element where error para is
*							nested
*/
function createAndDisplayErrorMsg(errTxt, errPara, errDiv) {

	errPara.innerText = errTxt;
	errDiv.classList.remove('hide');
	errPara.classList.remove('hide');
	resultSection.classList.remove("hide");
	resultTable.classList.add("hide");
}


/*
* refreshTable FUNCTION
* @description: Delete all children elements of table element
* @param {document.elementNode} telement: Document element node
*/
function refreshTable(telement) {
	while (telement.firstChild) {
		telement.removeChild(telement.lastChild);
	}
}


// Functions that are exported
export{printResult};
export{createTableRow};
export{createAndDisplayErrorMsg};
export{refreshTable};