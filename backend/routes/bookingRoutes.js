import express from "express";
import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { experienceId, date, time, userName, email, totalPrice } = req.body;

    // Prevent double booking
    const existingBooking = await Booking.findOne({ experienceId, date, time, email });
    if (existingBooking)
      return res.status(400).json({ message: "Slot already booked by this user" });

    const booking = await Booking.create({
      experienceId,
      date,
      time,
      userName,
      email,
      totalPrice,
    });

    // Decrease available slots
    const experience = await Experience.findById(experienceId);
    const dateObj = experience.dates.find((d) => d.date === date);
    const timeObj = dateObj.times.find((t) => t.time === time);
    if (timeObj && timeObj.bookingsLeft > 0) {
      timeObj.bookingsLeft -= 1;
      await experience.save();
    }

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Validate promo code
router.post("/promo/validate", (req, res) => {
  const { code } = req.body;
  const promos = { SAVE10: 10, FLAT100: 100 };
  if (promos[code]) {
    res.json({ valid: true, discount: promos[code] });
  } else {
    res.json({ valid: false });
  }
});

export default router;
