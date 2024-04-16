document.getElementById("plus1").onclick = plus1;
document.getElementById("minus1").onclick = minus1;
document.getElementById("choice1").onclick = choice1;
document.getElementById("choice2").onclick = choice2;
document.getElementById("choice3").onclick = choice3;
document.getElementById("choice4").onclick = choice4;
document.getElementById("choice5").onclick = choice5;

List1 = ["you gain 2 life.","Draw two cards.","Draw a card and discard a card","add 2 mana of any combination","create a 2/2 girafe white creature token"];
List2 = ["you gain 3 life.","Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.","target creature gain +2+0 and haste until end of turn"," Create a 3/3 Kavu creature token with trample that’s all colors.","reaveal the top 5 cards of your library, put a land card in your hand and the rest at the bottom of your library"];
List3 = ["you gain 5 life.","Gain control of target creature.","look at the top 4 cards of your library, put one in your hand and put the rest at the bottom of your library","red creature gain haste, green trample, bleu shourd, white lifelink, black deathtouch until the end of the turn","Target player's life total becomes 10."];
List4 = ["you gain 15 life.","Destroy target creature, artifact or enchantement. Create a treasure token.","target creature gains an indestructibility counter and 3 counter +1+1","Choose up to two target creatures. For each of them, put a number of +1/+1 counters on it equal to the number of colors it is.","Destroy target permanent that’s one or more colors."];
List5 = ["you gain 100 life.","You get an emblem with 'Creatures you control get +3/+3 and have trample'.","reveal the top 10 cards of your library, put all creature on the battlefirld with an indestructibility counter, they gain haste until end of turn","Return target multicolored card from your graveyard to your hand. If that card was all colors, draw a card and create two Treasure tokens. ","You gain X life and draw X cards, where X is the number of lands you control."];


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
