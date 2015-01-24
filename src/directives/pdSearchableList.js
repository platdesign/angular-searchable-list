'use strict';




module.exports = ['$compile', function($compile) {

	return {
		restrict: 'E',
		scope: {
			items: '=',
			searchPlaceholder: '@',
			orderBy: '=',
			orderByDesc: '='
		},
		template: function(el, attrs) {
			var templateString = '<div>'+
				'<header>'+
					'<input type="search" ng-model="search" placeholder="{{searchPlaceholder}}" />'+
				'</header>'+
				'<ul></ul>'+
				'<div ng-if="!filtered.length && items.length" class="no-results"></div>'+
				'<div ng-if="!items.length" class="no-items"></div>'+
			'</div>';

			var newEl = $(templateString);

			var listItem = angular.element('li', el);
				listItem.attr('ng-repeat', 'item in filtered = (items | filter:search | orderBy:orderBy:orderByDesc)');

			angular.element('ul', newEl).html(listItem);

			return newEl.html();
		},
		link:function(scope, el, attrs) {
			scope.searchPlaceholder = scope.searchPlaceholder || 'Filter';
		}
	};

}];
