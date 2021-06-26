
// navbar
// Create a labeled id=container div Element in HTML doc
const container = document.getElementById('container');
// Create an HTML element 'div' and store it in variable
const navbar = document.createElement('div');
// append stored element to parent (container)
container.appendChild(navbar);
// add class 'navbar' to appended element to select element later
navbar.classList.add('navbar');
// create an HTML element 'h1' and store it in variable
const brand = document.createElement('h1');
// append stored element to parent (navbar)
navbar.appendChild(brand);
// Customize text of appended element for display
brand.textContent = 'HighOnCoding'

// navigation
// Create an HTML element 'ul' and store it in a variable
const navList = document.createElement('ul');
// append stored element to parent (navbar)
navbar.appendChild(navList);

// nav link1
// Create an html element 'li' and store it in a variable
const homeLink = document.createElement('li');
// append stored element to parent (navList)
navList.appendChild(homeLink);
// Customize text of appended element for display
homeLink.textContent = 'Home'
// add class to grab element
homeLink.classList.add('active');

// nav link2
// Create an html element 'li' and store it in a variable
const categoriesLink = document.createElement('li');
// append stored element to parent (navList)
navList.appendChild(categoriesLink);
// Customize text of appended element for display
categoriesLink.textContent = 'Categories'


// Textbox
// Create id=text Container div element in html doc
// grab element by its given ID and store in variable
const textContainer = document.getElementById('textContainer');
// Create an HTML element 'div' and store it in a variable
const textBox = document.createElement('div');
// append stored element to parent (textContainer)
textContainer.appendChild(textBox);
// add class 'navbar' to appended element to select element later
textBox.classList.add('textBox');

// create an HTML element 'h1' and store it in a variable
const textHead = document.createElement('h1')
// append stored element to parent (textContainer)
textBox.appendChild(textHead);
// Customize text of appended element for display
textHead.textContent = 'Curse of the Current Reviews'

// create an element 'h4' and store it in a variable
const textFooter = document.createElement('h5')
// append stored element to parent (textContainer)
textBox.appendChild(textFooter);
// Customize text of appended element for display
textFooter.textContent = 'Lorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy Buy Buy'
// add background color 221.222.224 in CSS

// Textbox2
// Create id=text Container div element in html doc
// grab element by its given ID and store in variable
const textContainer2 = document.getElementById('textContainer2');
// Create an HTML element 'div' and store it in a variable
const textBox2 = document.createElement('div');
// append stored element to parent (textContainer2)
textContainer2.appendChild(textBox2);
// add class 'textBox2' to appended element to select element later
textBox2.classList.add('textBox2');

// create an HTML element 'h2' and store it in a variable
const textHead2 = document.createElement('h2')
// append stored element to parent (textBox2)
textBox2.appendChild(textHead2);
// Customize text of appended element for display
textHead2.textContent = 'Hello WatchKit'

// create an HTML element 'h4'and store it in a variable
const textFooter2 = document.createElement('h4')
// append stored element to parent (textBox2)
textBox2.appendChild(textFooter2);
// Customize text of appended element for display
textFooter2.textContent = 'Last month Apple released Lorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy Buy'

// create an HTML element 'h3'and store it in a variable
const textFooter3 = document.createElement('h3')
// append stored element to parent (textBox2)
textBox2.appendChild(textFooter3);
// Customize text of appended element for display
textFooter3.textContent = '12 comments 124 likes'






// Textbox2
// Create id=text Container div element in html doc
// grab element by its given ID and store in variable
const textContainer3 = document.getElementById('textContainer3');
// Create an HTML element 'div' and store it in a variable
const textBox3 = document.createElement('div');
// append stored element to parent (textContainer3)
textContainer3.appendChild(textBox3);
// add class 'textBox2' to appended element to select element later
textBox3.classList.add('textBox3');

// create an HTML element 'h2' and store it in a variable
const textHead3 = document.createElement('h2')
// append stored element to parent (textBox2)
textBox3.appendChild(textHead3);
// Customize text of appended element for display
textHead3.textContent = 'Introduction To Swift'

// create an HTML element 'h4'and store it in a variable
const textFooter4 = document.createElement('h4')
// append stored element to parent (textBox2)
textBox3.appendChild(textFooter4);
// Customize text of appended element for display
textFooter4.textContent = 'Swift is a modern programming language Lorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy BuyLorem Lorem Apple iTunes Buy Buy Buy Lorem Lorem Apple iTunes Buy Buy'

// create an HTML element 'h3'and store it in a variable
const textFooter5 = document.createElement('h3')
// append stored element to parent (textBox2)
textBox3.appendChild(textFooter5);
// Customize text of appended element for display
textFooter5.textContent = '15 comments 45 likes'