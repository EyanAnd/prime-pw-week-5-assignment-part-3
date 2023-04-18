console.log('***** Music Collection *****')
// create a variable called collection that starts as an empty array 

let collection = [];
//create a function called addToCollection 
function addToCollection( title, artist, yearPublished, tracks) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };

    collection.push(album);

    return album;
}

let album1 = {
    title: 'Midnights', 
    artist: 'Taylor Swift',
    yearPublished: 2022, 
    tracks: [{
        name: "Lavender Haze",
        duration: '3:22',
        
    }, {
        name: 'Anti-Hero',
        duration: '3:21'
    }, {
        name: 'Snow On The Beach',
        duration: '4:16'

    }]
}; // end album1

let album2 = {
    title: 'Being Funny In a Foregin Language', 
    artist: 'The 1975',
    yearPublished: 2022,
    tracks: [{
        name: 'Part of the Band',
        duration: 4.20
    }, {
        name: 'About You',
        duration: '5:27'
    }, {
        name: 'Happiness',
        duration: '5:04'
    }]
}; // end album2

let album3 = {
    title: 'The Band CAMINO', 
    artist: 'The Band CAMINO',
    yearPublished: 2021,
    tracks: [{
        name: '1 Last Cigarette',
        duration: '3:06'
    }, {
        name: 'I Think I Like You',
        duration: '3:03'
    }, {
        name: 'Roses',
        duration: '3:03'
    }]
} // end album3

let album4 = {
    title: 'Evermore', 
    artist: 'Taylor Swift',
    yearPublished: 2020, 
    tracks: [{
        name: 'No Body No Crime',
        duration: '3:37'
    }, {
        name: 'Willow',
        duration: '3:43'
    }, {
        name: 'Ivy',
        duration: '4:20'
    }]
}; // end album4

let album5 = {
    title: `Harry's House`, 
    artist: 'Harry Styles',
    yearPublished: 2022, 
    tracks: [{
        name: 'Late Night Talking',
        duration: ':58'
    }, {
        name: 'Daylight',
        duration: '2:44'
    }, {
        name: 'Cinema',
        duration: '4:03'
    }]
}; // end album5

let album6 = {
    title: 'Future Shine', 
    artist: 'Flor',
    yearPublished: 2022, 
    tracks: [{
        name: 'Big Shot',
        duration: '3:09'
    }, {
        name: 'PLay Along',
        duration: '3:12'
    }, {
        name: 'Clouds',
        duration: '2:58'
    }]
}; // end album6


console.log( 'adding album1 to collection', addToCollection(album1.title, album1.artist, album1.yearPublished, album1.tracks));
console.log( 'adding album2 to collection', addToCollection(album2.title, album2.artist, album2.yearPublished, album2.tracks));
console.log( 'adding album3 to collection', addToCollection(album3.title, album3.artist, album3.yearPublished, album3.tracks));
console.log( 'adding album4 to collection', addToCollection(album4.title, album4.artist, album4.yearPublished, album4.tracks));
console.log( 'adding album5 to collection', addToCollection(album5.title, album5.artist, album5.yearPublished, album5.tracks));
console.log( 'adding album6 to collection', addToCollection(album6.title, album6.artist, album6.yearPublished, album6.tracks));

console.log( 'These are some of my favorite albums', collection);
// create a function called showCollection
function showCollection( array ) {
    // give current length of array
    console.log( 'the array length is currently', array.length - 1);
    // loop over collection array and adding description
    for (let i = 0; i < collection.length; i++) {
        let album = collection[i];
        console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}}`);
        // creating another for loop which loops over the tracks and logs out the tracks and their durations from the given album object. 
        for (let j = 0; j < album.tracks.length; j++) {
            let track = album.tracks[j];
            console.log( `${track.name}: ${track.duration}`);
        }
    };
};
// log the colelction
console.log(showCollection(collection));


// create findByArtist
function findByArtist(artist) {
    // testing to make sure we are inside the function
    console.log('inside findByArtist', artist);
    // create empty result array
    let results = [];
    // loop over the collection array and finding any matches in the collection object that matches the artist being put in the funciton
    for (let i = 0; i < collection.length; i++) {
            if (artist === collection[i].artist) {
                // adding artist and their assosciated objects to the new results array
                results.push(collection[i]);
                console.log('Looks like we found a match!', results);
            } else {
               console.log( 'no matches!') 
            
            } 
        }
        // returning an empty array if there is no matches
        return results;
}
// testing findByArtist
console.log(findByArtist('Flor'));



// stretch goals 
// setting up our search object
const searchCriteria = {artist: 'The 1975', yearPublished: '2020'};

// creating search function
 
// testing that we are inside search function
    console.log('inside of search', searchCriteria);
    function search( searchCriteria ) {
        let matchingCriteria = [];
        for (let i = 0; i < collection.length; i++) {
            let album = collection[i];
            if (searchCriteria.artist === album.artist && searchCriteria.yearPublished == album.yearPublished) {
                matchingCriteria.push(album);
            } 
        }
        return matchingCriteria;
    }


 console.log(search(searchCriteria));