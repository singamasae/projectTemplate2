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
		LOCAL_STORAGE : 'LOCAL_STORAGE',
		PAGE_TOTAL_ITEMS : 0,
		PAGE_CURRENT_PAGE : 1,
		PAGE_MAX_SIZE : 5,
		PAGE_ITEMS_PERPAGE : 10
	})
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'app',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
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
              'scripts/controllers/HomeController.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
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
		              'scripts/controllers/LoginController.js',
		              'scripts/services/authenticationServices.js'
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
                files:['scripts/controllers/chartContoller.js']
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
  }]);

    
