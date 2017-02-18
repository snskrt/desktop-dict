'use strict';

import electron from 'electron';
import api from './main_process/Api'

const app = electron.app;
const browserWindow = electron.BrowserWindow;

api.listen(electron.ipcMain);

let win;
function createWindow() {
    win = new browserWindow({width: 600, height: 800});
    win.loadURL(`file://${__dirname}/assets_build/index.html`);

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
});
