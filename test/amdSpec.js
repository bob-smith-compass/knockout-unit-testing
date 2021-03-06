define(['./src/app', 'jquery', 'underscore', './test-helper'], function(App, $, _, testHelper) {

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
