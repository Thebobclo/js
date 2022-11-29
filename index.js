let answerPpl = String(prompt("Не огонь , а жжётся? "));
let summ = null;
let summError = null;
if (answerPpl == "крапива" || answerPpl == "Крапива") {
  alert("Вы угадали");
  summ++;
  alert("Игра окончена");
} else {
  alert("Вы не угадали ");
  summError++;
}

let answerPpltwo = String(prompt("Кругом вода,а с питьем беда? "));
if (answerPpltwo == "море" || answerPpltwo == "Море") {
  alert("Вы угадали");
  summ++;
  alert("Игра окончена");
} else {
  alert("Вы не угадали");
  summError++;
}

let answerPplthree = String(prompt("К вечеру умирает,поутру оживает? "));
if (answerPplthree == "День" || answerPplthree == "день") {
  alert("Вы угадали");
  summ++;
  alert("Игра окончена");
} else {
  alert("Вы не угадали");
  summError++;
}
alert("Сделано задач верно: " + summ + "Сделано задач не верно: " + summError);