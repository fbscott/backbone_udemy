// Create a Backbone model for a Vehicle. A Vehicle is uniquely identified via one of its
// attributes called "registrationNumber", which cannot be null or undefined.

var Vehicle = Backbone.Model.extend({
    // Vehicles can be retrieved from the server at "/api/vehicles".
    rootUrl: '/api/vehicles',

    idAttribute: 'registrationNumber',

    // A Vehicle should have a method called start(), which logs a message in the console:
    // "Vehicle started."
    start() {
        console.log('Vehicle started.');
    },

    validate(attrs) {
        if (!attrs.registrationNumber) {
            return 'Registration number required.';
        }
    }
});

// Derive a Backbone model from the Vehicle and call it Car.
var Car = Vehicle.extend({
    // Override the start() method of the Vehicle inside the Car and log a message as: "Car
    // with registration number {registrationNumber} started.", where {registrationNumber}
    // should be the value of the registrationNumber attribute
    start() {
        console.log('Car with registration number ' + this.get('registrationNumber') + ' started.');
    }
});

// Create an instance of Car.
var car = new Car();

// Initialise Car with the following attributes:
// • registrationNumber: XLI887
// • color: Blue
car.set({
    registrationNumber: 'XL1887',
    color: 'Blue'
});

// Remove the registrationNumber attribute of the car object
car.unset('registrationNumber');

// Ask the car if it’s valid, and if not, log the validation error in the console.
function isCarValid() {
    var _validationMessage;

    if (!car.isValid()) {
        _validationMessage = car.validationError;
    } else {
        _validationMessage = 'Valid registration.';
        car.start();
    }

    console.log(_validationMessage);
}

isCarValid();

// Set the registrationNumber to XLI887 again.
car.set('registrationNumber', 'XL1887');

// Ask the car if it’s valid and log the result in the console.
isCarValid();

// Start the car.
