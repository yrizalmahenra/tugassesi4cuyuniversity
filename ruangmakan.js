function power() {
  let hidupkan = document.getElementById("flexSwitchCheckChecked");

  let lampu = document.getElementById("lampu");

  if (hidupkan.checked) {
    lampu.src = "assets/image/on.png";
  } else {
    lampu.src = "assets/image/off.png";
  }
}

function goBack() {
  window.history.back();
}
