const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({window: 800, height: 600});

    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});

app.on('active', () => {
    if (mainWindow === null) {
        createWindow();
    };
});