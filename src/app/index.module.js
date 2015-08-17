/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import ResourcePath from './services/resource-path.service';
import MainController from './main/main.controller';
import OrganizationService from './services/organization.service';
import organizationProfile from './settings/organization-profile/organization-profile.directive';
import OrganizationProfileController from './settings/organization-profile/organization-profile.controller';


angular.module('2m', ['ionic', 'firebase', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://2m.firebaseio.com/')
    .config(config)
    .run(runBlock)
    .service(OrganizationService.name, OrganizationService)
    .service(ResourcePath.name, ResourcePath)
    .controller(MainController.name, MainController)
    .controller(OrganizationProfileController.name, OrganizationProfileController)
    .directive('organizationProfile', organizationProfile)
    .config(routerConfig);
