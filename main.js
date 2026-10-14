const {app, BrowserWindow, shell, dialog} = require('electron');
const path = require('node:path');

// Keep application data local and prevent embedded remote navigation.
function makeWindow() {
  const win = new BrowserWindow({
    title: 'Girison Token Print Studio — Girison Technologies',
    width: 1440, height: 940, minWidth: 1000, minHeight: 660,
    backgroundColor: '#f2f5fa',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  win.webContents.setWindowOpenHandler(({url}) => {
    if (url.startsWith('https://')) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });
}
app.whenReady().then(() => {
  makeWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) makeWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
