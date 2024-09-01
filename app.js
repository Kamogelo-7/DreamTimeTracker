

let nameDataId = prompt("Enter your name");
let ageInput = parseInt(prompt("Enter your age"));
let usersAgePrompt = Math.floor((ageInput * 8) / 24);

if (isNaN(ageInput) || ageInput < 0) {
  alert("incorrect input " + undefined);
} else if (usersAgePrompt === 1) {
  document.querySelector("h2").innerHTML =
    "Hey " + nameDataId + " You have slept for " + usersAgePrompt + " Year";
} else if (usersAgePrompt === 0) {
  document.querySelector("h2").innerHTML =
    "Hey " +
    nameDataId +
    " You have just started your dreaming journey come back in a year :)";
  document.querySelector("h4").innerHTML =
    "seems like you need to start sleeping";
} else {
  document.querySelector("h2").innerHTML =
    "Hey " + nameDataId + " You have slept for " + usersAgePrompt + " Years";
}
