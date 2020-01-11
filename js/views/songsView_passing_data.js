/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *****************************************************************************/

var songsJSON = {
    artist: 'Katy Tiz',
    title: 'The Big Bang'
};

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({

    tagName: 'li',

    render: function() {
        this.$el.html(this.model.get('title'));

        return this;
    }

});

var SongsView = Backbone.View.extend({

    // Adding a tagName doesn't seem to work. I think it has something to do
    // with this view now having its own container?
    tagName: 'ul',

    render: function() {
        var _this = this;

        this.$el.append('<ul></ul>'); // addresses the tagName issue above

        // this.model === collection that is passed to the view.
        // Use _.each() to iterate over the collection.
        this.collection.each(function(song) { // current song
            // Put that song in a songView (songView is a child view).
            var _songView = new SongView({ model: song });

            // Render the song and append it to the DOM element of the songsView.
            _this.$el.append(_songView.render().$el);
        });
    }

});

var songs = new Songs([
        new Song(songsJSON),
        new Song({ artist: 'Earl', title: 'Tongue Tied' }),
        new Song({ artist: 'Magic!', title: 'Rude' })
    ]);

var songsView = new SongsView({ el: '#js-spa-container', collection: songs });

songsView.render();
