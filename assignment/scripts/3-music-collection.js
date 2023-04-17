console.log('***** Music Collection *****')
// create a variable called collection that starts as an empty array 

let collection = [];

console.log( 'inside collection array', collection);

//create a function called addToCollection 

function addToCollection( title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    collection.push(album);

    return album;
}

let album1 = {
    title: 'Midnights', 
    artist: 'Taylor Swift',
    yearPublished: 2022
} // end album1


let album2 = {
    title: 'Being Funny In a Foregin Language', 
    artist: 'The 1975',
    yearPublished: 2022
} // end album2
let album3 = {
    title: 'The Band CAMINO', 
    artist: 'The Band CAMINO',
    yearPublished: 2021
} // end album3
let album4 = {
    title: 'Evermore', 
    artist: 'Taylor Swift',
    yearPublished: 2020
} // end album4
let album5 = {
    title: `Harry's House`, 
    artist: 'Harry Styles',
    yearPublished: 2022
} // end album5
let album6 = {
    title: 'Future Shine', 
    artist: 'Flor',
    yearPublished: 2022
} // end album6
console.log( 'adding album1 to collection', addToCollection(album1.title, album1.artist, album1.yearPublished));
console.log( 'adding album2 to collection', addToCollection(album2.title, album2.artist, album2.yearPublished));
console.log( 'adding album3 to collection', addToCollection(album3.title, album3.artist, album3.yearPublished));
console.log( 'adding album4 to collection', addToCollection(album4.title, album4.artist, album4.yearPublished));
console.log( 'adding album5 to collection', addToCollection(album5.title, album5.artist, album5.yearPublished));
console.log( 'adding album6 to collection', addToCollection(album6.title, album6.artist, album6.yearPublished));

console.log( 'These are some of my favorite albums', collection);

function showCollection( array ) {
    console.log( 'the array length is currently', array.length - 1);
    for (let i = 0; i < collection.length; i++) {
        console.log( `${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
        
    };
    return true;
};

console.log(showCollection(collection));

function findByArtist( artist ) {
    let results = [];
    for (let i = 0 ; i < collection.length; i++) {
            if (artist === collection[i].artist) {
                console.log( 'looks like we found a match!');
                results.push(collection[i].artist);
            } else {
                console.log( 'no matches here');
            };
        return results;
    }
}

console.log(findByArtist('Taylor Swift'));