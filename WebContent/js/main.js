/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
angular.module('app', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('propertiesConstant', {
    API_URL: '/projectTemplate2/api'
  })
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'partials/login.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'app',
              files: ['js/controllers/LoginController.js', 'js/services/MainServices.js']
            })
          }
        }
      })
      .state('home', {
        url: '/',
        controller: 'CarouselDemoCtrl',
        templateUrl: 'partials/home.html',
        resolve: {
          loadMyFiles: function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'app',
              files: ['js/CarouselDemoCtrl.js']
            })
          }
        }
      })
      .state('about', {
        url: '/about',
        controller: 'PageCtrl',
        templateUrl: 'partials/about.html'
      })
      .state('pricing', {
        url: '/pricing',
        controller: 'PageCtrl',
        templateUrl: 'partials/pricing.html'
      })
      .state('services', {
        url: '/services',
        controller: 'PageCtrl',
        templateUrl: 'partials/services.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'PageCtrl',
        templateUrl: 'partials/contact.html'
      })
      .state('faq', {
        url: '/faq',
        controller: 'BlogCtrl',
        templateUrl: 'partials/faq.html'
      })
      .state('blog', {
        url: '/blog',
        controller: 'BlogCtrl',
        templateUrl: 'partials/blog.html'
      })
      .state('post', {
        url: '/post',
        controller: 'BlogCtrl',
        templateUrl: 'partials/blog_item.html'
      })
      .state('404', {
        url: '/404',
        controller: 'PageCtrl',
        templateUrl: 'partials/404.html'
      })
  }]);

/**
 * Controls the Blog
 */
angular.module('app').controller('BlogCtrl', function( /* $scope, $location, $http */ ) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
angular.module('app').controller('PageCtrl', function( /* $scope, $location, $http */ ) {
  console.log("Page Controller reporting for duty.");

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
