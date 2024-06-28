"use strict";

const btn = document.querySelector(".task-2");

btn.addEventListener("click", trafficLightGeneratorNo2);

function trafficLightGeneratorNo2() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);
    createMessage(currentState);

    if (currentState === "green" || currentState === "orange") {
      trafficLight.stateIndex++;
    } else if (currentState === "red") {
      trafficLight.stateIndex = 0;
      cycle++;
    }
  }
}
