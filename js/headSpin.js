const imgEl = document.querySelector("#ali-img");

function rotateImg(e) {
  const imgElBox = imgEl.getBoundingClientRect();
  const centerX = imgElBox.left + imgElBox.width / 2 - window.pageXOffset;
  const centerY = imgElBox.top + imgElBox.height / 2 - window.pageYOffset;

  const radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
  const degrees = radians * (180 / Math.PI) * -1 + -90;

  imgEl.style.transform = "rotate(" + degrees + "deg)";
}

window.addEventListener("mousemove", rotateImg);
window.addEventListener("touchmove", rotateImg);
window.addEventListener("touchstart", rotateImg);
