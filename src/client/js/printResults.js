function printResult(analysisResponse) {
	console.log('printResult statys');
	const resultTable = document.getElementById('result__table');
	console.log(analysisResponse.status.code)
	if (analysisResponse.status.code === '0') {
		console.log('enter if 1');
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
		result__table.appendChild(tabFragment);
	}
}


function createTableRow(col1, col2) {
	console.log('inputData', col1, col2);
	const table__row = document.createElement('tr');
	const table__data__1 = document.createElement('td');
	table__data__1.innerText = col1;
	const table__data__2 = document.createElement('td');
	table__data__2.innerText = col2;
	table__row.appendChild(table__data__1);
	table__row.appendChild(table__data__2);

	return table__row
}


export{printResult};
export{createTableRow};
