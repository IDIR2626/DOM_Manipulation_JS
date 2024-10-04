
/* 
const { JSDOM } = require('jsdom');

//Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><html><body><h1 id="main_header">Hello World</h1></body></html>`);

// Get the document from the JSDOM instance
const document = dom.window.document;

*/
/*-----------------------------------------------------------SELECTING ELEMENT IN THE DOM-------------------------------------------------------------------------------*/




/*
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


mainHeader.style.color = 'red';
console.log(`the type of ${mainHeader} is ` + typeof mainHeader);



for (let i = 0; i <listItems.length; i++){
    listItems[i].style.fontSize = '20px';
    listItems[i].style.fontWeight = 'bold';
    listItems[i].style.color = 'blue';
}

*/



/*-----------------------------------------------------------CREATING ELEMENT IN THE DOM-------------------------------------------------------------------------------*/


/*
const ul = document.querySelector('ul');
const li = document.createElement('li');

li.textContent = 'Item 6';
//li.className = 'list_item'; 
li.setAttribute ('class',  'list_item');
li.style.color = 'green';
li.style.fontWeight = 'bold';

ul.appendChild(li); 

*/



/*------------------------------------------------------------TRAVESING THE DOM TREE----------------------------------------------------------------------------------*/

/*

let ul = document.querySelector('ul');
console.log(ul);

// get the parent of the ul element, we have two ways to do that 
// 1- using parentNode property
console.log(ul.parentNode);
// 2 - using parentElement property
console.log(ul.parentElement);
// the diffrence between parentNode and parentElement is that parentNode can return any node type while parentElement returns only elements



let html = document.documentElement; // this returns the entire html document
console.log(html); 


// get the children of the ul element
console.log(ul.childNodes); // this returns a node list of all the children of the ul element
// get the first child and the last child of the ul elemnt
console.log(ul.firstChild);
console.log(ul.lastChild); 
// this returns a list of all the children of the ul element that are elements as text 
// now lete's get the first and last element of the ul element as elements and not as text so we can use children , firstElementChild and lastElementChild properties
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// siblings nodes traversal
console.log(ul.previousSibling);
console.log(ul.nextSibling);
// this return nodes as text so we can use previousElementSibling and nextElementSibling to get the siblings as elements

console.log(ul.previousElementSibling); // h1 element because it is the previous sibling of the ul element
console.log(ul.nextElementSibling); // nuul because there is no next sibling for the ul element


*/





