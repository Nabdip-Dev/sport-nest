# 🏆 SportNest

## Modern Sports Facility Booking Management Platform

<div align="center">

<img src="./public/Screenshot 2026-07-18 123200.png" alt="SportNest Banner" width="100%" />

<br/>

A full-stack sports facility booking platform that connects players with premium sports venues.
Discover facilities, reserve slots, manage bookings, and handle sports venues with a seamless experience.

<br/>

<a href="https://your-live-url.vercel.app">
  <img src="https://img.shields.io/badge/🌐%20Live%20Project-Visit%20Website-00C853?style=for-the-badge" />
</a>

<br/><br/>

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

</div>

---

# 📜 About SportNest

SportNest is a modern **full-stack sports reservation system** designed to simplify sports facility management and booking.

Users can explore available sports venues, check schedules, reserve preferred time slots, and manage their bookings.

Facility owners can create, update, and manage their own sports facilities through an efficient dashboard experience.

---

# 🎯 Project Goal

The main goal of SportNest is to build a real-world booking ecosystem where:

* ⛹️ Players can easily find sports facilities
* 👨🏻‍💼 Users can reserve available slots instantly
* 💳 Booking costs are calculated automatically
* 👥 Facility owners can manage their venues
* 🔐 User data remains secure through authentication

---

# 🚀 Core Features

## 🔐 Authentication System

* Secure authentication powered by Better Auth
* Email & password login
* Google authentication
* Protected private routes
* Session-based user management

## 🥇 Facility Management

* Browse all available sports facilities
* View detailed facility information
* Add new sports venues
* Update existing facilities
* Delete owned facilities
* Owner-based facility control

## 📅 Smart Booking System

* Select preferred date and time slots
* Real-time booking experience
* Automatic price calculation
* Booking history management
* Cancel existing bookings

## 🔎 Search & Filtering

* Search facilities by name
* Filter by sports category
* Dynamic database-powered results
* Fast and user-friendly discovery

## 🎨 Premium User Experience

* Fully responsive design
* Modern card-based interface
* Smooth Framer Motion animations
* Loading states
* Custom error pages
* Clean navigation experience

---

# 🛠️ Technology Stack

<div align="center">

## Frontend

<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind" />

<br/>

| Technology    | Usage                  |
| ------------- | ---------------------- |
| Next.js       | Modern React Framework |
| React         | Component-based UI     |
| Tailwind CSS  | Responsive Styling     |
| Framer Motion | Smooth Animations      |
| Lucide React  | Modern Icons           |
| Better Auth   | Authentication         |

<br/>

## Backend

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" />

<br/>

| Technology | Usage                     |
| ---------- | ------------------------- |
| Node.js    | Server Runtime            |
| Express.js | REST API Development      |
| MongoDB    | Database Management       |
| JOSE       | JWT Verification          |
| CORS       | API Security              |
| Dotenv     | Environment Configuration |

</div>

---

# 📦 Dependencies

## Client

```bash
next
react
react-dom
tailwindcss
framer-motion
lucide-react
axios
better-auth
```

## Server

```bash
express
mongodb
cors
dotenv
jose
```

---

# 🗄️ Database Architecture

## 🥇 Facilities Collection

Stores all sports venue information.

```javascript
{
  name,
  facility_type,
  location,
  price_per_hour,
  capacity,
  available_slots,
  description,
  owner_email
}
```

## 📅 Bookings Collection

Stores all reservation details.

```javascript
{
  facility_id,
  user_email,
  booking_date,
  time_slot,
  hours,
  total_price,
  status
}
```

---

# 🔒 Security Implementation

✅ Protected API endpoints
✅ JWT token verification
✅ Secure authentication workflow
✅ Environment variable protection
✅ Protected database credentials

---

# 📱 Responsive Compatibility

Designed and optimized for:

<div align="center">

📱 Mobile <br/>
💻 Tablet <br/>
🖥️ Desktop

</div>

---

# 🚀 Deployment

| Platform | Service       |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

# 📂 Project Structure

```bash
SportNest
│
├── Client
│   │
│   ├── Components
│   ├── Pages
│   ├── Hooks
│   └── Utilities
│
└── Server
    │
    ├── Routes
    ├── Middleware
    └── Database
```

---

# 👨‍💻 Developer

<div align="center">

## Your Name

<a href="https://github.com/Nabdip-Dev">
<img src="https://img.shields.io/badge/GitHub-Profile-black?style=for-the-badge&logo=github"/>
</a>

</div>

---

# 📬 Contact

<div align="center">

📧 [nabdipdevsharma@gmail.com](mailto:nabdipdevsharma@gmail.com)

<br/>

⭐ If you like this project, consider giving it a star!

</div>
