angular.module('app').component('movieCard', {
    templateUrl: 'app/components/movie-card/movie-card.ng.html',
    bindings: {
        movie: '<',
    },
    controller: [
        'GENRES_MAP',
        function(GENRES_MAP) {
            this.GENRES_MAP = GENRES_MAP;
        }
    ]
});
