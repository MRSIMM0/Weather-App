const remote = require("electron").remote;

const wind = remote.getCurrentWindow();

document.onreadystatechange = (event) => {
  if (document.readyState == "complete") {
    handleWindowControls();
  }
};

function handleWindowControls() {
  document.getElementById("exit").addEventListener("click", (event) => {
    wind.close();
  });
}
