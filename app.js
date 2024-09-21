// Import jsdom
//const { JSDOM } = require('jsdom');

// Create a new JSDOM instance
//const dom = new JSDOM(`<!DOCTYPE html><html><body><h1 id="main_header">Hello World</h1></body></html>`);

// Get the document from the JSDOM instance
//const document = dom.window.document;

// DOM manipulation

// Get element by id
const mainHeader = document.getElementById('main_header');
console.log(mainHeader);


// get element by class name
const listItems = document.getElementsByClassName('list_item');
console.log(listItems);

// get element by tag name (same job as getElementsByClassName)
const listItems_byTagName = document.getElementsByTagName('li');
console.log(listItems_byTagName);

// querySelector (by passing a tag name) - returns the first element that matches the query
// const firstDivInMyCode = document.querySelector('div');
// console.log(firstDivInMyCode);

// querySelectorAll (by passing a tag name) - returns all elements that match the query
const allDivsInMyCode = document.querySelectorAll('div');
console.log(allDivsInMyCode);
