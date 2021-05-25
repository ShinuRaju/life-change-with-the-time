let hours = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let timeDiv = document.querySelector(".time");
let body = document.querySelector("body");

let scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

let datetime = () => {
  let dt = new Date();
  let hour = dt.getHours().toString().padStart(2, "0");
  let min = dt.getMinutes().toString().padStart(2, "0");
  let sec = dt.getSeconds().toString().padStart(2, "0");
  return { hour, min, sec };
};

setInterval(() => {
  hours.textContent = datetime().hour;
  min.textContent = datetime().min;
  sec.textContent = datetime().sec;
  color = Math.floor(scale(datetime().sec, 0, 59, 0, 255)).toString(16);
  body.style.backgroundColor = `#${color.padStart(3, "0")}`;
  console.log(color);
}, 1000);
