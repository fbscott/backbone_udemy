var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: 'Shitty Jazz Song', artist: 'Shitty Jazz Artist', genre: 'Jazz', downloads: 2 }),
    new Song({ title: 'Tongue Tied', artist: 'Earl', genre: 'Pop', downloads: 36 }),
    new Song({ title: 'Rude', artist: 'Magic!', genre: 'Pop', downloads: 171 })
]);

// This is the same as adding the song in the instantiation above
songs.add(new Song({ title: 'The Big Bang', artist: 'Katy Tiz', genre: 'Pop', downloads: 143 }));
// The song can be added at a specific index by passing a second parameter. Though this won't change its cid
// songs.add(new Song({ title: 'The Big Bang', artist: 'Katy Tiz', genre: 'Pop', downloads: 43 }), { at: 0 });

// We can access the first (or any) model in the collection like this
// These three methods return the same data:
// 
//      songs.at(0);            via Backbone
//      songs.get('c1');        via Backbone "getting" the client ID (cid)
//      _.first(songs.models);  via Underscore

var firstSong    = _.first(songs.models);               // first song in the songs array
var songWithIdC2 = songs.get('c2');                     // get specific song by cid
var popSongs     = songs.where({ genre: 'Pop' });       // all Pop songs - can have multiple parameters
var firstPopSong = songs.findWhere({ genre: 'Pop' });   // first Pop song

// The remove method expects a model
songs.remove(firstSong);

// most downloaded songs
var topDownloads = songs.filter(function(song) {
    return song.get('downloads') > 100;
});

console.log('Top Downloads', topDownloads);

songs.each(function(song) {
    console.log(song.attributes);
});
