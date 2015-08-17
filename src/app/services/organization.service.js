class OrganizationService {
    constructor($q, ErrorType, Firebase, $firebaseArray, $firebaseObject, ResourcePath) {
        'ngInject';
        this.name = "OrganizationService";
        this._$q = $q;
        this._ErrorType = ErrorType;
        this._$firebaseObject = $firebaseObject;
        this._$firebaseArray = $firebaseArray;
        this._orgRef = new Firebase(ResourcePath.OrganizationPath);
    }

    add(name, details) {
        return this.getByName(name)
            .then(org => {
                console.log(org);
                if (!org) {
                    return this._add(name, details);
                } else {
                    let err = this._ErrorType.exists(name);
                    return this._$q.reject(err);
                }
            });
    }

    _add(name, details) {
        details.name = name;
        return this._$firebaseArray(this._orgRef)
            .$add(details)
            .then(newOrgRef => {

                return this._$firebaseObject(newOrgRef)
                    .$loaded()
                    .then(data => data);
            });
    }

    getById(orgId) {
        let org = this._$firebaseObject(this._orgRef.child(orgId));
        return org.$loaded().then((data) => data);
    }

    getByName(name) {
        let query = this._orgRef
            .orderByChild('name')
            .equalTo(name);

        return this._$firebaseArray(query)
            .$loaded()
            .then(orgs => orgs[0]);

    }

    getList() {
        let query = this._orgRef
            .orderByChild('name');

        return this._$firebaseArray(query)
            .$loaded()
            .then(orgs => orgs);
    }

    save(organization) {
        return organization.$save().then(ref => this._$firebaseObject(ref));
    }

}

export default OrganizationService;
