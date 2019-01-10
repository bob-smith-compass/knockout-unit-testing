// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
// require(['lib/jquery'], function($){ /** RequireJS cannot go to nester folder folder */
require(['jquery', 'knockout', 'jasmine'], function($, ko, jasmine){ /** RequireJS cannot go to parent folder */
    alert('AMD loaded with require.js');
    $('h3').css({border: 'solid 1px red'})
    $('body').append('<div>jQuery AMD working!');

    /** 
     * Knockout
     * 
     */
    // var myViewModel = {
    //     fname: ko.observable('David'),
    //     lname: ko.observable('Shams')
    // };
    // ko.applyBindings(myViewModel);


    /** 
     * Jasmine Knockout Test
     * 
     */
    // Knockout View Models
// This should be in it's own file and imported by the Jasmine Tests
function DeveloperViewModel() {
    this.firstName = ko.observable('David');
    this.lastName = ko.observable('Shams');

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}  // DeveloperViewModel
    ko.applyBindings(new DeveloperViewModel());

var describe = window.describe;
var it = window.it;
var expect = window.expect;

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

})
