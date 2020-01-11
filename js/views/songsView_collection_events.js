/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *
 * Notes:
 * - Test in the console with: songs.add({id:4, artist:'Some Guy', title:'Some Song'});
 *                             songs.remove(songs.at(0));
 *                             songs.remove(_.findWhere(songs.models, {id: 1}));
 *****************************************************************************/

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({ model: Song });

var SongView = Backbone.View.extend({

    tagName: 'li',

    // li's need IDs so SongsView can find them for removal
    id: function() {
        return this.model.id;
    },

    render: function() {
        this.$el.html(this.model.get('title'));

        return this;
    }
});

var SongsView = Backbone.View.extend({

    // Adding a tagName doesn't seem to work. I think it has something to do
    // with this view now having its own container?
    tagName: 'ul',

    initialize: function() {
        // register a handler for the add method of the collection
        this.collection.on('add', this.onSongAdd, this);
        this.collection.on('remove', this.onSongRemove, this);
    },

    // triggered when an object is added to the collection
    onSongAdd: function(song) { // song === the object that was just added
                                // we know it's a song because the 'add' event
                                // in Backbone passes that object.
        // pass the new song to the songView
        // songView is responsible for rendering a song
        var songView = new SongView({ model: song });

        // append the new song to the list
        this.$el.append(songView.render().$el);
    },

    // triggered when an object is removed from the collection
    onSongRemove: function(song) { // song === the object that was just removed
                                   // we know it's a song because the 'remove'
                                   // event in Backbone passes that object.
        // this.$el.find('li#js-song-num-' + song.id).remove();
        // shorthand for the above line
        this.$('li#' + song.id).remove();
    },

    render: function() {
        var _this = this;

        this.$el.append('<ul></ul>'); // addresses the tagName issue above

        this.collection.each(function(song) {
            var songView = new SongView({ model: song });
            _this.$el.append(songView.render().$el);
        });
    }

});

var songs = new Songs([
    new Song({ id: 1, artist: 'Katy Tiz', title: 'The Big Bang' }),
    new Song({ id: 2, artist: 'Earl', title: 'Tongue Tied' }),
    new Song({ id: 3, artist: 'Magic!', title: 'Rude' })
]);

var songsView = new SongsView({ el: '#js-spa-container', collection: songs });

songsView.render();
