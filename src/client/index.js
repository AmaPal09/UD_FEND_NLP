import './styles/main.scss'

// import js scripts
import { isValidURL } from './js/validateURL'
import { submitForm } from './js/index.js'
import { sendURLToServer } from './js/index.js'
export{printResult} from './js/printResults.js'
export{createTableRow} from './js/printResults.js'

console.log("New index file used as entry point");

export {
	isValidURL,
	submitForm
}