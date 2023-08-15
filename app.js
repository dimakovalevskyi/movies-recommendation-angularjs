"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _iterableToArrayLimit(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,l,i=[],u=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw o}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}angular.module("app",["app.templates"]),angular.module("app.templates",[]),angular.module("app").constant("GENRES_MAP",{action:"Action",drama:"Drama",comedy:"Comedy",cartoon:"Cartoon"}),angular.module("app").service("RecommendationsService",["$http","$q",function(t,e){var n=null;function r(r){return e(function(r,e){if(n)return r(n);t.get("db.json").then(function(e){n=e.data,r(e.data)}).catch(e)}).then(function(e){return t=r,e.filter(function(e){var r=!0;return t.genre&&(r=r&&e.genre_type===t.genre),t.year&&(r=r&&e.year===t.year),r=t.score?r&&e.rating_score>=t.score:r});var t})}return this.getRecommendationByFilters=function(e){return r(e).then(function(e){return 0===(e=e).length?null:e[Math.floor(Math.random()*e.length)]})},this}]),angular.module("app").component("app",{templateUrl:"app/components/app/app.ng.html",controller:function(){this.bannerText="Movie Recommendation App"}}),angular.module("app").component("movieCard",{templateUrl:"app/components/movie-card/movie-card.ng.html",bindings:{movie:"<"},controller:["GENRES_MAP",function(e){this.GENRES_MAP=e}]}),angular.module("app").component("placeholder",{templateUrl:"app/components/placeholder/placeholder.ng.html",bindings:{text:"<"}}),angular.module("app").component("recommendCard",{templateUrl:"app/components/recommend-card/recommend-card.ng.html",controller:["RecommendationsService",function(r){var t=this;this.recommendation=null,this.pristine=!0,this.loading=!1,this.findMovie=function(e){t.recommendation=null,t.pristine=!1,t.loading=!0,r.getRecommendationByFilters(e).then(function(e){t.recommendation=e,t.loading=!1})}}]}),angular.module("app").component("recommendForm",{templateUrl:"app/components/recommend-form/recommend-form.ng.html",bindings:{onSubmit:"&"},controller:["GENRES_MAP",function(e){this.genreOptions=Object.entries(e).map(function(e){var e=_slicedToArray(e,2),r=e[0];return{label:e[1],value:r}}),this.yearOptions=[1984,2001,2004,2005,2007,2011,2012,2014,2015,2017,2020,2021,2023],this.scoreOptions=_toConsumableArray(Array(10).keys()),this.scoreOptions.splice(0,1),this.filters={genre:null,year:null,score:null},this.submit=function(){console.log("submit"),this.onSubmit({filters:this.filters})}}]}),angular.module("app").component("loader",{templateUrl:"app/components/loader/loader.ng.html"});