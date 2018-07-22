/* eslint no-underscore-dangle: 0 */
import { RequestHook } from 'testcafe';

const DEFAULT_OPTIONS = {
    logRequestHeaders: true,
    logRequestBody: true,
    logResponseHeaders: true,
    logResponseBody: false,
    includeHeaders: true,
    includeBody: true
};

export class RequestLogger extends RequestHook {
    constructor(requestFilterRuleInit) {
        super(requestFilterRuleInit, DEFAULT_OPTIONS);
        this.processedRequests = {};
        this.processedResponses = {};
    }

    onRequest(event) {
        if (!this.processedRequests[event._requestInfo.requestId]) {
            this.processedRequests[event._requestInfo.requestId] = 0;
        }
        this.processedRequests[event._requestInfo.requestId] = this.processedRequests[event._requestInfo.requestId] + 1;
        if (this.processedRequests[event._requestInfo.requestId] === 1) {
            console.log(`OK  RQ - ${event._requestInfo.requestId}`);
        } else {
            console.log(`ERR RQ - ${event._requestInfo.requestId} ${this.processedRequests[event._requestInfo.requestId]}`);
        }
    }

    onResponse(event) {
        if (!this.processedResponses[event.requestId]) {
            this.processedResponses[event.requestId] = 0;
        }
        this.processedResponses[event.requestId] = this.processedResponses[event.requestId] + 1;
        if (this.processedResponses[event.requestId] === 1) {
            console.log(`OK  RS - ${event.requestId}`);
        } else {
            console.log(`ERR RS - ${event.requestId} ${this.processedResponses[event.requestId]}`);
        }
    }
}
