const hrs = document.getElementById("hours");
const min = document.getElementById("minit");
const sec = document.getElementById("sec");

const ampm = document.getElementById("ampm");


setInterval(() => {
  let currenttime = new Date();

  hrs.innerText =
    currenttime.getHours() < 10 ? "0" : currenttime.getHours();

  min.innerText =
    (currenttime.getMinutes() < 10 ? "0" : "") + currenttime.getMinutes();

  sec.innerText =
    (currenttime.getSeconds() < 10 ? "0" : "") + currenttime.getSeconds();

  ampm.innerText = currenttime.getHours() > 12 ? "PM" : "AM";

}, 1000);