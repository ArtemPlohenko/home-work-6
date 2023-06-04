/** @format */

"use strict";

// ---- 1 ---- //
const list = document.querySelector("#list");
const li = list.getElementsByTagName("li");

alert(li[0].textContent);
alert(li[li.length - 1].textContent);
alert(li[1].textContent);
alert(li[3].textContent);
alert(li[2].textContent);

// ---- 2 ---- //
const title = document.querySelector("h1");
const myDiv = document.querySelector("#myDiv");
const p = myDiv.getElementsByTagName("p");
const myList = document.querySelector("#myList");
const newLi = myList.getElementsByTagName("li");
const span = document.querySelector("span");

title.style.backgroundColor = "#66ff66";

p[0].style.fontWeight = "bold";
p[1].style.color = "red";
p[2].style.textDecoration = "underline";
p[3].style.fontStyle = "italic";
myList.style.cssText = `display: flex; list-style-type: none;`;
span.style.display = "none";

// ---- 3 ---- //
const body = document.querySelector("body");

const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv");

const paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";

div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

// body.document.documentElement.appendChild(main);

// ---- 4 ---- //
const fullName = document.querySelector('[data-form="ПІБ"]');
const phoneInput = document.querySelector('[data-form="Номер телефону"]');
const birthdayInput = document.querySelector('[data-form="Дата народження"]');
const emailInput = document.querySelector('[data-form="Електронна пошта"]');

const btn = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const fullNameValue = fullName.value;
  const phoneValue = phoneInput.value;
  const birthdayValue = birthdayInput.value;
  const emailValue = emailInput.value;

  outBlock.textContent = `
  ПІБ: ${fullNameValue},
  Номер телефону: ${phoneValue},
  Дата народження: ${birthdayValue},
  Електронна пошта: ${emailValue}`;

  fullName.value = "";
  phoneInput.value = "";
  birthdayInput.value = "";
  emailInput.value = "";
});

// ---- 5 ---- //
const circle = document.querySelectorAll(".circle");
let circleValue;

const newCircle = Array.from(circle).map((item) => {
  circleValue = item.getAttribute("data-anim");
  item.classList.add(circleValue);
  // console.log(circleValue);
  return circleValue;
});

circle.forEach((item) => {
  const animation = item.classList.contains(circleValue);
  // console.log(animation);
  console.log(`Animation applied: ${animation}`);
});

// ---- 6 ---- //
const colorElements = document.querySelectorAll(".color");
const imgElements = document.querySelectorAll(".shoe");
const gradientElements = document.querySelectorAll(".gradient");

Array.from(colorElements).map((e) => {
  const price = parseInt(e.getAttribute("data-price"));

  e.addEventListener("click", () => {
    // e.preventDefault();

    colorElements.forEach((element) => {
      element.classList.remove("active");
    });
    e.classList.add("active");

    const priceElement = document.getElementById("outprice");
    priceElement.textContent = price.toFixed(2);

    // Images
    imgElements.forEach((el) => {
      el.classList.remove("show");
    });
    imgElements.forEach((el) => {
      if (el.getAttribute("color") === e.getAttribute("color")) {
        el.classList.add("show");
      }
    });

    // Gradients
    gradientElements.forEach((el) => {
      el.classList.remove("second");
    });
    gradientElements.forEach((el) => {
      if (el.getAttribute("color") === e.getAttribute("color")) {
        el.classList.add("second");
      }
    });
    //
  });
});
