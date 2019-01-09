// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
// require(['lib/jquery'], function($){ /** RequireJS cannot go to nester folder folder */
require(['jquery', 'knockout'], function($, ko){ /** RequireJS cannot go to parent folder */
    alert('AMD loaded with require.js');
    $('h3').css({border: 'solid 1px red'})
    $('body').append('<div>jQuery AMD working!');

    /** 
     * Knockout
     * 
     */
    var myViewModel = {
        fname: ko.observable('David'),
        lname: ko.observable('Shams')
    };
    ko.applyBindings(myViewModel);
    
})
