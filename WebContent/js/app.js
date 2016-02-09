'use strict';
/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
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
	BASE_URL : '/projectTemplate2',
	API_URL : '/projectTemplate2/api',
	STORAGE_KEY : 'x_auth_token',
	TOKEN_HEADER : 'X-AUTH-TOKEN',	
	LOCAL_STORAGE : 'LOCAL_STORAGE'
  })
  .factory('AuthInterceptor', function($q, $location, $rootScope) {
	return {		
		responseError : function(error) {
			if (error.status === 401 || error.status === 403) {				
				$location.path('/login');
			}
			return $q.reject(error);
		}
	};
	}).config(function($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	})
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        controller: 'DashboardController',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'app',
                    files:[
                    'js/controllers/DashboardController.js',
                    'js/services/authenticationServices.js',
                    'js/services/permissionServices.js',
					'js/directives/hasPermission.js',
					'js/directives/delete/ngDeleteClick.js',
                    'js/directives/header/header.js',
                    'js/directives/header/header-notification/header-notification.js',
                    'js/directives/sidebar/sidebar.js',
                    'js/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["libs/angular-toggle-switch/angular-toggle-switch.min.js",
                          "libs/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'HomeController',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'app',
              files:[
              'js/controllers/HomeController.js',
              'js/directives/timeline/timeline.js',
              'js/directives/notifications/notifications.js',
              'js/directives/chat/chat.js',
              'js/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
    	  url:'/login',
    	  controller : 'LoginController',
    	  templateUrl:'views/pages/login.html',
    	  resolve:{
			  loadMyFiles:function($ocLazyLoad) {
		            return $ocLazyLoad.load({
		              name:'app',
		              files:[		             
		              'js/controllers/LoginController.js',
		              'js/services/authenticationServices.js'
		              ]
		            })
		          }
    	  }
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'libs/angular-chart.js/dist/angular-chart.min.js',
                'libs/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'app',
                files:['js/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
   	  .state('404',{
       templateUrl:'404.html',
       url:'/404'
   })
  }]);

    
