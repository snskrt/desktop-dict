'use strict';

class Api
{
    constructor(mwDict) {
        this.mwDict = mwDict;
    }

    getMethods() {
        const _this = this;
        return [
            {
                code: Api.FIND_AUTHORITY,
                callback: function(request) {
                    return _this.mwDict.findAuthority(String(request));
                }
            },
            {
                code: Api.FIND_ABBREVIATION,
                callback: function(request) {
                    return _this.mwDict.findAbbreviation(String(request));
                }
            },
        ]
    }
}

Api.FIND_AUTHORITY = 'find_authority';
Api.FIND_ABBREVIATION = 'find_abbreviation';

export default Api;
