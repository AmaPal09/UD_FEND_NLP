/**
 * @jest-environment jsdom
 */

import {printResult} from '../src/client/js/printResults'
import {createTableRow} from '../src/client/js/printResults'
import {refreshTable} from '../src/client/js/printResults'
import {createAndDisplayErrorMsg} from '../src/client/js/printResults'


// Test printResult function
describe("Print Results", () => {
	document.body.innerHTML =`
		<section id="resultSection" class="analysis__result hide">
			<div class="resultDetail">
				<div class="error hide" id="errorResult1">
					<h2 class="sub__heading">Error Occured</h2>
					<p class="error__msg errColor" id="errorMsg1">
					</p>
				</div>
				<table class="result__table hide" id="resultTable">
					<caption class="sub__heading">
						Sentiment Analysis Result
					</caption>
					<thead class="result__table__head">
						<th class="result__table__heading">Sentiment</th>
						<th class="result__table__heading">Analytical findings</th>
					</thead>
					<tbody class="result__table__body" id="resultTableBody">
					</tbody>
				</table>
			</div>
		</section>
	`

	//test function is valid
	test("Is a valid function", () => {
		expect(printResult).toBeDefined();
	});

	//test function prints results in table format
	test("Print analysis results in Table Format", () => {

		const testAnalysisObject = {
			status: {
				code: "0",
				credits: "15",
				msg: "OK",
				remaining_credits: "19724",
			},
			model: "general_en",
			score_tag: "P",
			agreement: "DISAGREEMENT",
			subjectivity: "SUBJECTIVE",
		};
		const tableBody = document.getElementById("resultTableBody");
		const rSection = document.getElementById("resultSection");
		const rTable = document.getElementById("resultTable");
		const errorDiv = document.getElementById("errorResult1");

		//call function to be tested
		printResult(testAnalysisObject);

		//test cases
		expect(tableBody.childElementCount).toBe(4);
		expect(rSection.classList).not.toContain("hide");
		expect(rTable.classList).not.toContain("hide");
		expect(errorDiv.classList).toContain("hide");

		// expect(createTableRow).toHaveBeenCalled();
	});

	//test function prints error message for error status
	test("Prints error message when status code is not 0", () => {

		let testAnalysisError = {
			status: {
				code: "1",
				credits: "15",
				msg: "Not OK",
				remaining_credits: "19724",
			},
			model: "general_en",
			score_tag: "P",
			agreement: "DISAGREEMENT",
			subjectivity: "SUBJECTIVE",
		};
		const tableBody = document.getElementById("resultTableBody");
		const rSection = document.getElementById("resultSection");
		const rTable = document.getElementById("resultTable");
		const errorDiv = document.getElementById("errorResult1");
		const errorMsg1 = document.getElementById("errorMsg1");

		//call function to be tested
		printResult(testAnalysisError);

		//test cases
		expect(rSection.classList).not.toContain("hide");
		expect(rTable.classList).toContain("hide");
		expect(errorDiv.classList).not.toContain("hide");
		expect(errorMsg1.innerText).toBe("Something went wrong. " +
			"Please try again after sometime.");

	});


});


// Test createTableRow Function
describe("Create Table Row", () => {
	test("Create a Table row element", () => {

		expect(createTableRow).toBeDefined();
		expect(createTableRow("c1","c2").tagName).toBe("TR");

	});
});


// Test refreshTable Function
describe("Refresh Table", ()=> {
	test("Refresh table by deleting all rows in table body", ()=> {
		//Define HTML elements for DOM testing
		document.body.innerHTML =
			`<table class="result__table hide" id="resultTable">
				<thead class="result__table__head">
					<th class="result__table__heading">Sentiment</th>
					<th class="result__table__heading">Analytical findings</th>
				</thead>
					<tbody class="result__table__body" id="resultTableBody">
						<tr><td>Score Tag</td><td>P</td></tr>
						<tr><td>Agreement</td><td>DISAGREEMENT</td></tr>
					</tbody>
			</table>`

		const telement = document.getElementById('resultTableBody');
		refreshTable(telement);

		expect(telement.outerHTML).toBe('<tbody class="result__table__body" id="resultTableBody"></tbody>');
		expect(telement.childElementCount).toBe(0);
	});
})


// Test createAndDisplayErrorMsg Function
describe("Create and Display Error Message", () => {
	test("Add error message to error result elements and display it" +
		" to the screen", ()=> {

		//Define HTML elements for DOM testing
		document.body.innerHTML =
			`<section id="resultSection" class="analysis__result hide">
				<div class="resultDetail">
					<div class="error hide" id="errorResult1">
						<h2 class="sub__heading">Error Occured</h2>
						<p class="error__msg errColor" id="errorMsg1">
						</p>
					</div>
					<table class="result__table hide" id="resultTable">
					</table>
				</div>
			</section>`;

		const errorPara = document.getElementById("errorMsg1");
		const errorDiv = document.getElementById("errorResult1");
		const resultTable = document.getElementById("resultTable");
		const resultSection = document.getElementById("resultSection");

		createAndDisplayErrorMsg("Something went wrong here",
								errorPara, errorDiv);

		expect(errorPara.innerText).toBe("Something went wrong here");
		expect(errorDiv.classList).not.toContain("hide");
		expect(resultSection.classList).not.toContain("hide");
		expect(resultTable.classList).toContain("hide");

	});
});