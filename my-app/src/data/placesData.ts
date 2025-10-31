export interface TimeSlot {
  time: string;
  bookingsLeft: number;
}

export interface DateSchedule {
  date: string;
  times: TimeSlot[];
}

export interface Place {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  price: number;
  dates: DateSchedule[];
}

export const placesData: Place[] = [
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
    name:" mountain retreat",
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
  {
    id: 3,
    name:" mountain retreat",
    image:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
    location: "Jaipur, India",
    description:
      "Traditional haveli with royal architecture and modern comfort.",
    price: 6500,
    dates: [
      {
        date: "2025-11-04",
        times: [
          { time: "08:00 AM", bookingsLeft: 7 },
          { time: "12:00 PM", bookingsLeft: 3 },
          { time: "06:00 PM", bookingsLeft: 6 },
        ],
      },
      {
        date: "2025-11-05",
        times: [
          { time: "09:30 AM", bookingsLeft: 5 },
          { time: "01:30 PM", bookingsLeft: 4 },
          { time: "05:30 PM", bookingsLeft: 3 },
        ],
      },
    ],
  },
  {
    id: 4,
    name:" mountain retreat",
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=800&q=80",
    location: "Kerala, India",
    description: "Houseboat experience through the backwaters of Alleppey.",
    price: 9500,
    dates: [
      {
        date: "2025-11-02",
        times: [
          { time: "07:00 AM", bookingsLeft: 2 },
          { time: "10:00 AM", bookingsLeft: 4 },
          { time: "02:00 PM", bookingsLeft: 6 },
        ],
      },
      {
        date: "2025-11-03",
        times: [
          { time: "09:00 AM", bookingsLeft: 5 },
          { time: "01:00 PM", bookingsLeft: 7 },
          { time: "05:00 PM", bookingsLeft: 4 },
        ],
      },
    ],
  },
  {
    id: 5,
    name:" mountain retreat",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    location: "Andaman Islands, India",
    description: "Overwater cottages surrounded by turquoise ocean views.Overwater cottages surrounded by turquoise ocean views.",
    price: 15500,
    dates: [
      {
        date: "2025-11-05",
        times: [
          { time: "08:30 AM", bookingsLeft: 3 },
          { time: "12:00 PM", bookingsLeft: 5 },
          { time: "03:30 PM", bookingsLeft: 1 },
        ],
      },
      {
        date: "2025-11-06",
        times: [
          { time: "09:00 AM", bookingsLeft: 2 },
          { time: "01:00 PM", bookingsLeft: 3 },
          { time: "05:00 PM", bookingsLeft: 5 },
        ],
      },
    ],
  },
];
