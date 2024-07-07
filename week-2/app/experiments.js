"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  const experimentSize = sampleSize;
  let randomDie;

  for (sampleSize; sampleSize > 0; sampleSize--) {
    randomDie = Math.ceil(Math.random() * 6);
    valueCounts[randomDie - 1] += 1;
  }

  const results = [];
  let percentage = 0;

  for (const count of valueCounts) {
    percentage = (count / experimentSize) * 100;
    results.push(percentage.toFixed(2));
  }

  return results;
}

runExperiment(10);

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    console.log(runExperiment(size), size);
  }
}

main();
