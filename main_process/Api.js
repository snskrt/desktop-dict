'use strict';

import MW from './dicts/mw/MonierWilliams';
import Apte from './dicts/apte/Apte';
import MWApi from './dicts/mw/Api';
import ApteApi from './dicts/apte/Api';

const mwDict = new MW();
const apteDict = new Apte();
const mwApi = new MWApi(mwDict);
const apteApi = new ApteApi(apteDict);

class Api {
    static findWord(request) {
        return [
            {dict: {code: 'mw', label: 'Monier Williams'}, data: mwDict.search(request)},
            {dict: {code: 'ap', label: 'Apte'}, data: apteDict.search(request)},
        ];
    }

    static listen(ipc) {
        ipc.on(Api.SEARCH, function (event, request) {
            event.returnValue = Api.findWord(request);
        });

        ipc.on(Api.VERSION, function (event) {
            event.returnValue = process.env.npm_package_version;
        });

        mwApi.getMethods().map((method) => {
            ipc.on(method.code, function(event, request) {
                event.returnValue = method.callback(request);
            })
        });

        apteApi.getMethods().map((method) => {
            ipc.on(method.code, function(event, request) {
                event.returnValue = method.callback(request);
            })
        });
    }
}

Api.SEARCH = 'search';
Api.VERSION = 'version';

export default Api;
