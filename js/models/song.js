var songsJSON = {
    artist: 'Katy Tiz',
    title: 'The Big Bang'
};

var Song = Backbone.Model.extend({

    initialize: function() {
        console.log('A new song has been created.');
    },

    /**************************************************************************
    Validation:
    
        song.isValid();         // bool
        song.validationError    // Song title is required.
                                // Must call isValid(); first.
    **************************************************************************/
    validate: function(attrs) {
        if (!attrs.title) {
            return 'Song title required.'
        }
    }

});

var song = new Song();

song.set(songsJSON);

/******************************************************************************
Basic model methods:

    song.set({
        title: 'Tongue Tied',
        artist: 'Earl'
    });

    song.get('title');       //reads the attribute

    song.has('title');       //bool

    song.toJSON();           //converts to JSON object

    song.unset('title');     //removes attribute

    song.clear();            //clears song object
******************************************************************************/