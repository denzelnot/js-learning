// День 2: сравнения и условия
let age = 49
console.log(age > 18)
console.log(age < 18)
console.log(age >= 50)
console.log(age === 49)
console.log(age !== 50)
console.log(typeof (age > 18))   // boolean

console.log(5 === 5)       // true
console.log(5 === "5")     // false: разные типы

Задание 2. 

let age = 49
if (age >= 50) {
  console.log("Уже 50")
} else {
  console.log(`До 50 осталось ${ 50-age} лет`)
}

Задание 3.

let fuel = 25   // литров в баке

if (fuel < 10) {
  console.log("Критично: заправиться срочно")
} else if (fuel < 30) {
  console.log("Мало: заправиться сегодня")
} else {
  console.log("Нормально")
}

Задание 3/2

let ball=100   // оценка
if ( ball< 50) {console.log("Неуд")}
else if (ball<70) {console.log("Удов")}
else if(ball<90) {console.log("Хорошо")}
else { console.log(`Отлично`)}

