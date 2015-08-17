class OrganizationProfileController {
    constructor(OrganizationService, $scope) {
        this.name = 'OrganizationProfileController';
        this._orgService = OrganizationService;
        this.activate($scope);
    }

    activate($scope) {
        return this._orgService.getById('-JwtOVhzv6bltCA3DYYC').then(org => {
            this.org = org;
            this.org.$bindTo($scope, 'vm.org');
        });
    }

}

export default OrganizationProfileController;
