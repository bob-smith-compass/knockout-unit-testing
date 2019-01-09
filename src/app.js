// // Knockout View Models
// // This should be in it's own file and imported by the Jasmine Tests

define(['./src/app', 'jquery', 'underscore', './test-helper', '../lib/knockout/knockout'], function(App, $, _, testHelper, ko) {

    function DeveloperViewModel() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
    
        this.fullName = ko.computed(function() {
            return this.firstName() + " " + this.lastName();
        }, this);
    }  // DeveloperViewModel
    
    // Jasmine Tests
    describe('Developer View Models', function(){
        var dev;
        
        beforeEach(function() {
            dev = new DeveloperViewModel();
        });
        it("should set model defaults when created", function(){
            expect(dev.firstName()).toBe('');
            expect(dev.lastName()).toBe('');
        });
        it("should set developer first name to string inputted", function(){
            dev.firstName('uShip');
            expect(dev.firstName()).toBe('uShip');
        });
        it("should set developer last name to string inputted", function(){
            dev.lastName('Developer');
            expect(dev.lastName()).toBe('Developer');
        });
        it("should set developer full name to be first name, a space, then last name", function(){        
            dev.firstName('uShip');
            dev.lastName('Developer');
            expect(dev.fullName()).toBe('uShip Developer');
        });
    });
    

    describe('just checking', function() {

        testHelper.setup();

        it('works for app', function() {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
