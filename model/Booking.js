const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  busId: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  randomNumber: {
    type: String,
    required: true,
  },
  seats: [Number],
  isChecked: {
    type: Boolean,
    default: false,
  },
  mappedDate: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
