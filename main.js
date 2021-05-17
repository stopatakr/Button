/* Select the button element */
var button = document.querySelector('button');

/* Add an event listener for mousedown */
button.addEventListener('mousedown',Event);


function Event(){
    button.style.color = 'white';
    button.style.backgroundColor = 'black';
};

/* Add an event listener for mouseup */
button.addEventListener('mouseup',EventTwo);

/* Change color and set the attribute disabled=true */
function EventTwo(){
    button.style.color = 'black';
    button.style.backgroundColor = '#ccc';
    button.disabled = true;
};