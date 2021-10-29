const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  desktopCapturer,
} = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const url = require("url");

let mainWindow;
let child;
let screenShot;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 600,
    show: false,
    contextIsolation: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  // const startURL = isDev
  //   ? "http://localhost:3000"
  //   : `file://${path.join(__dirname, "../build/index.html")}`;

  // mainWindow.loadURL(startURL);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "Hello.html"),
      protocol: "file",
      slashes: true,
    })
  );

  mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function creatChildWindow() {
  child = new BrowserWindow({
    width: 800,
    height: 80,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  child.once("ready-to-show", () => child.show());
  child.loadURL(
    url.format({
      pathname: path.join(__dirname, "memo.html"),
      protocol: "file",
      slashes: true,
    })
  );
  child.webContents.openDevTools();
  child.on("closed", () => {
    child = null;
  });
}

// screenshot windows

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-dialog", (e) => {
  // dialog.showMessageBox("lofsd sdfsfsf");
  creatChildWindow();
});

ipcMain.on("open-memo", (event) => {
  dialog.showMessageBox("lofsd sdfsfsf");
  // creatChildWindow();
});

ipcMain.on("memodata", (event, arg) => {
  mainWindow.webContents.send("memoInfo", arg);
  console.log(arg);
});

// let takeScreen;
// ipcMain.on("take-screen-capture", (event) => {
//   takeScreen = () => {
//     let src;

//   };

//   takeScreen();
// });
