// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
require(['jquery'], function($){ /** RequireJS cannot go to parent folder */
    alert('AMD loaded with require.js');
    $('h3').css({border: 'solid 1px red'})
    $('body').append('<div>jQuery AMD working!');
})