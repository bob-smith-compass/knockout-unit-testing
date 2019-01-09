// require(['../lib/jquery'], function($){ /** when jQuery is loaded run this callback function */
// require(['lib/jquery'], function($){ /** RequireJS cannot go to nester folder folder */
require(['jquery', 'footer_amd'], function($, footer){ /** RequireJS cannot go to parent folder */
    alert('startup AMD loaded with require.js');
})
