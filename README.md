# 🍿 AMC A-List Master Picker & Filtering Engine

Welcome to the **AMC A-List Master Picker**, the most selectional and filter-specific tool designed specifically for movie-goers and AMC A-List subscribers!

This repository contains a full-stack application with a beautiful **Tailwind CSS front-end** and a robust **Node.js/Express backend proxy** that integrates with the official AMC Theatres API while providing an ultra-rich, dynamic mock fallback system.

---

## 🌟 Key Features

### 1. 🔍 The Right Way to Filter Movies
Unlike standard ticketing websites where you must select a movie first and then look for a time that fits your schedule, the **A-List Master Picker** flips the paradigm:
* **Showtime Windows**: Instantly filter by general slots:
  * 🌅 **Morning** (Before 12:00 PM)
  * ☀️ **Afternoon** (12:00 PM - 5:00 PM)
  * 🌆 **Evening** (5:00 PM - 9:00 PM)
  * 🌙 **Night** (After 9:00 PM)
* **Precise Time Range Slider**: Fine-tune your availability with dual range handles (e.g., exactly between 11:30 AM and 8:30 PM).
* **AMC Premium Formats**: Toggle specific premium presentation formats:
  * **IMAX** at AMC
  * **Dolby Cinema** at AMC
  * **PRIME** at AMC
  * **RealD 3D**
  * **Sensory Friendly** Showings
  * **Standard Digital**
* **Dynamic Grouping**: Movies are filtered dynamically. If a movie has *no* showtimes matching your filters, it is automatically hidden. If it has matching times, they are grouped and sorted right under the movie poster.

### 2. 🗺️ Interactive Locations Map
* Uses **Leaflet.js** to render a high-performance interactive map featuring flagship AMC locations.
* Customized glowing red and black markers match AMC's aesthetic.
* Click any pin to view theater details, address, specific premium theater capabilities, and click **Select Theatre** to load its exact showtimes immediately.

### 3. 🎟️ Interactive Luxury Seat Chooser
* An immersive virtual seat grid resembling AMC's signature **Luxury Red Recliners**.
* Includes dedicated rows, center/side aisles, wheelchair-accessible seats, and realistic deterministic "Reserved" seats.
* Interactive real-time calculations showing ticket price vs. **A-List Member Savings** ($0.00 reservations with complete premium upcharge waivers, matching real AMC A-List rules!).

### 4. 🔑 Official AMC API Integration & Proxy Backend
Direct browser requests to the AMC Theatre API are blocked due to CORS limitations. This project implements a lightweight **Node/Express secure proxy** that:
* Accepts your `X-AMC-Vendor-Key` from the front-end securely.
* Forwards queries to the AMC Developer API endpoints.
* Provides a **dynamic fallback generator** which creates rich, realistic showtimes for **today's current date** so the app remains fully interactive and testable immediately out-of-the-box, even if you do not have an active AMC API Key.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```
The server will boot up at `http://localhost:3000`. Open this in your web browser!

---

## 🛠️ Importing Your AMC API Key

1. Apply for a developer key on the [AMC Theatres Developer Portal](https://developers.amctheatres.com/).
2. Once your key is issued (note: AMC developer keys may take a few days to become active), open the web application.
3. Click on the **Configure Key** button in the header.
4. Input your `X-AMC-Vendor-Key` and click **Save and Refresh**.
5. The application will store your key securely in your browser's `localStorage` and pass it to the Node proxy.
6. The status indicator in the header will glow green and update to **🟢 Live AMC API Active** once verified!

---

## 📂 Project Structure

```
├── package.json         # Node.js dependencies & scripts
├── server.js            # Express backend proxy & mock-data generator engine
├── README.md            # Documentation
└── public/              # Front-end Assets
    ├── index.html       # Single-page front-end (Tailwind, Leaflet, FontAwesome)
    └── app.js           # Client-side map, filters, state, & seat modal logic
```
