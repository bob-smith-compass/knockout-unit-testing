// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
// require(['lib/jquery'], function($){ /** RequireJS cannot go to nester folder folder */
// require(['jquery', 'footer_amd'], function($, footer){ /** RequireJS cannot go to parent folder */
define(['jquery', 'footer_amd'], function($){ /** footer, if we don't a module to use, we don't need a reference  */
    alert('startup AMD loaded with require.js');
})
