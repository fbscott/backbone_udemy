/**
 * A Backbone view is not the page in the browser.
 * It's the object responsible for rendering the content of the view as well
 * as responding to DOM events.
 *
 * Notes:
 *     $el = jQuery case object that contains the view's DOM element (div by
 *           default).
 *     el  = The DOM element in the markup to which the view's DOM element will
 *           attach. This el is responsible for rendering the content and
 *           responding to DOM events registered to it.
 */

var SongView = Backbone.View.extend({

    tagName: 'h1',

    attributes: {
        'data-i18n': 'hello world'
    },

    id: '1234',

    className: 'song',

    render: function() {
        this.$el.html('Hello World!');

        return this; // Return reference to view at the end of the render call.
                     // Helps with chaining.
    }

});

// var songView = new SongView({ el: '#js-spa-container' });

// Same as above, minus the el declaration.
// See line 46
var songView = new SongView();

songView.render();

// Use jQuery to select the container element in the markup.
// Chain .html() to insert the view's DOM element into the container.
// This is the same as adding it to the instantiation above (line 39).
$('#js-spa-container').html(songView.$el);

// The previous two lines can be combined (chained) together.
// $('#js-spa-container').html(songView.render().$el);
