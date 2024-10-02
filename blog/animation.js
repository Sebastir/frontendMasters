import { animate } from "popmotion";

const ball = document.querySelector(".ball");
animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});

function isValidName(name) {
  if (
    typeof name == 'string' &&
    name.trim().length >= 3
  ) {
    return true
  }
  return false
}

function hoursAttend(attended, length) {
  if (
    typeof attended == "string" &&
    attended.trim() != ""
  ) {
    attended = Number(attended)
  }
  if (
    typeof length == "string" &&
    length.trim() != ""
  ) {
    length = Number(length)
  }
  if (
    typeof attended == 'number' &&
    typeof length == 'number' &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true
  }
  return false
}
