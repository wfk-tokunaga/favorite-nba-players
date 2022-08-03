const wget = require('node-wget-js');
const names = require('./names');
const links = require('./links');
const fs = require('fs');

const nameLinks = [];

names.forEach((name, index) => {
    console.log(name);
    nameLinks.push([name, links[index]])
});

const fileDestinations = [];
let ids = [];

nameLinks.forEach(player => {
    let url = player[1];
    let id = player[0].toLowerCase().split(' ').join('-').replaceAll('.', '').replaceAll('\'', '');
    ids.push(id);

    let dest = `./assets/images/${id}.png`
    fileDestinations.push(dest);
    console.log(url);
    console.log(dest);
    // wget({url: url, dest: destination_folder_or_filename}, callback);
    wget({ url: url, dest: dest },
        function(error, response, body) {
            if (error) {
                console.log('--- error:');
                console.log(error); // error encountered
            }
        });
})

// console.log(ids);

var items = [];

nameLinks.forEach((player, index) => {
    const addItem = {
        id: ids[index],
        name: player[0],
        image: fileDestinations[index]
    }

    // console.log(addItem);

    items.push(addItem);
})


console.log(items);

// module.exports = items;

let jsonString = JSON.stringify(items);
console.log(jsonString);

// fs.writeFile('items.js', jsonString, () => console.log('blah'));