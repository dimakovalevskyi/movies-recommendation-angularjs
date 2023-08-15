angular.module('app').component('recommendForm', {
    templateUrl: 'app/components/recommend-form/recommend-form.ng.html',
    bindings: {
        onSubmit: '&',
    },
    controller: [
        'GENRES_MAP',
        function(GENRES_MAP) {
            this.genreOptions = Object.entries(GENRES_MAP).map(([key, value]) => {
                return {
                    label: value,
                    value: key,
                };
            });
            this.yearOptions = [1984, 2001, 2004, 2005, 2007, 2011, 2012, 2014, 2015, 2017, 2020, 2021, 2023];
            this.scoreOptions = [...Array(10).keys()]; // array from 0 to 9
            this.scoreOptions.splice(0, 1); // array from 1 to 9

            /**
             * @type {Filters}
             */
            this.filters = {
                genre: null,
                year: null,
                score: null,
            };

            this.submit = function() {
                console.log('submit');
                this.onSubmit({filters: this.filters});
            };
        }
    ]
});
