const wget = require('node-wget-js');
const names = require('./names');
const links = require('./links');

const nameLinks = [];

names.forEach((name, index) => {
    nameLinks.push([name, links[index]])
});

const removedNoNames = nameLinks.filter(player => player[0] !== 'Default player headshot');

console.log(removedNoNames);