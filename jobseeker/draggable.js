let press = false;
const car = document.querySelector('.draggable');
const innerCar = document.querySelector('.draggable-inner');
let prevMouse; // where it is in pixels on the document
let prevScroll = 0; // number of pixels going to the left
let i = 10;

// automatic scrolling but why is it so rough :(
var id = setInterval(autoScroll, 3000);

function autoScroll() {
 car.style.scrollBehavior = "smooth";

 prevScroll = car.scrollLeft + 200;

 car.scrollTo({
  left: prevScroll,
  behavior: "smooth"
 });

 const max = car.scrollWidth - car.clientWidth;

 if (car.scrollLeft >= max - 5) {
  car.style.scrollBehavior = "auto";
  car.scrollLeft = 0;
  prevScroll = 0;
 }
}

