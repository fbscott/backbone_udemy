/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *****************************************************************************/

var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

    render: function() {
        var template = _.template($('#songTemplate').html());

        // underscore doesn't know about Backbone models.
        // that's why we pass a JSON object.
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this;
    }
});

var song = new Song({ title: 'The Big Bang', plays: 110 });

var songView = new SongView({ el: '#js-spa-container', model: song });

songView.render();
