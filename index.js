const sendBtn = document.getElementById("btn");

const warningMessage = document.getElementById("warning-message");
const warningIcon = document.getElementById("warning-icon");

const arrowIcon = document.querySelector('.arrow-icon');

const emailInput = document.getElementById('email');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

sendBtn.addEventListener('click', function() {
  const email = emailInput.value;
  if (validateEmail(email)) {
    sendBtn.blur();

    const emailAddress = emailInput.value;
    emailInput.classList.remove("wrong-email")
    warningMessage.style.display = "none";
    warningIcon.style.display = "none";
    emailInput.style.padding = "0 5rem 0 1.5rem"

    arrowIcon.setAttribute('src', './images/material-symbols_check-small.svg');
    sendBtn.style.backgroundColor = "#82E672";

    console.log(emailAddress); // or do something else with the email address
    emailInput.value = ""; // clear out the input field
  } else {
    warningMessage.style.display = "unset";
    warningIcon.style.display = "unset";
    emailInput.style.padding = "0 7rem 0 1.5rem"
    emailInput.classList.add("wrong-email");

    console.log("error");
  }
});

// sendBtn.addEventListener("click", function() {
//   const emailInput = document.getElementById("email");
//   const emailAddress = emailInput.value;
//   console.log(emailAddress); // or do something else with the email address
//   emailInput.value = ""; // clear out the input field
// });

