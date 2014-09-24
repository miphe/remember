/* globals angular */
'use strict';

/**
 * Capturing Document-Click Events With AngularJS
 * @see http://www.bennadel.com/blog/2422-capturing-document-click-events-with-angularjs.htm
 */
angular.module('myApp.directives')
    .directive(  'ng-dom-click', function( $document, $parse ){

        var linkFunction = function( $scope, $element, $attributes ){
            var scopeExpression = $attributes.ngDomClick;
            var invoker = $parse( scopeExpression );
            $document.on( 'click', function( event ){
                    $scope.$apply(
                        function(){
                            invoker(
                                $scope,
                                {
                                    $event: event
                                }
                            );
                        }
                    );
                }
            );
            // TODO: Listen for "$destroy" event to remove
            // the event binding when the parent controller
            // is removed from the rendered document.
        };

        return( linkFunction );
    }
);
