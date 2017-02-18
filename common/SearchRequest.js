'use strict';

class SearchRequest
{
    constructor(query, settings) {
        this.query = query;
        this.settings = settings;
    }

    set settings(settings) {
        this.fromEncoding = settings.inputEncoding;
        this.toEncoding = settings.outputEncoding;
    }
}

export default SearchRequest;
