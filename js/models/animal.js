var Animal = Backbone.Model.extend({
    walk: function() {
        console.log('Animal walking . . .');
    }
});

// dog iherits methods from base class (constructor)
// var Dog = Animal;

// Dog overrides Animal walk method
var Dog = Animal.extend({
    walk: function() {
        // if I wanted to keep the original welk function from the base constructor
        // Animal.prototype.walk.apply(this);
        
        console.log('Dog walking . . .');
    }
});

var dog = new Dog();

dog.walk();
