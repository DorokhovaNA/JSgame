const levelsItem = document.querySelectorAll(".level__item");
const wrap = document.getElementById("wrapper"); //переменная стартового поля//
const btn = document.getElementById("button"); //переменная для кнопки//
const gridContainer = document.body.children[1];

let click = 0;
let cards = 0;

//выбор уровня//
btn.disabled = true;
let onClick = function (event) {
  event.preventDefault();
  for (let i = 0; i < levelsItem.length; i++) {
    levelsItem[i].classList.remove("level__item_selected");
  }
  event.currentTarget.classList.add("level__item_selected");
  btn.disabled = false;
};

//Скрыть меню:
const invisible = function () {
  wrap.classList.toggle("invisible");
  wrap.classList.remove("wrapper");
};

function chooseLevel() {

  let selectLevel = document.querySelector(".level__item_selected");
  switch (selectLevel.id) {
    case "easy":
      createWrapCards(3, getRandom(3));
      gridContainer.classList.toggle("grid-easy");
      break;
    case "middle":
      createWrapCards(6, getRandom(6));
      gridContainer.classList.toggle("grid-middle");
      break;
    case "hard":
      createWrapCards(10, getRandom(10));
      gridContainer.classList.toggle("grid-hard");
      break;
  }
}

function getRandom(value) {
  return Math.floor(Math.random() * value);
}

function createWrapCards(cards, randomValue) {
  const gameBoard =
    "<div class='grid__card-selected'><div class='grid__card-back'></div><div class='grid__card-over'></div></div>";

  for (let i = 0; i < cards; i++) {
    let newCards = document.createElement("div");
    newCards.classList = "grid__card";
    gridContainer.appendChild(newCards);
    newCards.innerHTML = gameBoard;

    let back = document.querySelectorAll(".grid__card-over");

    let rotateCards = () => {
      click++;

      if (click < 2) {
        newCards.children[0].classList.toggle("rotate");

        if (i === randomValue) {
          back[i].classList.remove("grid__card-over");
          back[i].classList.add("grid__card-back-bug");
        }
      } else {
        window.location.reload();
      }
      return;
    };
    newCards.addEventListener("click", rotateCards);
  }
}

for (let i = 0; i < levelsItem.length; i++) {
  levelsItem[i].addEventListener("click", onClick, false);
}
btn.addEventListener("click", invisible);
btn.addEventListener("click", chooseLevel);
