console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// 1. Create `myCollection` array initialized as an empty array

let myCollection = [];
console.log(myCollection,);

//// DONE ////

// 2. Push record object into `addToCollection` & returns the object

// myCollection.addToCollection = 'Smash Mouth';

function addToCollection(collection, title, artist, yearPublished) {
  let albumToAddToCollection = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
   }
  collection.push(albumToAddToCollection)
  return albumToAddToCollection
  }
  console.log(`Before function call`, myCollection);
  addToCollection(myCollection, `Astro Lounge`, `Smash Mouth`, 1999)
  console.log(`After function call`, myCollection);
  addToCollection(myCollection, `Aaron's Party (Come Get It)`, `Aaron Carter`, 2000)
  console.log(myCollection);
  addToCollection(myCollection, `Hysteria`, `Def Leppard`, 1987)
  console.log(myCollection);
  addToCollection(myCollection, `Chasing the Horizon`, `Man With a Mission`, 2018)
  console.log(myCollection);
  console.log(myCollection);
  addToCollection(myCollection, `Sonderlust`, `Kishi Bashi`, 2016)
  console.log(myCollection);
  addToCollection(myCollection, `Love Liberty Disco`, `Newsboys`, 1999)
  console.log(myCollection);


// 3. Test `addToCollection` by adding at least 6 albums & logged results

function showCollection(collection) {
  for(let item of collection) {
    console.log(`${item.title} by ${item.artist} published in ${item.yearPublished}`);
  }
}
showCollection(myCollection);


// 4. `showCollection` takes in an array, loops over it, correctly logs each item

function findByArtist(collectionOfInformation, artist)  {
  let artistResults = [];
  for(let item of collectionOfInformation) {
    if (item.artist === artist) {
      artistResults.push(item)
    }
    // console.log(`${item.title} by ${item.artist} published in ${item.yearPublished}`);

  }
  return artistResults
}
console.log(findByArtist(myCollection, `Smash Mouth`));
console.log(findByArtist(myCollection, `Backstreet Boys`));

// myCollection.showCollection(myCollection => console.log(myCollection.artist));
// console.log(this.showCollection);

// 5. `findByArtist` takes in a collection and artist, then returns an array of matching albums



// 6. STRETCH: `search` takes in a criteria object and returns an array of matching albums






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
