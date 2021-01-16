const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 750,
    minHeight: 750,
    backgroundColor: "white",
    frame: false,
    webPreferences: {
      enableRemoteModule: true,

      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  win.setMenu(null);
}

if (isDev === false) {
  win.setMenu(null);
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}
ipcMain.on("exit", (_, T) => {
  win.close();
});
ipcMain.on("minim", (_, T) => {
  win.minimize();
});
ipcMain.on("resize", (_, T) => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

function getTime() {
  return time;
}

app.whenReady().then(createWindow);
