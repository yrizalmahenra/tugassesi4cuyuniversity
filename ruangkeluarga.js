function saklar() {
  let input1 = document.getElementById("flexSwitchCheckChecked1");
  let input2 = document.getElementById("flexSwitchCheckChecked2");
  let input3 = document.getElementById("flexSwitchCheckChecked3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

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
}

function tigasaklar () {
  let input1 = document.getElementById("flexSwitchCheckChecked1-3");
  let input2 = document.getElementById("flexSwitchCheckChecked1-3");
  let input3 = document.getElementById("flexSwitchCheckChecked1-3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

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
}





function goBack() {
  window.history.back();
}




