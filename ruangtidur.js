function power() {
  let hidupkan1 = document.getElementById("flexSwitchCheckChecked1");
  let hidupkan2 = document.getElementById("flexSwitchCheckChecked2");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");

  if (hidupkan1.checked) {
    lampu1.src = "assets/image/on.png";
  } else {
    lampu1.src = "assets/image/off.png";
  }

  if (hidupkan2.checked) {
    lampu2.src = "assets/image/on.png";
  } else {
    lampu2.src = "assets/image/off.png";
  }
}

function doublepower() {
  let hidupkan1 = document.getElementById("flexSwitchCheckChecked1,2");
  let hidupkan2 = document.getElementById("flexSwitchCheckChecked1,2");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");

  if (hidupkan1.checked) {
    lampu1.src = "assets/image/on.png";
  } else {
    lampu1.src = "assets/image/off.png";
  }

  if (hidupkan2.checked) {
    lampu2.src = "assets/image/on.png";
  } else {
    lampu2.src = "assets/image/off.png";
  }
}

function goBack() {
  window.history.back();
}
