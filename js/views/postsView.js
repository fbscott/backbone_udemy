/******************************************************************************
 * DOM dependencies:
 * - #js-spa-container
 *****************************************************************************/

var Post = Backbone.Model.extend();

var Posts = Backbone.Collection.extend({

    model: Post,

    url: 'https://jsonplaceholder.typicode.com/posts',

    fetchSuccess: function (collection, response) {

        console.log('Fetch response: ', response);
        // console.log('Models: ', collection.models);

    },

    fetchError: function (collection, response) {

        throw new Error("Books fetch error");

    }
});

var PostView = Backbone.View.extend({

    tagName: 'li',

    render: function() {

        this.$el.html(this.model.get('title'));

        return this;
    }

});

var PostsView = Backbone.View.extend({

    // Adding a tagName doesn't seem to work. I think it has something to do
    // with this view not having its own container?
    tagName: 'ul',

    render: function() {

        var _this = this;

        this.$el.append('<ul></ul>'); // addresses the tagName issue above

        // Use _.each() to iterate over the collection.
        this.collection.each(function(post) { // current post

            // Put the current post in a postView (postView is a child view).
            var _postView = new PostView({ model: post });

            // Render the post and append it to the DOM element of the postsView.
            _this.$el.append(_postView.render().$el);
        });
    }

});

var posts = new Posts();

var postsView = new PostsView({
    el: '#js-spa-container',
    collection: posts
});

// posts.fetch({
//     success: function() {
//         console.log('Fetch successful!');
//     },
//     error: function() {
//         console.log('Fetch failed :(');
//     }
// });

// postsView.render();

posts.fetch({
    success: postsView.render.bind(postsView),
    error: this.fetchError
});
