var songsJSON = {
    artist: 'Katy Tiz',
    title: 'The Big Bang'
};

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

    render: function() {
        this.$el.html(this.model.get('title'));

        return this;
    }

});

var song = new Song();

song.set(songsJSON);

var songView = new SongView({

    model: song,

    tagName: 'h1',

    // attributes: {
    //     'data-i18n': 'hello world'
    // },

    attributes: function() {
        return {
            'data-i18n': '[html]jensen:html > ' + this.model.get('title')
        }
    },

    id: '1234',

    className: 'song'

});

songView.render();

$('#js-spa-container').html(songView.$el);
