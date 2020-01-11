var Post = Backbone.Model.extend({
    urlRoot: 'https://jsonplaceholder.typicode.com/posts',
    idAttribute: 'id'   // Tell Backbone what "id" the REST API uses.
                        // Only needed if "id" is NOT the default id attribute.
                        // Used here just as an example.
});

var post = new Post({ id: 1 });

// post.fetch();

post.fetch({
    success: function() {},
    error: function() {}
});

post.set('derp', 'derp text');
post.save({}, { // {}, {...} is the same as calling "set" followed by "save" (as in this example).
                 // Otherwise the save attributes will need to be passed as the 1ST object argument.
    // Note: Success and error functions exist in the 2ND object of the "save" method.
    //       Not the 1ST (like fetch and destroy)!!!
    //       The 1ST object is a hash of the attributes to save.
    success: function() {},
    error: function() {}
});

// post.destroy();
