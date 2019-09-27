var Posts = Backbone.Model.extend({
    urlRoot: 'https://jsonplaceholder.typicode.com/posts',
    idAttribute: 'id'   // Tell Backbone what "id" the REST API uses.
                        // Only needed if "id" is NOT the default id attribute.
                        // Used here just as an example.
});

var posts = new Posts({ id: 1 });

// posts.fetch();

posts.fetch({
    success: function() {},
    error: function() {}
});

posts.set('derp', 'derp text');
posts.save({}, { // {}, {...} is the same as calling "set" followed by "save" (as in this example).
                 // Otherwise the save attributes will need to be passed as the 1ST object argument.
    // Note: Success and error functions exist in the 2ND object of the "save" method.
    //       Not the 1ST (like fetch and destroy)!!!
    //       The 1ST object is a hash of the attributes to save.
    success: function() {},
    error: function() {}
});

// posts.destroy();
