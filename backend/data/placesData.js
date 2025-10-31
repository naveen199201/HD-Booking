export const placesData = [
  {
    id: 1,
    name: "Beachside Villa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Goa, India",
    description: "A cozy beachfront villa with a relaxing sea view.",
    price: 12000,
    dates: [
      {
        date: "2025-11-01",
        times: [
          { time: "09:00 AM", bookingsLeft: 4 },
          { time: "12:00 PM", bookingsLeft: 2 },
          { time: "04:00 PM", bookingsLeft: 6 },
        ],
      },
      {
        date: "2025-11-02",
        times: [
          { time: "09:00 AM", bookingsLeft: 5 },
          { time: "01:00 PM", bookingsLeft: 3 },
          { time: "06:00 PM", bookingsLeft: 7 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Mountain Retreat",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    location: "Manali, India",
    description: "Luxury mountain stay surrounded by snow peaks.",
    price: 8500,
    dates: [
      {
        date: "2025-11-01",
        times: [
          { time: "10:00 AM", bookingsLeft: 3 },
          { time: "01:00 PM", bookingsLeft: 5 },
          { time: "05:00 PM", bookingsLeft: 2 },
        ],
      },
      {
        date: "2025-11-03",
        times: [
          { time: "09:30 AM", bookingsLeft: 4 },
          { time: "12:30 PM", bookingsLeft: 1 },
          { time: "03:30 PM", bookingsLeft: 5 },
        ],
      },
    ],
  },
  // ... add the rest of your JSON data here
];
