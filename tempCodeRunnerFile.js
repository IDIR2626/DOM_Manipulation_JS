//DOM manipulation

const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html><p id="main_header">Hello world</p>`);
const { document } = window;

//get element by id
const mainHeader = document.getElementById('main_header');
console.log(mainHeader.textContent); 