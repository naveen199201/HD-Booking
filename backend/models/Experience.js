import mongoose from "mongoose";

const timeSlotSchema = new mongoose.Schema({
  time: String,
  bookingsLeft: Number,
});

const dateScheduleSchema = new mongoose.Schema({
  date: String,
  times: [timeSlotSchema],
});

const experienceSchema = new mongoose.Schema({
  name: String,
  image: String,
  location: String,
  description: String,
  price: Number,
  dates: [dateScheduleSchema],
});

const Experience = mongoose.model("Experience", experienceSchema);
export default Experience;
