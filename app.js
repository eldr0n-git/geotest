"use strict";

let mylat, mylong;

const myPosition = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    let mylat = position.coords.latitude;
    let mylong = position.coords.longitude;
    console.log(`${mylat}, ${mylong}`);
    fetch(`http://geocode.xyz/${mylat},${mylong}?geoit=json&auth=218699383617088100122x124626`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
};
const getDataPosition = (mylat, mylong) => {};
const btnHandler = document.getElementById("getDataRun");
btnHandler ? btnHandler.addEventListener("click", myPosition()) : console.log("err");
