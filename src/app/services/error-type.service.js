class ErrorType {
    constructor() {
        this.name = "ErrorType";
    }

    exists(name) {
        return {
            id: 'exists',
            message: name + 'already exists.'
        };
    }
}

export default ErrorType;
