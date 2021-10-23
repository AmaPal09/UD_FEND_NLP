/**
 * @jest-environment jsdom
 */


import {sendURLToServer} from '../src/client/js/index'
import {submitForm} from '../src/client/js/index'


describe("Submit Form", ()=> {
	test("Validate Submit Form fuction", () => {
		expect(submitForm).toBeDefined();
	});
});


describe("send URL to Server", ()=> {
	test("Send URL to server function", () => {
		expect(sendURLToServer).toBeDefined();
	});
});


// describe("Submit Form", ()=> {

// 	document.body.innerHTML = `
// 		<div class="article__process__form content__div">
// 			<form class="article__form" onsubmit="return Client.submitForm(event)">
// 				<label for="artURL">Article to be processed:</label> <br>
// 				<input type="text" id="artURL" name="artURL" value="" placeholder="Please enter the URL here"> <br>
// 				<button id="artProcess" type="submit" class="btn submitBtn"
// 				 onclick="return Client.submitForm(event)" onsubmit="return Client.submitForm(event)">
// 					Analyse Article
// 				</button>
// 			</form>
// 		</div>

// 		<section id="resultSection" class="analysis__result hide">
// 			<div class="resultDetail">
// 				<div class="error hide" id="errorResult1">
// 					<h2 class="sub__heading">Error Occured</h2>
// 					<p class="error__msg errColor" id="errorMsg1">
// 					</p>
// 				</div>
// 			</div>
// 		</section>
// 	`

// 	let articleURL = document.getElementById('artURL');
// 	const errMsg = document.getElementById("errorMsg1");
// 	const subBtn = document.querySelector(".submitBtn");


// 	test("Throws error when input is blank", ()=> {
// 		artURL.value = " ";
// 		subBtn.onsubmit();
// 		expect(errMsg.innerText).toBe("Enter a URL");

// 	});

// 	test("Throw error when input is invalid", ()=> {
// 		artURL.value = "https://sdfasd";
// 		subBtn.onsubmit();
// 		expect(errMsg.innerText).toBe("Please enter a valid URL");
// 	});
// });

