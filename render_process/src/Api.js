'use strict';

import electron from 'electron';

class Api {
    static call(method, request) {
        const ipc = electron.ipcRenderer;
        return ipc.sendSync(method, request);
    }
}

export default Api;
