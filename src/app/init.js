angular.module('app', [
    'app.templates',
]);


angular.module('app').config(
    function() {
        console.log('test log from config');
    }
);
