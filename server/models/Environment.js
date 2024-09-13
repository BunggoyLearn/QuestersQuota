const { Schema, model } = require('mongoose');

const environmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    terrain: {
      type: String,
      required: true,
    },
    weather: {
      type: String,
      required: true,
    },
    environmentFactor: {
      type: String,
      required: true,
    },
    town: [{
        townID: Number,
        id: false,
        Name: String,
    }],
    quest: [String],
    npcs: [{
        name: String,
        occupation: String,
    }],
  }
);

const Environment = model('Environment', environmentSchema);

module.exports = Environment;