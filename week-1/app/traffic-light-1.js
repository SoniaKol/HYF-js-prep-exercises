"use strict";

const button = document.querySelector(".task-1");
const cleanBtn = document.querySelector(".js-clean");
const list = document.querySelector(".traffic-list");

button.addEventListener("click", trafficLightGenerator);
cleanBtn.addEventListener("click", () => {
  list.innerHTML = "";
});

function trafficLightGenerator() {
  const trafficLight = {
    state: "green",
  };

  let rotations = 0;
  while (rotations < 2) {
    const currentState = trafficLight.state;

    createMessage(currentState);

    console.log("The traffic light is on", currentState);

    if (trafficLight.state === "green") {
      trafficLight.state = "orange";
    } else if (trafficLight.state === "orange") {
      trafficLight.state = "red";
    } else if (trafficLight.state === "red") {
      trafficLight.state = "green";
      rotations++;
    }
  }
}

function createMessage(colour) {
  let item = `<li style="color: ${colour}">The traffic light is on ${colour}</li>`;

  list.insertAdjacentHTML("beforeend", item);
}
