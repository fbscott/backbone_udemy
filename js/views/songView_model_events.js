/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *
 * Notes:
 * - Test in the console with: song.set('listeners', 1);
 *****************************************************************************/

var songsJSON = {
    artist: 'Katy Tiz',
    title: 'The Big Bang'
};

var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
});

var SongView = Backbone.View.extend({

    initialize: function() {
        // use the 'on' method to register a handler for a model event
        // models raise a change event when the state of the model changes
        // views respond to those change events
        // 2nd param === callback
        // 3rd param === context (the view) default is the model
        this.model.on('change', this.onModelChange, this);

        // just straig render on change
        // this.model.on('change', this.render, this);
    },

    onModelChange: function() {
        this.render();
        this.$el.addClass('js-model-change-class');

        return this;
    },

    render: function() {
        this.$el.html(this.model.get('title') + ' - Listeners: ' + this.model.get('listeners'))

        return this;
    }

});

var song = new Song(songsJSON);

var songView = new SongView({
    el: '#js-spa-container',
    model: song
});

songView.render();
