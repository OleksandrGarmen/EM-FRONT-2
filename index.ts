import promptSync from 'prompt-sync';
import * as string_decoder from "node:string_decoder";
const prompt = promptSync();


// TASK #1
function check(value: string) {
  return value.trim().length > 0
}
let name:string = "Олександр"
let surname:string = "Гарменов"

if(!check (name) || !check(surname)){
  console.log("РОЗБІЙНИК, ПОЛЯ НЕ ПОВИННІ БУТИ ПУСТИМИ!!!")
} else{

  let user ={
    fullName:  `${name.trim()}  ${surname.trim()})`

}

console.log("Об'єкт користувача:",  user)
console.log("Ваше ім'я:",  user.fullName)

}



//TASK #2
function checkCredentials(saved: string, input: string): boolean {
  return saved === input;
}

let login:string = "admin"
let password:string = "12345"

let savedlogin:string = "admin"
let savedpassword:string = "12345"

let lg:string = String(prompt("Введіть ваш логін: "))
let ps:string = String(prompt("Введіть ваш пароль: "))

  let isLoginCorrect = checkCredentials(savedlogin, lg);
  let isPasswordCorrect = checkCredentials(savedpassword, ps);


if(isLoginCorrect && isPasswordCorrect){
  console.log("Вітаю, вхід успішний!")
} else{
  console.log("Вибачте, вхід закритий!")
}




//TASK #3
let name:string = String(prompt("Введіть назву товару: "));
let description:string = String(prompt("Введіть опис товару: "));
let price:number = Number(prompt("Введіть ціну товару: "));

function check(name: string) {
  if(name.trim().length <= 5){
    return "Назва має містити більше 5 символів.";
  }
  return true;
}
function checkprice(price:number){
  return price > 0;
}
let nameCheck = check(name);
let descCheck = check(description);
let priceCheck = checkprice(price);

if(check(name) && check(description) && checkprice(price)) {
  let Product = {
    name: name,
    description: description,
    price: price

  }
  console.log("Товар створено!", Product);
} else {
  if (nameCheck !== true) {
    console.log("Помилка у назві:", nameCheck);
  } else if (descCheck !== true) {
    console.log("Помилка в описі:", descCheck);
  } else if (!priceCheck) {
    console.log("Ціна має бути більшою за 0");
  } else {
    console.log("При створенні товару виникла помилка");
  }
}


//TASK #4
let weight: number = Number(prompt("Введіть Вашу вагу (кг): "));
let height: number = Number(prompt("Введіть Ваш зріст (см): "));

function check(height: number, weight: number): boolean {
  if (!(weight > 0 && height > 0)) {
    console.log("Дані мають бути числовими та більшими за 0");
    return false;
  }
  return true;
}

if (check(height, weight)) {
  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);

  let status = "";
  if (bmi < 18.5) {
    status = "Недостатня вага";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Норма";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Надмірна вага";
  } else {
    status = "Ожиріння";
  }

  console.log(`Ваш ІМТ: ${bmi.toFixed(2)} — ${status}`);
}



//TASK #5
let email: string = String(prompt("Введіть ваш email: ") || "");
let password: string = String(prompt("Введіть ваш пароль: ") || "");
let birthDateStr: string = prompt("Введіть вашу дату народження (ДД.ММ.РРРР): ") || "";

function calculateAge(birthDateStr: string): number {
  let parts = birthDateStr.split(".");
  if (parts.length !== 3) return NaN;

  let day = Number(parts[0]);
  let month = Number(parts[1]) - 1; // місяці в Date з 0
  let year = Number(parts[2]);

  let birthDate = new Date(year, month, day);
  if (isNaN(birthDate.getTime())) return NaN;

  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function checkEmail(email: string): boolean {
  if (email.length < 8) {
    console.log("Помилка: Email має бути довжиною не менше 8 символів");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    console.log("Помилка: Email має містити символи '@' та '.'");
    return false;
  }
  return true;
}

function checkpass(password: string): boolean {
  if (password.length <= 8 || password.length >= 16) {
    console.log("Пароль має бути більше 8 символів та менше 16");
    return false;
  }
  if (password.split("").every(char => char === password[0])) {
    console.log("Пароль не має складатись тільки з одного виду символів");
    return false;
  }
  return true;
}

function checkage(age: number): boolean {
  if (age <= 17 || age >= 100 || isNaN(age)) {
    console.log("Вік має бути більше 17 років і менше 100 років.");
    return false;
  }
  return true;
}

let age = calculateAge(birthDateStr);

let emailCheck = checkEmail(email);
let passwordCheck = checkpass(password);
let ageCheck = checkage(age);

if (emailCheck && passwordCheck && ageCheck) {
  let User = {
    email,
    password,
    age
  };
  console.log("Користувача створено!", User);
} else {
  if (!emailCheck) console.log("Помилка у Email");
  if (!passwordCheck) console.log("Помилка в паролі");
  if (!ageCheck) console.log("Помилка у віці");
  console.log("При створенні користувача виникла помилка");
}



