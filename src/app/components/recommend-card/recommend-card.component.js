angular.module('app').component('recommendCard', {
    templateUrl: 'app/components/recommend-card/recommend-card.ng.html',
    controller: [
        'RecommendationsService',
        function(RecommendationsService) {
            this.recommendation = null;
            this.pristine = true;
            this.loading = false;

            this.findMovie = filters => {
                this.recommendation = null;
                this.pristine = false;
                this.loading = true;

                RecommendationsService.getRecommendationByFilters(filters)
                    .then(recommendation => {
                        this.recommendation = recommendation;
                        this.loading = false;
                    });
            };
        }
    ]
});
