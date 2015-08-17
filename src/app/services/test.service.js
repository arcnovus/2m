class TestService {
    constructor($q, ErrorType, Firebase, $firebaseObject, $firebaseArray, ResourcePath) {
        'ngInject';
        this.name = 'TestService';

        this._$q = $q;
        this._ErrorType = ErrorType;
    }
}

export default TestService;
