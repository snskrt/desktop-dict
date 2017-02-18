'use strict';

class Api
{
    constructor(apteDict) {
        this.apteDict = apteDict;
    }

    getMethods() {
        const _this = this;
        return [
            {
                code: Api.FIND_BY_LNUM,
                callback: function(request) {
                    return _this.apteDict.findByLnum(String(request));
                }
            }
        ]
    }
}

Api.FIND_BY_LNUM = 'find_by_lnum';

export default Api;
