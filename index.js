//module package core

// setTimeout(function () {
//   console.log("ishga tuwdi");
// }, 5000);

// let number = 0;

// setInterval(function () {
//   console.log("hisob", number);
//   number++;
// }, 5000);

// const fs = require("fs");
// const data = fs.readFileSync("./input.txt", "utf8");
// console.log(data);

// fs.writeFileSync("./input.txt", `${data} \n\t\t by BekzodAli`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

//module package external

// const moment = require("moment");
// const time = moment().format();
// console.log(time);

// const moment = require("moment");

// setInterval(() => {
//   const time = moment().format();
//   console.log(`hozirgi vaqt, ${time}`);
// }, 5000);

// const inquirer = require("inquirer");
// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
//   .then((answer) => {
//     console.log("man kiritgan raqam", answer.raqam);
//   })
//   .catch((err) => console.log(err));

const validator = require("validator");
// const test = validator.isEmail("foo@bar.com"); //true
// const test = validator.isInt("ab");  //false
const test = validator.isIP("114.543.24.154");
console.log("test", test);

const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);

const chalk = require("chalk");
const log = console.log;
log(chalk.blue("hello") + random + chalk.red("!"));
log(chalk.red(` uuid creates ${random}`));
//module package file
