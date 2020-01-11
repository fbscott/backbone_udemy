// Create a Backbone collection for the Vehicle model you created in the last project.

var Vehicle = Backbone.Model.extend({
    // Vehicles can be retrieved from the server at "/api/vehicles".
    rootUrl: '/api/vehicles',

    idAttribute: 'registrationNumber',

    start() {
        console.log('Vehicle started.');
    },

    validate(attrs) {
        if (!attrs.registrationNumber) {
            return 'Registration number required.';
        }
    }
});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

var Car = Vehicle.extend({
    start() {
        console.log('Car with registration number ' + this.get('registrationNumber') + ' started.');
    }
});

// Add the following cars inside the collection:
// * car1: { registrationNumber = “XLI887”, colour = “Blue” }
// * car2: { registrationNumber = “ZNP123”, colour = “Blue” }
// * car3: { registrationNumber = “XUV456”, colour = “Gray” }

var vehicles = new Vehicles([
    new Car({ registrationNumber: 'XLI887', color: 'Blue' }),
    new Car({ registrationNumber: 'ZNP123', color: 'Blue' }),
    new Car({ registrationNumber: 'XUV456', color: 'Gray' })
]);

// Find all the Blue cars and log them in the console.

var blueCars = vehicles.where({ color: 'Blue' });

console.log('Blue Cars: ', blueCars);

// Find the car with the registration number XLI887 and log it in the console.

var xli887 = vehicles.findWhere({ registrationNumber: 'XLI887' });

console.log(xli887);

// Remove this car from the collection.

vehicles.remove(xli887);

// Convert the collection to a JSON object and log it in the console.

console.log(vehicles.toJSON());

// Iterate the collection and log each car in the console. 

vehicles.each(function(vehicle) {
    // console.log(vehicle.attributes);
    vehicle.start();
});
