const { electron, ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  topBarApi: {
    exit() {
      ipcRenderer.send("exit");
    },
    minimalise() {
      ipcRenderer.send("minim");
    },
    resize() {
      ipcRenderer.send("resize");
    },
  },
});
