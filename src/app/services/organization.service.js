class OrganizationService {
    constructor(Firebase, $firebaseArray, $firebaseObject, ResourcePath, $q) {
        'ngInject';
        this.name = "OrganizationService";
        this._$firebaseObject = $firebaseObject;
        this._orgRef = new Firebase(ResourcePath.OrganizationPath);
        this.organizationList = $firebaseArray(this._orgRef);
        this._$q = $q;
        console.log(this.organizationList);
    }

    add(name, details) {
        return this.get(name).then(org => {
            //            if (!org) {
            return this._add(name, details);
            //            } else {
            //                return org;
            //            }
        });
    }

    _add(name, details) {
        details.name = name;
        let newOrgRef = this._orgRef.push(details);
        newOrgRef.setPriority(name);
        return this._$q.when(this._$firebaseObject(newOrgRef));
    }

    update(name, details) {
        let ref = this._orgRef.child(name);
        ref.update(details);
    }

    remove(name) {
        let orgIndex = this.organizationList.$indexFor(name);
        return this.organizationList.$remove(orgIndex).then((ref => ref), (err => console.log(err)));
    }


    getById(orgId) {
        let org = this._$firebaseObject(this._orgRef.child(orgId));
        return org.$loaded().then(() => org);
    }

    getByName(name) {
        this._orgRef.orderByChild('name').once('value', snapshot => snapshot.val();

        }
        save(organization) {
            return organization.$save().then(ref => ref);
        }

    }

    export default OrganizationService;
