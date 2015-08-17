class OrganizationProfileController {
    constructor(OrganizationService) {
        this.name = 'OrganizationProfileController';
        this._orgService = OrganizationService;
        this.activate();
    }

    activate() {
//        this._orgService.setCurrent('aaa');
//        this.org = this._orgService.currentOrg;
    }

}

export default OrganizationProfileController;
