//////////////////////////////////////////////////////////// Завдання 1 ////////////////////////////////////////////////////////////

// let age = prompt("Введіть ваш вік -> ");

// if (age >= 0 && age < 12)
// {
//     alert("Дитина!");
// }
// else if (age >= 12 && age < 18)
// {
//     alert("Підліток!");
// }
// else if (age >= 18 && age < 60)
// {
//     alert("Дорослий!");
// }
// else if (age >= 60)
// {
//     alert("Пенсіонер!");
// }
// else
// {
//     alert("Вік повинен бути додатнім...!");
// }

//////////////////////////////////////////////////////////// Завдання 2 ////////////////////////////////////////////////////////////

// let number = prompt("Введіть число від 0 до 9 -> ");

// switch (number)
// {
//     case '0':
//         alert(")");
//         break;
//     case '1':
//         alert("!");
//         break;
//     case '2':
//         alert("@");
//         break;
//     case '3':
//         alert("#");
//         break;
//     case '4':
//         alert("$");
//         break;
//     case '5':
//         alert("%");
//         break;
//     case '6':
//         alert("^");
//         break;
//     case '7':
//         alert("&");
//         break;
//     case '8':
//         alert("*");
//         break;
//     case '9':
//         alert("(");
//         break;
//     default:
//         alert("Введіть число від 0 до 9...!")
// }

//////////////////////////////////////////////////////////// Завдання 6 ////////////////////////////////////////////////////////////

// const usd = 1.21;
// const uah = 33.56;
// const rub = 90.43;

// let eur = prompt("Введіть кількість (EUR) -> ");

// let num = prompt("Оберіть валюту за номером (1.USD, 2.UAH, 3.RUB) -> ");

// switch (num)
// {
//     case '1':
//         sum = eur * usd;
//         alert("Міняю " + eur + " (EUR) - Отримую " + sum + " (USD)");
//         break;
//     case '2':
//         sum = eur * uah;
//         alert("Міняю " + eur + " (EUR) - Отримую " + sum + " (UAH)");
//         break;
//     case '3':
//         sum = eur * rub;
//         alert("Міняю " + eur + " (EUR) - Отримую " + sum + " (RUB)");
//         break;
//     default:
//         alert("Error!");
//         break;
// }

//////////////////////////////////////////////////////////// Завдання 7 ////////////////////////////////////////////////////////////

// let sum = prompt("Введіть суму покупки -> ");

// if (sum >= 200 && sum < 300)
// {
//     discount = sum / 100 * 3;
//     fullAmount = sum - discount;
// }
// else if (sum >= 300 && sum < 500)
// {
//     discount = sum / 100 * 5;
//     fullAmount = sum - discount;
// }
// else if (sum >= 500)
// {
//     discount = sum / 100 * 7;
//     fullAmount = sum - discount;
// }
// else
// {
//     alert("На цю суму меше 200 грн. знижки не має...!")
// }

// alert("З вас: " + fullAmount);

//////////////////////////////////////////////////////////// Завдання 9 ////////////////////////////////////////////////////////////

// let answer = prompt("Что делает оператор **? (1.Возводит в степень, 2.Умножает число само на себя, 3.Нет такого оператора)");
// let scores = 0;

// switch(answer)
// {
//     case '1':
//         alert("Yes")
//         scores += 2;
//         break;
//     case '2':
//         alert("No");
//         break;
//     case '3':
//         alert("No");
//         break;
//     default:
//         alert("Error!")
// }

// answer = prompt("Что такое ECMAScript? (1.Новый язык программирования, 2.Переработанная реализация Javascript, 3.Спецификация языка Javascript)");

// switch(answer)
// {
//     case '1':
//         alert("No");
//         break;
//     case '2':
//         alert("No");
//         break;
//     case '3':
//         alert("Yes");
//         scores += 2;
//         break;
//     default:
//         alert("Error!")
// }

// answer = prompt("Переменные apple и Apple (с большой буквы) – это одна и та же или разные? (1.Одна и та же, 2.Разные, 3.Слово «apple» является зарезервированным, нельзя использовать)");

// switch(answer)
// {
//     case '1':
//         alert("No");
//         break;
//     case '2':
//         alert("Yes");
//         scores += 2;
//         break;
//     case '3':
//         alert("No");
//         break;
//     default:
//         alert("Error!")
// }

// let res = scores;

// alert("Оценка: " + res);
