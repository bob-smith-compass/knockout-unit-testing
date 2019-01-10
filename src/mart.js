// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
// require(['lib/jquery'], function($){ /** RequireJS cannot go to nester folder folder */
// require(['jquery', 'footer_amd'], function($, footer){ /** RequireJS cannot go to parent folder */
// define(['jquery', 'parent_amd'], function($){ /** footer, if we don't a module to use, we don't need a reference  */
define(['jquery', 'parent_amd'], function($){ /** if this module requires 
    * parent and parent requires jQuery do we need to include it here?!! 
    * yes, or you will get error:
    * Uncaught TypeError: $ is not a function
    */
    alert('startup AMD loaded with require.js');

    $('h3').css({border: 'solid 1px green'})
    $('body').append('<div>jQuery AMD working!');

})
