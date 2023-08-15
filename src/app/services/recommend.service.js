/**
 * @typedef {{trailer_link: string, year: number, image_path: string, genre_type: string, description: string, id: number, title: string, rating_score: number}} Movie
 */
/**
 * @typedef {{score: number|null, year: number|null, genre: string|null}} Filters
 */
angular.module('app').service('RecommendationsService', [
    '$http',
    '$q',
    function($http, $q) {
        let _cachedDB = null;

        /**
         * @param {Movie[]} list
         * @param {Filters} filters
         * @return {Movie[]}
         * @private
         */
        function _filterListByFilters(list, filters) {
            return list.filter(movie => {
                let result = true;

                if (filters.genre) {
                    result = result && movie.genre_type === filters.genre;
                }
                if (filters.year) {
                    result = result && movie.year === filters.year;
                }
                if (filters.score) {
                    result = result && movie.rating_score >= filters.score;
                }

                return result;
            });
        }

        /**
         * @return {Promise<Movie[]>}
         * @private
         */
        function _getDB() {
            return $q((resolve, reject) => {
                if (_cachedDB) {
                    return resolve(_cachedDB);
                }
                $http.get('db.json')
                    .then(response => {
                        _cachedDB = response.data;
                        resolve(response.data);
                    })
                    .catch(reject);
            });
        }

        /**
         * @param {Filters} filters
         * @return {Promise<Movie[]>}
         * @private
         */
        function _getAllMoviesForFilters(filters) {
            return _getDB()
                .then(list => _filterListByFilters(list, filters));
        }

        /**
         * @param {*[]} items
         * @return {*|null}
         * @private
         */
        function _getRandomItemFromArray(items) {
            if (items.length === 0) {
                return null;
            }
            return items[Math.floor(Math.random() * items.length)];
        }

        /**
         * @param {Filters} filters
         * @return {Promise<Movie|null>}
         */
        this.getRecommendationByFilters = function(filters) {
            return _getAllMoviesForFilters(filters)
                .then(movies => _getRandomItemFromArray(movies));
        };

        return this;
    }
]);
