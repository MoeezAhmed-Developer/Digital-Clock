function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Formatting time to always show two digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerText = time;

  // Greeting message based on time of day
  const greetingElement = document.getElementById("greeting");
  if (hours < 12) {
    greetingElement.innerText = "Good Morning!";
    document.body.style.backgroundColor = "#ffcc99"; // Morning color
  } else if (hours < 18) {
    greetingElement.innerText = "Good Afternoon!";
    document.body.style.backgroundColor = "#ffcc00"; // Afternoon color
  } else {
    greetingElement.innerText = "Good Evening!";
    document.body.style.backgroundColor = "#333333"; // Evening color
  }
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
