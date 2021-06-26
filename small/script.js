// Add a Heading
// Select the h1 tag and set "Toppings" as the text of the heading.

const toppings = document.getElementById('heading');
toppings.textContext = 'Toppings'

// 1. Add id 'heading' to html doc
// 2. Grab heading using document.getElementByID('heading') 
// and store it in variable named after future text
// 3. Modify heading using variable.textContext





// # Add Class
// Select the list item 'burger'. Add a class of 'list-item'.

const burger = document.getElementById('burger');
// or
// const burger = document.querySelector('#burger');

burger.setAttribute('class', 'list-item');




// # Create and Append
// Create a new li element and append it to the list.
const pickles = document.createElement('li');
const list = document.getElementById('list');
list.appendChild(pickles);
pickles.textContent = 'Pickles'

// give it a class
pickles.classList.add('list-item');
pickles.setAttribute('id', 'pickles');
pickles.classList.add('list-item');

// #