console.log('***** Music Collection *****')
// create a variable called collection that starts as an empty array 

let collection = [];

console.log('inside collection array', collection);
//create a function called addToCollection 
function addToCollection( title, artist, yearPublished, tracks) {
    console.log('test - inside addToCollection', title, artist, yearPublished, tracks);
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };

    collection.push(album);

    return album;
} // end addToCollection

// adding albums to the collection.
console.log( 'adding album1 to collection', addToCollection('Midnights', 'Taylor Swift', 2022, [{name: 'Lavender Haze', duration: '3:22',}, { name: 'Anti-Hero', duration: '3:21'}, {name: 'Snow On The Beach', duration: '4:16'}]));
console.log( 'adding album2 to collection', addToCollection('Being Funny In a Foregin Language', 'The 1975', 2022, [{name: 'Part of the Band', duration: 4.20}, {name: 'About You', duration: '5:27'}, {name: 'Happiness', duration: '5:04'}]));
console.log( 'adding album3 to collection', addToCollection('The Band CAMINO', 'The Band CAMINO', 2021, [{name: '1 Last Cigarette', duration: '3:06'}, {name: 'I Think I Like You', duration: '3:03'}, {name: 'Roses', duration: '3:03'}]));
console.log( 'adding album4 to collection', addToCollection('Evermore', 'Taylor Swift', 2020, [{name: 'No Body No Crime', duration: '3:37'}, {name: 'Willow',duration: '3:43'}, {name: 'Ivy', duration: '4:20'}]));
console.log( 'adding album5 to collection', addToCollection('Harrys House', 'Harry Styles', 2022, [{name: 'Late Night Talking',duration: ':58'}, {name: 'Daylight', duration: '2:44'}, {name: 'Cinema', duration: '4:03'}]));
console.log( 'adding album6 to collection', addToCollection('Future Shine', 'Flor', 2022,[{name: 'Big Shot', duration: '3:09'}, {name: 'PLay Along', duration: '3:12'}, {name: 'Clouds', duration: '2:58'}]));

// logging collection
console.log( 'These are some of my favorite albums', collection);
// create a function called showCollection
function showCollection( array ) {
    // give current number of items in the array
    console.log( 'The current number of items in the array is', array.length - 1);
    // loop over collection array and adding description
    for (let i = 0; i < collection.length; i++) {
        let album = collection[i];
        console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
        // creating another for loop which loops over the tracks and logs out the tracks and their durations from the given album object. 
        for (let j = 0; j < album.tracks.length; j++) {
            let track = album.tracks[j];
            // logging out the track name and duration
            console.log( `${track.name}: ${track.duration}`);
        }
    };
}; // end of showCollection
// test the showCollection array
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
            } else {
               console.log( 'no matches!') 
            
            } 
        }
        // returning an empty array if there is no matches
        return results;
} // end of findByArtist


// testing findByArtist
console.log('Test - should return looks like we found a match!', findByArtist('Flor'));
console.log('Test- should return no matches!', findByArtist('Justin Beiber'));
console.log('Test - should return looks like we found a match!', findByArtist('Taylor Swift'));
console.log('Test - should resturn no matches!', findByArtist('Shawn Mendes'));



// stretch goals 
// creating search function
// testing that we are inside search function
    function search( searchCriteria ) {
        // test to make sure I am passing in the input for searchCriteria
        console.log('inside of search', searchCriteria);
        // create an empty array which will hold all of my matching criteria
        let matchingCriteria = [];
        // create an conditional that states if the searchCriteria object has a trackName property, loop through it creating an album for each object
        if (searchCriteria.trackName) {
            for (let i = 0; i < collection.length; i++) {
                let album = collection[i];
                // Loop through the albums to find the track assigning it to a new variable called track
                for (let j = 0; j < album.tracks.length; j++) {
                    let track = album.tracks[j];
                    // create a conditional that checks to see if the track name matches the name given in the searchCriteria
                    if (track.name === searchCriteria.trackName) {
                        // add the track to the matchingCriteria array if there is a match
                        matchingCriteria.push(track);
                    } 
                 }
            } 
        } else {
        // if the searchCriteria does not have a track name, then we check for a matching artist or yearPublished
        for (let i = 0; i < collection.length; i++) {
            // loop through the collection and create albums for every object
            let album = collection[i];
            // create a conditional that checkes if the searchCriteria artist or yearPublished matches the album artist or yearPublished
            if (searchCriteria.artist === album.artist || searchCriteria.yearPublished === album.yearPublished) {
                // if there is a match, add the album to the matchingCriteria array.
                matchingCriteria.push(album);
            } 
            
        }
    }   // return the macthingCriteria array. This will show our matches or return an empty array if there are no matches
        return matchingCriteria;
    };

// tests
 console.log(search({artist: 'Ray Charles'}));
 console.log(search({yearPublished: 1957}));
 console.log(search({artist: 'Ray Charles', yearPublished: 1957}));
 console.log(search({artist: 'Flor'}));
 console.log(search({yearPublished: 2022}));
 console.log(search({trackName: 'Daylight'}));
 console.log(search({trackName: 'Part of the Band'}));
 console.log(search({trackName: 'Conditional'}));