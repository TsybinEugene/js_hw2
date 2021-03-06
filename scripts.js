/*1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».*/

console.log("1.------------------------------------");

let name,
    age, 
    city,
    phone, 
    email, 
    company;

name = prompt('Ваше Имя ');
age = prompt('Ваш возраст: ');
city = prompt('Город проживания: ');
phone = prompt('Номер телефона: ');
email = prompt('e-mail: ');
company = prompt('Место работы: ');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

/*2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».*/

console.log("2.------------------------------------");

let born = 2021 - age;

console.log(`${name} родился в ${born} году.`);

/*3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

console.log("3.------------------------------------");

let numStr = '678111';

let sum1 = +numStr[0] + +numStr[1] + +numStr[2];
let sum2 = +numStr[3] + +numStr[4] + +numStr[5];

console.log(sum1 == sum2 ? 'Да': 'Нет');

/*4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.*/

console.log("4.------------------------------------");

let A = 1;
console.log(A > 0 ? 'Верно' : 'Неверно');

A = 0;
console.log(A > 0 ? 'Верно' : 'Неверно');

A = -3;
console.log(A > 0 ? 'Верно' : 'Неверно');

/*5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.*/

console.log("5.------------------------------------");

let a = 10,
    b = 2,
    sum = a + b,
    sub = a - b,
    mult = a * b,
    div = a / b;

console.log(`Сумма: ${sum}`);
console.log(`Разность: ${sub}`);
console.log(`Произведение: ${mult}`);
console.log(`Частное: ${div}`);

squer = (sum > 1 ? sum**2 : 0);

console.log(squer);

/*6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.*/

console.log("6.------------------------------------");

console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно');

/*7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую).*/

console.log("7.------------------------------------");

let n = 53;

if (n >= 0 && n < 15) {
       console.log(`n = ${n}, 1-я четверть часа`);
} else if(n >= 15 && n < 30) {
       console.log(`n = ${n}, 2-я четверть часа`);
} else if(n >= 30 && n < 45) {
       console.log(`n = ${n}, 3-я четверть часа`);
} else if(n >= 45 && n < 59) {
       console.log(`n = ${n}, 4-я четверть часа`);
} else {
       console.log('Неверно указано число n');
}

/*8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).*/

console.log("8.------------------------------------");

let day = 12;
let result = '';

if (day > 0 && day <= 10) {
    result = `${day} день - это первая декада месяца`;
} else if (day > 10 && day <= 20) {
    result = `${day} день - это вторая декада месяца`;
} else if (day > 20 && day <= 31){
    result = `${day} день - это третья декада месяца`;
}

console.log(result);

/*9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.*/

console.log("9.------------------------------------");

let days = 300;
let years = Math.ceil(days / 365);
let month = days / 31;
let weeks = days / 7;
let hours =  days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

if (days >= 31 && days < 365) {
    years = 'Меньше года';
} else if (days < 31 && days >= 7) {
    years = 'Меньше года';
    month = 'Меньше месяца';
} else if (days < 7 && days >= 0) {
    years = 'Меньше года';
    month = 'Меньше месяца';
    weeks = 'Меньше недели';
}

console.log(`
Days: ${days},
years: ${years},
month: ${month},
weeks: ${weeks},
hours: ${hours},
mins: ${minutes},
sec: ${seconds},
`);
