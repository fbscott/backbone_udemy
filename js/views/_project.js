/******************************************************************************
 * DOM dependencies:
 * - #js-vehicles
 *****************************************************************************/

var Vehicle = Backbone.Model.extend({ idAttribute: 'vin' });

var Vehicles = Backbone.Collection.extend({ model: Vehicle });

var VehicleView = Backbone.View.extend({

    tagName: 'tr',

    className: 'vehicle',

    id: function() {
        return this.model.get('vin');
    },

    events: {
        'click .js-delete': 'onClickDelete'
    },

    onClickDelete: function(e) {
        e.stopPropagation();
        vehicles.remove(this.model.get('vin'));
        this.remove();
    },

    attributes: function() {
        return {
            'data-color': this.model.get('color')
        }
    },

    render: function() {
        var template = _.template($('#vehicleTemplate').html());
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this;
    }
});

var VehiclesView = Backbone.View.extend({

    render: function() {
        var _this = this;

        this.collection.each(function(vehicle) {
            var _vehicleView = new VehicleView({ model: vehicle });

            _this.$el.append(_vehicleView.render().$el);
        });
    }
});

var vehicles = new Vehicles([
    new Vehicle({
        year: 1980,
        make: 'Datsun',
        model: '510',
        color: 'rust',
        vin: 'DTSN_510_X393346843'
    }),
    new Vehicle({
        year: 1989,
        make: 'Nissan',
        model: 'Sentra',
        color: 'silver',
        vin: 'NSSN_SNTR_X89354354002'
    }),
    new Vehicle({
        year: 1984,
        make: 'Chevy',
        model: 'Camaro',
        color: 'blue',
        vin: 'CHVY_CMR_X8113686433'
    }),
    new Vehicle({
        year: 1988,
        make: 'Ford',
        model: 'Club Wagon',
        color: 'blue',
        vin: 'FRD_CLB_WGN_X284036944'
    }),
    new Vehicle({
        year: 2000,
        make: 'Toyota',
        model: 'Camry',
        color: 'gray',
        vin: 'TYT_CMRY_X35611088889'
    })
]);

var vehiclesView = new VehiclesView({ el: '#js-vehicles', collection: vehicles });

vehiclesView.render();
