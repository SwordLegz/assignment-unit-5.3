console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create `myCollection` array initialized as an empty array

const myCollection = [];
console.log(myCollection);

//// DONE ////

// Push record object into `addToCollection` & returns the object

// myCollection.addToCollection = 'Smash Mouth';

function addToCollection() {
  myCollection.push({
    artist: `Smash Mouth`,
    album: `Astro Lounge`,
    bestSong: `All Star`,
  //  }
  //  {
  //   artist: `Aaron Carter`,
  //   album: `Aaron's Party`,
  //   bestSong: 'Girl You Shine'
  //   }
    // {
    //   artist: `Def Leppard`,
    //   album: `Hysteria`,
    //   bestSong: `Animal`
    //  }
    //  {
    //   artist: `Man With A Mission`,
    //   album: `Chasing the Horizon`,
    //   bestSong: `Hey Now`
    //   }
    //   {
    //     artist: `Kishi Bashi`,
    //     album: `Sonderlust`,
    //     bestSong: `m'Lover`
    //    }
    //    {
    //     artist: `Newsboys`,
    //     album: `Love Liberty Disco`,
    //     bestSong: `Beautiful Sound`
});
  // return addToCollection
  console.log('Added items to my collection:', myCollection)
};
// console.log(myCollection);

// Test `addToCollection` by adding at least 6 albums & logged results



// `showCollection` takes in an array, loops over it, correctly logs each item



// `findByArtist` takes in a collection and artist, then returns an array of matching albums



// STRETCH: `search` takes in a criteria object and returns an array of matching albums






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
