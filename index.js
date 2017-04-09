'use strict';

import electron from 'electron';
import api from './main_process/Api'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('Starting SNSKRT DICT');

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

function sendStatusToWindow(text) {
    win.webContents.send('message', text);
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

autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...');
});
autoUpdater.on('update-available', () => {
    sendStatusToWindow('Update available.');
});
autoUpdater.on('download-progress', () => {
    sendStatusToWindow('Download update...');
});
autoUpdater.on('update-downloaded', () => {
    sendStatusToWindow('Update downloaded; will install in 5 seconds');
    setTimeout(function() {
        autoUpdater.quitAndInstall();
    }, 5000)
});

app.on('ready', function()  {
    autoUpdater.checkForUpdates();
});
