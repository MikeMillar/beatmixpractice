// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetIndex, newPresetArray) => {
  let response = [];

  if (request === 'GET') {
    response.push(200);
    response.push(presets[presetIndex]);
  } else if (request === 'PUT') {
    response.push(200);
    response.push(presets[presetIndex]);
  } else if (request !== 'GET' || request !== 'PUT'){
    response.push(400);
  } else if (presetIndex < 0 || presetIndex > 3) {
    response.push(404);
  } else {
    response.push(404);
  }

  return response;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
