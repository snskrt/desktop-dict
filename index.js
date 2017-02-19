'use strict';

import electron from 'electron';
import api from './main_process/Api'

const app = electron.app;
const browserWindow = electron.BrowserWindow;
const menu = electron.Menu;

api.listen(electron.ipcMain);

let win;
function createWindow() {
    win = new browserWindow({width: 600, height: 800});
    win.loadURL(`file://${__dirname}/assets_build/index.html`);

    win.on('closed', function () {
        win = null;
    });

    menu.setApplicationMenu(menu.buildFromTemplate(createMenu()));
}

function createMenu() {
    return [
        {
            label: "Application",
            submenu: [
                { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
                { type: 'separator' },
                { label: 'Quit', accelerator: 'Command+Q', click: function() { app.quit(); }}
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
                { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
                { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
            ]
        }
    ];
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
