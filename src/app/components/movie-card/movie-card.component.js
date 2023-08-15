angular.module('app').component('movieCard', {
    templateUrl: 'app/components/movie-card/movie-card.ng.html',
    bindings: {
        movie: '<',
    },
    controller: [
        'GENRES_MAP',
        function(GENRES_MAP) {
            this.GENRES_MAP = GENRES_MAP;
            this.watchTrailer = function() {
                const windowFeatures = "left=100,top=100,width=640,height=320,popup";

                window.open(
                    this.movie.trailer_link,
                    "popupWindow",
                    windowFeatures,
                );
            };
        }
    ]
});
