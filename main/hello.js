const { desktopCapturer, ipcRenderer } = require("electron");

const btn = document.getElementById("ipcSender");
const screenShot = document.getElementById("screenshot");

btn.addEventListener("click", function () {
  ipcRenderer.send("open-dialog");
});

screenShot.addEventListener("click", function () {
  //   ipcRenderer.send("take-screen-capture");
  setInterval(() => {
    desktopCapturer.getSources({ types: ["screen"] }).then((sources) => {
      document.getElementById("img").src = sources[0].thumbnail.toDataURL(); // The image to display the screenshot
    });
  }, 5000);
});
ipcRenderer.on("memoInfo", (event, arg) => {
  const status = document.getElementById("status");
  const memo = document.getElementById("memo");

  status.innerText = arg.status;
  memo.innerText = arg.memo;
  console.log(arg);
});
