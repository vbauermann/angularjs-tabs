/*
 * AngularJs Tabs
 * 
 * Vitor Bauermann Silveira
 * 
 * @licence: http://opensource.org/licenses/MIT
 */
var app = angular.module('app', ['ngTabs']);

app.controller('controller', ['$scope', function($scope){
	$scope.message = "Click on any of the above buttons to see the popovers in action"
	
}]);