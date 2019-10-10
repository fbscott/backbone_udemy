var Post = Backbone.Model.extend();

var Posts = Backbone.Collection.extend({
    model: Post,
    url: 'https://jsonplaceholder.typicode.com/posts'
});

var posts = new Posts();

posts.fetch({
    data: {
        page: 2
    },
    success: function() {
        console.log('success');
    },
    error: function() {
        console.log('error');
    }
});
