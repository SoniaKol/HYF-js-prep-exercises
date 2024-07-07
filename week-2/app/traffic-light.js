"use strict";

function getCurrentState(trafficLight) {
  const { possibleStates: state, stateIndex } = trafficLight;
  return state[stateIndex];
}

function getNextStateIndex(trafficLight) {
  let { possibleStates: state, stateIndex } = trafficLight;

  switch (state[stateIndex]) {
    case "green":
      stateIndex = 1;
      break;
    case "orange":
      stateIndex = 2;
      break;
    case "red":
      stateIndex = 0;
      break;
  }

  return stateIndex;
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {}
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
