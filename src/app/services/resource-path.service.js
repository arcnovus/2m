class ResourcePath {
    constructor() {
        this.name = 'ResourcePath';
        this._basePath = 'http://2m.firebaseio.com/';
        this._organizations = 'Organizations/';
        this._tests = 'Tests/';
        this._testTypes = 'TestTypes/';
        this._questions = 'Questions/';
        this._questionTypes = 'QuestionTypes/';
    }

    get BasePath() {
        return this._basePath;
    }

    get OrganizationPath() {
        return this.BasePath + this._organizations;
    }

    get TestPath() {
        return this.BasePath + this._tests;
    }

    get TestTypePath() {
        return this.BasePath + this._testTypes;
    }

    get QuestionPath() {
        return this.BasePath + this._questions;
    }

    get QuestionTypePath() {
        return this.BasePath + this._questionTypes;
    }
}

export default ResourcePath;
