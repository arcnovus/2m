class MainController {

    constructor(OrganizationService) {
        'ngInject';
        this.name = 'MainController';
        this._orgService = OrganizationService;
        this.activate();
    }

    activate() {
        console.info('acivating!');
        this._orgService.getByName('Arcnovus').then(org => {
            console.log(org);
            this.org = org;
        });
    }


}

export default MainController;
