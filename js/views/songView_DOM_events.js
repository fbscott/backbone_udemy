/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *****************************************************************************/

var songsJSON = {
    artist: 'Katy Tiz',
    title: 'The Big Bang'
};

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

    events: {
        'click': 'onClickEl', // for the el (buttons, text, etc.)
        'click .js-listen': 'onClickLButton' // just for the button
    },

    onClickEl: function() {
        console.log('el clicked');
    },

    onClickLButton: function(e) {

        // keeps events from bubbling up to the "el" for this view
        e.stopPropagation();

        console.log('button clicked');
    },

    render: function() {
        this.$el.html('Listen to <button class="js-listen">' + this.model.get('title') + '</button>');

        return this;
    }

});

var song = new Song();

song.set(songsJSON);

var songView = new SongView({

    model: song,

    tagName: 'p',

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
