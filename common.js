import {RequestLogger} from './request-logger';

const filterFunction = function (request) {
    return !/^https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(request.url);
};

const hook = new RequestLogger(filterFunction);

module.exports = {
    hook
};
