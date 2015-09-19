/*
 * angular-collapsible-block v0.0.1
 * (c) 2015 Dan Mindru http://mindrudan.com
 * License: MIT
 */

angular.module('dm.collapsibleBlock', [])
       .directive('collapsible', collapsibleBlock);


/*
 * @param <String> attrs.title: the title will be displayed by default
 * @param <String> attrs.collapsedIcon: the class for the title icon when collapsed (no icon default).
 * @param <String> attrs.expandedIcon: the class for the title icon when expanded (no icon default).
 */
function collapsibleBlock(){
  function collapsibleLink(scope, element, attrs){
    scope.collapsed = true;
    scope.title = attrs.collapsibleTitle;
    scope.collapsedIcon = attrs.collapsedIcon;
    scope.expandedIcon = attrs.expandedIcon;

    scope.toggle = function collapsibleToggle(e){
      // Prevent anchor navigation.
      e.preventDefault();
      scope.collapsed = !scope.collapsed;
    };
  }

  return {
    scope: {},
    transclude: true,
    restrict: 'E',
    replace: true,
    template: '<section class="clps" ng-class="{\'clps--expanded\': collapsed}">
                <a href="#" class="clps__title" ng-click="toggle($event)">
                  <i class="{{collapsedIcon}}" ng-if="collapsedIcon && collapsed"></i>
                  <i class="{{expandedIcon}}" ng-if="expandedIcon && !collapsed"></i>
                  <span>{{title}}</span>
                </a>

                <section ng-transclude class="clps__content" ng-show="!collapsed"></section>
              </section>',
    link: collapsibleLink
  }
}