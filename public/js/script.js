// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = (drum, index) => {
  if (index > 15 || index < 0) {
    return;
  }

  if (drum === "kicks") {
    kicks[index] = !kicks[index];
  } else if (drum === "snares") {
    snares[index] = !snares[index];
  } else if (drum === "hiHats") {
    hiHats[index] = !hiHats[index];
  } else if (drum === "rideCymbals") {
    rideCymbals[index] = !rideCymbals[index];
  }
}

const clear = (drum) => {
  if (drum === "kicks") {
    kicks.forEach(function(drum, index) {
      kicks[index] = false;
    });
  } else if (drum === "snares") {
    snares.forEach(function(drum, index) {
      snares[index] = false;
    });
  } else if (drum === "hiHats") {
    hiHats.forEach(function(drum, index) {
      hiHats[index] = false;
    });
  } else if (drum === "rideCymbals") {
    rideCymbals.forEach(function(drum, index) {
      rideCymbals[index] = false;
    });
  }
}

const invert = (drum) => {
  if (drum === "kicks") {
    kicks.forEach(function(drum, index) {
      kicks[index] = !kicks[index];
    });
  } else if (drum === "snares") {
    snares.forEach(function(drum, index) {
      snares[index] = !snares[index];
    });
  } else if (drum === "hiHats") {
    hiHats.forEach(function(drum, index) {
      hiHats[index] = !hiHats[index];
    });
  } else if (drum === "rideCymbals") {
    rideCymbals.forEach(function(drum, index) {
      rideCymbals[index] = !rideCymbals[index];
    });
  }
}
