document.getElementById("plus1").onclick = plus1;
document.getElementById("minus1").onclick = minus1;
document.getElementById("choice1").onclick = choice1;
document.getElementById("choice2").onclick = choice2;
document.getElementById("choice3").onclick = choice3;
document.getElementById("choice4").onclick = choice4;
document.getElementById("choice5").onclick = choice5;

List1 = ["","","","",""];
List2 = ["","","","",""];
List3 = ["","","","",""];
List4 = ["","","","",""];
List5 = ["","","","",""];


function plus1() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  total_life += 1;
  total_life_element.textContent = String(total_life);
}

function minus1() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  if (total_life > 0) {
    total_life -= 1;
  }
  total_life_element.textContent = String(total_life);
}

function choice1() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  total_life += 2;
  total_life_element.textContent = String(total_life);
  ChoiceCapacity(List1);
}

function choice2() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  total_life += 1;
  total_life_element.textContent = String(total_life);
  ChoiceCapacity(List2);
}

function choice3() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  if (total_life > 0) {
    total_life -= 1;
    total_life_element.textContent = String(total_life);
    ChoiceCapacity(List3);
  } else {
    window.alert("not enought loyalty");
  }
}

function choice4() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);
  if (total_life >= 3) {
    total_life -= 3;
    total_life_element.textContent = String(total_life);
    ChoiceCapacity(List4);
  } else {
    window.alert("not enought loyalty");
  }
}

function choice5() {
  let total_life_element = document.getElementById("total_life");
  let total_life = Number(total_life_element.textContent);

  if (total_life >= 6) {
    total_life -= 6;
    total_life_element.textContent = String(total_life);
    ChoiceCapacity(List5);
  } else {
    window.alert("not enought loyalty");
  }
}

function ChoiceCapacity(List) {
  let randomNumber = Math.floor(Math.random() * List.length);
  let randomEvent = List[randomNumber];
  window.alert(randomEvent);
}
