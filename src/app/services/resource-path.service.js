class ResourcePath {
    constructor() {
        this.name = 'ResourcePath';
        this._basePath = 'http://2m.firebaseio.com/';
        this._organizations = 'Organizations/';
        this._tests = 'Tests/';
        this._questions = 'Questions/';
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

    get QuestionPath() {
        return this.BasePath + this._questions;
    }
}

export default ResourcePath;
