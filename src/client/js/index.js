// Gloal variables


console.log("js added");
//Vars for user input
const articleURL = document.getElementById('artURL');

function submitForm(e) {
    e.preventDefault();
    if (artURL.value == ""){console.log('Enter a URL');}
    else { console.log(artURL.value);}
}

/*
event listener
*/
artProcess.addEventListener('click', submitForm);
