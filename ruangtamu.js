function saklar() {
  let input1 = document.getElementById("flexSwitchCheckChecked1");
  let input2 = document.getElementById("flexSwitchCheckChecked2");
  let input3 = document.getElementById("flexSwitchCheckChecked3");
  let input4 = document.getElementById("flexSwitchCheckChecked4");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");

  if (input1.checked) {
    lampu1.src = "assets/image/on.png";
  } else {
    lampu1.src = "assets/image/off.png";
  }
  if (input2.checked) {
    lampu2.src = "assets/image/on.png";
  } else {
    lampu2.src = "assets/image/off.png";
  }
  if (input3.checked) {
    lampu3.src = "assets/image/on.png";
  } else {
    lampu3.src = "assets/image/off.png";
  }
  if (input4.checked) {
    lampu4.src = "assets/image/on.png";
  } else {
    lampu4.src = "assets/image/off.png";
  }
}

function doublesaklar() {
  let input1 = document.getElementById("flexSwitchCheckChecked1-4");
  let input2 = document.getElementById("flexSwitchCheckChecked1-4");
  let input3 = document.getElementById("flexSwitchCheckChecked1-4");
  let input4 = document.getElementById("flexSwitchCheckChecked1-4");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");

  if (input1.checked) {
    lampu1.src = "assets/image/on.png";
  } else {
    lampu1.src = "assets/image/off.png";
  }
  if (input2.checked) {
    lampu2.src = "assets/image/on.png";
  } else {
    lampu2.src = "assets/image/off.png";
  }
  if (input3.checked) {
    lampu3.src = "assets/image/on.png";
  } else {
    lampu3.src = "assets/image/off.png";
  }
  if (input4.checked) {
    lampu4.src = "assets/image/on.png";
  } else {
    lampu4.src = "assets/image/off.png";
  }
}

function goBack() {
  window.history.back();
}
