const ipc = require("electron").ipcRenderer;

const form = document.getElementById("form");

let obj;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  obj = {
    status: form.elements["status"].value,
    memo: form.elements["memo"].value,
  };
  ipc.send("memodata", obj);
});
