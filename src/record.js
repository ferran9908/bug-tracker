const fs = require("fs");
const ioHook = require("iohook");
const screenshot = require("screenshot-desktop");
const os = require("os");
const path = require("path");

const { makeScreenshot } = require("./utils/screenshotMaker");

// UI Elements
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const statusTxt = document.getElementById("status");

// Event Listeners
startBtn.addEventListener("click", () => {
  ioHook.start();
  statusTxt.innerHTML = "Recording Started";
});
stopBtn.addEventListener("click", () => {
  ioHook.stop();
  statusTxt.innerHTML = "Recording Stopped";
});

const desktopDir = path.join(os.homedir(), "Desktop");

ioHook.on("mouseclick", () => {
  makeScreenshot();
});

ioHook.on("keydown", () => {
  makeScreenshot();
});
