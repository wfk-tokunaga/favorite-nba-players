const wget = require('node-wget-js');
const names = require('./names');
const links = require('./links');

const nameLinks = [];

names.forEach((name, index) => {
    nameLinks.push([name, links[index]])
});

const removedNoNames = nameLinks.filter(player => player[0] !== 'Default player headshot');
removedNoNames.forEach(player => {
    let url = player[1];
    // let fileName = player[0].toLowerCase().split(' ');
    let fileName = player[0].toLowerCase().split(' ').join('-').replaceAll('.', '').replaceAll('\'', '');

    console.log(fileName);
    // console.log(fileName.join('-').replaceAll('.', '').replaceAll('\'', ''));

    let dest = `./assets/images/${fileName}.png`
        // wget({url: url, dest: destination_folder_or_filename}, callback);
    wget({ url: url, dest: dest },
        function(error, response, body) {
            if (error) {
                console.log('--- error:');
                console.log(error); // error encountered
            } else {
                console.log('--- headers:');
                console.log(response.headers); // response headers
                console.log('--- body:');
                console.log(body); // body properties { bodyUsed: true, size: 1059, timeout: 2000 }
            }
        });
})

// console.log(removedNoNames);