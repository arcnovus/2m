function organizationProfile(OrganizationService) {
    'ngInject';
    var directive = {
        restrict: 'E', // can only be used as an <element>
        replace: true, // the <element> will be replaced by the template
        scope: {}, // it has it's own isolated scope
        templateUrl: 'app/settings/organization-profile/organization-profile.template.html', // this is where the html is
        controller: 'OrganizationProfileController as vm' // this is where the logic is
    };
    return directive;
}

export default organizationProfile;
