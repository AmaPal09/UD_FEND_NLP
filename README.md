# Weather Journal App Project

## Table of contents
* [Description](#description)
* [Project Requirements](#project-requirements)
* [Demo](#demo)
* [Code Examples](#code-examples)
* [Usage](#usage)
* [Testing](#testing)
* [Future Enhancements](#future-enhancements)
* [Development TODO](#Development-todo)
* [References](#Reference-material)


## Description
### Languages used
- JS
- CSS
- HTML
- SCSS
### Tools used
- Webpack 5
- Jest

## Project Requirements
### Architecture
Project files should be placed in src folders, seperate for client
and server. Client side files should be categorized as per code
type.
Prod files should be populated in `/dist` at root level.
### Configs
Seperate webpack config files should be present for dev and prod.
### Content
Web app should contain only 1 html file, atleast 2 Javascript
files, atleast one scss file that styles the code.
All files and folders must be found by webpack
### API
Web app should make a successful API fetch call from server side.
Server should find required API keys. Request to make the API call
should be sent by user from client side.
Response to the API call must be displayed on client side.
### Offline Functionality
The project must have set up service workers in webpack.
### Testing
Project must have Jest installed, there should be a npm script to
run Jest, and all tests must pass.
Every js file in `src/js/` should have at least one test.
### Interactions
HTML should have a single field form that uses the correct html tags
and structure. There should validation of the form input and helpful
error messages.

## Demo
Please see Usage Section


## Code Examples
### Async fetch function on server side
Async function ```fetchAnalysis``` in `src/server/index.js` makes a
	fetch request to the Meanings Cloud API. It uses the API keys from
	.env file to make the request.
	Check the fetchAnalysis function [here](https://github.com/AmaPal09/UD_FEND_NLP/blob/fc89c71a0e8283b4445316045f7901c511cb106b/src/server/index.js#L91-L111).
	Check how API key was accessed [here](https://github.com/AmaPal09/UD_FEND_NLP/blob/fc89c71a0e8283b4445316045f7901c511cb106b/src/server/index.js#L9-L16).
### REGEX URL validation
Function `isValidURL` in `src/client/js/validateURL.js` validates
	if the user provided url is a valide url
	Check the `isValidURL` [here](https://github.com/AmaPal09/UD_FEND_NLP/blob/trunk/src/client/js/index.js).

## Usage
1. Download the code from GitHub
2. Go to the project folder on your machine.
3. Run npm install (to install all packages in your project folder)
4. Create .env file at the root of the project.
5. Go to [Meanings Cloud page](https://www.meaningcloud.com/developer/sentiment-analysis "Meanings Cloud") and create your own API key.
6. Store your API key in .env file
	```
		SENTIMENT_API_KEY=**YOUR__API__KEY**
	```
7. For dev version
	- Build dev files and start dev server
		```
			npm run build-dev
		```
	- On a different terminal window, go to the project folder and execute
		```
			npm run start
		```
8. For prod version
	```
		npm run build-prod
	```
9. To start the server
	```
		npm run start
	```
10. To see the client side
	Run the command on step 9, the open your preferred browser
	and go to http://localhost:3000/

## Testing
1. To test the project
	```
		npm run test
	```


## Future Enhancements
Good to have features for future enhancements
- [ ] Add Workbox-Plugin and its supporting constructor code here for initiating service-workers in development envrionment.
- [ ] Add different fevicons for different screen sizes
- [ ] Add social media links to footer
- [ ] Add test cases for async function
- [ ] Improve media responsive mixins
- [ ] Give user a choice to select from light and dark theme
- [ ] Take test coverage to 100%
- [ ] Deployment to Horeku


## Development TODO
- [x] Add a README.md
- [x] Select and add fonts
- [x] Create a color scheme
- [x] Add CSS file with fonts and colors
- [x] Add basic CSS layout
- [x] Install Webpack
- [x] Setup Webpack config file
- [x] Create API credential
- [x] Test API using postman
- [x] Add creds to .env file
- [x] Make layout responsive scss
- [x] Hide results until all results are ready to publish
- [x] Add test cases for JS scripts

## References
1) [Form and button](https://www.w3schools.com/html/html_form_input_types.asp)

2) [url validation](https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)

3) ReferenceError: regeneratorRuntime is not defined
 [Reference 1](https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined),
 [Reference 2](https://babeljs.io/docs/en/babel-plugin-transform-runtime),
 [Reference 3 solution 3 here](https://exerror.com/babel-referenceerror-regeneratorruntime-is-not-defined/)

4) [Webpack mode set-up references](https://webpack.js.org/guides/production/)

5) scss resets
- udacity sass lesson

6) [Fevicon set-up](https://www.npmjs.com/package/favicons-webpack-plugin)

7) node-fetch issues
[Referred this code.](https://stackoverflow.com/questions/61558835/type-module-in-package-json-throw-new-err-require-esmfilename-parentpath)
However went to the older version. Could not find how to make version 3.0.0 work

8) [dotenv](https://www.npmjs.com/package/dotenv)

9) [Refreshing table before adding new data](https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript)

10) grid layout using mixins:
[Reference 1](https://sass-lang.com/documentation/at-rules/mixin)
[Reference 2](https://dev.to/paul_duvall/sass-and-media-queries-hb2)

11) [Webpack output set-up](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax)
