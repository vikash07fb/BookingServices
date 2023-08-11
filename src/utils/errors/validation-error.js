const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor(error){
            super();
             let explanation = [];
             error.error.forEach(element => {
                explanation.push(element.message);
             });
            this.name = "ValidationError";
            this.message = "Not Able to validate the data sent in the request";
            this.explanation = explanation;
            this.statusCode = StatusCodes.BAD_REQUEST;
        }


}

module.exports = ValidationError;