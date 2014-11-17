/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-14a9e91
 */
goog.provide('ng.material.components.sidenav');
goog.require('ng.material.components.backdrop');
goog.require('ng.material.core');
!function(){"use strict";function n(n,e,t,o,i,r){this.destroy=r.register(this,t.mdComponentId),this.isOpen=function(){return!!n.isOpen},this.toggle=function(){n.isOpen=!n.isOpen},this.open=function(){n.isOpen=!0},this.close=function(){n.isOpen=!1}}function e(n){return function(e){var t=n.get(e);return t||n.notFoundError(e),{isOpen:function(){return t&&t.isOpen()},toggle:function(){t&&t.toggle()},open:function(){t&&t.open()},close:function(){t&&t.close()}}}}function t(n,e,t,o,i,r,c){function a(a,d,s,u){function m(n){var t=d.parent();t[n?"on":"off"]("keydown",l),e[n?"enter":"leave"]($,t),$[n?"on":"off"]("click",f),e[n?"removeClass":"addClass"](d,"md-closed").then(function(){a.isOpen&&d.focus()})}function l(n){n.keyCode===i.KEY_CODE.ESCAPE&&(f(),n.preventDefault(),n.stopPropagation())}function f(){n(function(){u.close()})}var p=t(s.mdIsLockedOpen),$=r('<md-backdrop class="md-sidenav-backdrop md-opaque">')(a);c.inherit($,d),d.on("$destroy",u.destroy),a.$watch("isOpen",m),a.$watch(function(){return p(a.$parent,{$media:o})},function(n){d.toggleClass("md-locked-open",!!n),$.toggleClass("md-locked-open",!!n)})}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(n){return n.addClass("md-closed"),n.attr("tabIndex","-1"),a}}}function o(n,e,t){function o(n){n=i(n);var e;return angular.isDefined(e=a.get(n))?e:r(n)}function i(n){return d[n]||("("!=n.charAt(0)?"("+n+")":n)}function r(e){return a.put(e,!!n.matchMedia(e).matches)}function c(){var e=a.keys();if(e.length){for(var o=0,i=e.length;i>o;o++)a.put(e[o],!!n.matchMedia(e[o]).matches);t(angular.noop)}}var a=e.cacheFactory("$mdMedia",{capacity:15}),d={sm:"(min-width: 600px)",md:"(min-width: 960px)",lg:"(min-width: 1200px)"};return angular.element(n).on("resize",c),o}function i(n){var e=[];return{notFoundError:function(e){n.error("No instance found for handle",e)},getInstances:function(){return e},get:function(n){var t,o,i;for(t=0,o=e.length;o>t;t++)if(i=e[t],i.$$mdHandle===n)return i;return null},register:function(n,t){return n.$$mdHandle=t,e.push(n),function(){var t=e.indexOf(n);-1!==t&&e.splice(t,1)}}}}angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",t).controller("$mdSidenavController",n).factory("$mdMedia",o).factory("$mdComponentRegistry",i),n.$inject=["$scope","$element","$attrs","$timeout","$mdSidenav","$mdComponentRegistry"],e.$inject=["$mdComponentRegistry"],t.$inject=["$timeout","$animate","$parse","$mdMedia","$mdConstant","$compile","$mdTheming"],o.$inject=["$window","$mdUtil","$timeout"],i.$inject=["$log"]}();