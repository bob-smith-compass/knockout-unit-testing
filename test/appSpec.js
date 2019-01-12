// Knockout View Models
// This should be in it's own file and imported by the Jasmine Tests
function DeveloperViewModel() {
    this.firstName = ko.observable('David');
    this.lastName = ko.observable('Shams');

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
        expect(dev.firstName()).toBe('David');
        expect(dev.lastName()).toBe('Shams');
    });
    it("should set developer first name to string inputted", function(){
        dev.firstName('David');
        expect(dev.firstName()).toBe('David');
    });
    it("should set developer last name to string inputted", function(){
        dev.lastName('Developer');
        expect(dev.lastName()).toBe('Developer');
    });
    it("should set developer full name to be first name, a space, then last name", function(){        
        dev.firstName('John');
        dev.lastName('Doe');
        expect(dev.fullName()).toBe('John Doe');
    });
});