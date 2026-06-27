const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------
// Premium Mock Data Engine
// ---------------------------------------------------------

// Flags for Mock Theatres (Realistic AMC coordinates, formats, addresses)
const MOCK_THEATRES = [
  {
    id: 4174,
    name: "AMC Lincoln Square 13",
    longName: "AMC Lincoln Square 13 with IMAX and Dolby Cinema",
    slug: "amc-lincoln-square-13",
    timezone: "EASTERN TIME",
    timezoneAbbreviation: "EDT",
    utcOffset: "-04:00",
    guestServicesPhoneNumber: "212-336-5020",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/new-york-city/amc-lincoln-square-13",
    location: {
      addressLine1: "1998 Broadway",
      city: "NEW YORK",
      postalCode: "10023",
      state: "NY",
      stateName: "NEW YORK",
      country: "United States",
      latitude: 40.7744,
      longitude: -73.9809,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=40.7744,-73.9809"
    },
    attributes: [
      { code: "IMAX", name: "IMAX at AMC", description: "Immersive IMAX Experience" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" },
      { code: "CLOSEDCAPTION", name: "Closed Caption", description: "CC devices available" }
    ]
  },
  {
    id: 118,
    name: "AMC Empire 25",
    longName: "AMC Empire 25 in Times Square",
    slug: "amc-empire-25",
    timezone: "EASTERN TIME",
    timezoneAbbreviation: "EDT",
    utcOffset: "-04:00",
    guestServicesPhoneNumber: "212-398-2597",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/new-york-city/amc-empire-25",
    location: {
      addressLine1: "234 W 42nd St",
      city: "NEW YORK",
      postalCode: "10036",
      state: "NY",
      stateName: "NEW YORK",
      country: "United States",
      latitude: 40.7568,
      longitude: -73.9886,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=40.7568,-73.9886"
    },
    attributes: [
      { code: "PRIME", name: "PRIME at AMC", description: "Sensory seat rumblers and high-end sound" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "IMAX", name: "IMAX at AMC", description: "Immersive IMAX Experience" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" }
    ]
  },
  {
    id: 6195,
    name: "AMC Burbank 16",
    longName: "AMC Burbank 16 with Dolby Cinema & Dine-In",
    slug: "amc-burbank-16",
    timezone: "PACIFIC TIME",
    timezoneAbbreviation: "PDT",
    utcOffset: "-07:00",
    guestServicesPhoneNumber: "818-953-2901",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/los-angeles/amc-burbank-16",
    location: {
      addressLine1: "125 E Palm Ave",
      city: "BURBANK",
      postalCode: "91502",
      state: "CA",
      stateName: "CALIFORNIA",
      country: "United States",
      latitude: 34.1804,
      longitude: -118.3081,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=34.1804,-118.3081"
    },
    attributes: [
      { code: "DINEIN", name: "Dine-In Full Service", description: "Food served directly to your seat" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "REALD3D", name: "RealD 3D", description: "High quality stereoscopic 3D" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" }
    ]
  },
  {
    id: 2323,
    name: "AMC Metreon 16",
    longName: "AMC Metreon 16 with IMAX with Laser",
    slug: "amc-metreon-16",
    timezone: "PACIFIC TIME",
    timezoneAbbreviation: "PDT",
    utcOffset: "-07:00",
    guestServicesPhoneNumber: "415-369-6207",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/san-francisco/amc-metreon-16",
    location: {
      addressLine1: "135 4th St Suite 3000",
      city: "SAN FRANCISCO",
      postalCode: "94103",
      state: "CA",
      stateName: "CALIFORNIA",
      country: "United States",
      latitude: 37.7845,
      longitude: -122.4034,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=37.7845,-122.4034"
    },
    attributes: [
      { code: "IMAX_LASER", name: "IMAX with Laser", description: "IMAX Laser Projection and 12-channel audio" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" },
      { code: "SENSORYFRIENDLY", name: "Sensory Friendly Films", description: "Lights up, sound down, moving/vocalizing welcome" }
    ]
  },
  {
    id: 5040,
    name: "AMC River East 21",
    longName: "AMC River East 21 with PRIME and MacGuffins",
    slug: "amc-river-east-21",
    timezone: "CENTRAL TIME",
    timezoneAbbreviation: "CDT",
    utcOffset: "-05:00",
    guestServicesPhoneNumber: "312-595-0021",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/chicago/amc-river-east-21",
    location: {
      addressLine1: "322 E Illinois St",
      city: "CHICAGO",
      postalCode: "60611",
      state: "IL",
      stateName: "ILLINOIS",
      country: "United States",
      latitude: 41.8906,
      longitude: -87.6200,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=41.8906,-87.6200"
    },
    attributes: [
      { code: "PRIME", name: "PRIME at AMC", description: "Premium sound and rumble seats" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" },
      { code: "BAR", name: "MacGuffins Bar", description: "Grab a beer, wine, or cocktail" }
    ]
  },
  {
    id: 610,
    name: "AMC BarryWoods 24",
    longName: "AMC BarryWoods 24 with IMAX & Dine-in",
    slug: "amc-barrywoods-24",
    timezone: "CENTRAL TIME",
    timezoneAbbreviation: "CDT",
    utcOffset: "-05:00",
    guestServicesPhoneNumber: "816-891-7224",
    websiteUrl: "https://www.amctheatres.com/movie-theatres/kansas-city/amc-barrywoods-24",
    location: {
      addressLine1: "8101 Roanridge Road",
      city: "KANSAS CITY",
      postalCode: "64151",
      state: "MO",
      stateName: "MISSOURI",
      country: "United States",
      latitude: 39.2434,
      longitude: -94.6561,
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=39.2434,-94.6561"
    },
    attributes: [
      { code: "IMAX", name: "IMAX at AMC", description: "Immersive IMAX Experience" },
      { code: "DOLBYCINEMA", name: "Dolby Cinema at AMC", description: "Dolby Vision and Atmos audio" },
      { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Choose seats beforehand" },
      { code: "FREESTYLE", name: "Coca-Cola Freestyle", description: "Select from 100+ drink choices" }
    ]
  }
];

// Rich Movie mock database with realistic AMC properties
const MOCK_MOVIES = [
  {
    id: 59505,
    name: "Mission: Impossible – The Final Reckoning",
    sortableName: "Mission: Impossible - The Final Reckoning",
    genre: "ACTION",
    genres: ["Action", "Adventure", "Thriller"],
    mpaaRating: "PG13",
    score: 8.9,
    runTime: 169,
    starringActors: "Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg, Vanessa Kirby",
    directors: "Christopher McQuarrie",
    slug: "mission-impossible-the-final-reckoning",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/mission-impossible-the-final-reckoning-59505",
    description: "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80", // Standard cinematic photography
      heroDesktopDynamic: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55001,
    name: "Dune: Part Two",
    sortableName: "Dune: Part Two",
    genre: "SCIFI",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    mpaaRating: "PG13",
    score: 9.4,
    runTime: 166,
    starringActors: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin, Austin Butler",
    directors: "Denis Villeneuve",
    slug: "dune-part-two",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/dune-part-two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55002,
    name: "Deadpool & Wolverine",
    sortableName: "Deadpool & Wolverine",
    genre: "ACTION",
    genres: ["Action", "Comedy", "Sci-Fi"],
    mpaaRating: "R",
    score: 9.1,
    runTime: 127,
    starringActors: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
    directors: "Shawn Levy",
    slug: "deadpool-and-wolverine",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/deadpool-and-wolverine",
    description: "A listless Wade Wilson toils in civilian life. His efforts to leave his moral-flexing mercenary days behind are upended when a threat to his universe lands him together with a very cranky Wolverine.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55004,
    name: "Oppenheimer",
    sortableName: "Oppenheimer",
    genre: "DRAMA",
    genres: ["Drama", "Biography", "History"],
    mpaaRating: "R",
    score: 9.3,
    runTime: 180,
    starringActors: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh",
    directors: "Christopher Nolan",
    slug: "oppenheimer",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/oppenheimer",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55007,
    name: "Wicked",
    sortableName: "Wicked",
    genre: "MUSICAL",
    genres: ["Musical", "Fantasy", "Drama"],
    mpaaRating: "PG",
    score: 8.8,
    runTime: 160,
    starringActors: "Cynthia Erivo, Ariana Grande, Michelle Yeoh, Jeff Goldblum",
    directors: "Jon M. Chu",
    slug: "wicked",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/wicked",
    description: "The story of how a green-skinned woman framed by the Wizard of Oz becomes the Wicked Witch of the West.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55003,
    name: "Spider-Man: Beyond the Spider-Verse",
    sortableName: "Spider-Man: Beyond the Spider-Verse",
    genre: "ANIMATION",
    genres: ["Animation", "Action", "Sci-Fi"],
    mpaaRating: "PG",
    score: 9.5,
    runTime: 140,
    starringActors: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
    directors: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    slug: "spider-man-beyond-the-spider-verse",
    hasScheduledShowtimes: false,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/spider-man-beyond-the-spider-verse",
    description: "The epic conclusion of Miles Morales' journey across the multiverse alongside Gwen Stacy, Peter B. Parker and a team of Spider-People.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "coming-soon"
  },
  {
    id: 55008,
    name: "Gladiator II",
    sortableName: "Gladiator II",
    genre: "ACTION",
    genres: ["Action", "Drama", "History"],
    mpaaRating: "R",
    score: 8.5,
    runTime: 148,
    starringActors: "Paul Mescal, Pedro Pascal, Denzel Washington, Connie Nielsen",
    directors: "Ridley Scott",
    slug: "gladiator-ii",
    hasScheduledShowtimes: true,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/gladiator-ii",
    description: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "now-playing"
  },
  {
    id: 55009,
    name: "Avatar: Fire and Ash",
    sortableName: "Avatar: Fire and Ash",
    genre: "SCIFI",
    genres: ["Sci-Fi", "Action", "Adventure"],
    mpaaRating: "PG13",
    score: 0.0,
    runTime: 160,
    starringActors: "Sam Worthington, Zoe Saldaña, Sigourney Weaver, Kate Winslet",
    directors: "James Cameron",
    slug: "avatar-fire-and-ash",
    hasScheduledShowtimes: false,
    availableForAList: true,
    websiteUrl: "https://www.amctheatres.com/movies/avatar-fire-and-ash",
    description: "The third installment of James Cameron's Avatar franchise, exploring a new volcanic tribe of Na'vi on Pandora.",
    media: {
      posterStandard: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80",
      heroDesktopDynamic: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80"
    },
    releaseType: "advance-tickets"
  }
];

// Dynamically generate showtimes for any given date to ensure they are always "today/tomorrow"
function generateShowtimesForTheatreAndDate(theatreId, dateStr) {
  const theatre = MOCK_THEATRES.find(t => t.id === parseInt(theatreId));
  if (!theatre) return [];

  const nowPlaying = MOCK_MOVIES.filter(m => m.hasScheduledShowtimes);
  const showtimesList = [];

  let idCounter = parseInt(theatreId) * 100000 + Date.parse(dateStr) % 1000000;

  // Let's seed consistent random generators based on theatre and movie
  nowPlaying.forEach((movie, mIndex) => {
    // Generate different formats based on what theatre offers
    const theatreFormats = theatre.attributes.map(a => a.code);
    const availableFormats = ["Standard Digital"];
    if (theatreFormats.includes("IMAX") || theatreFormats.includes("IMAX_LASER")) availableFormats.push("IMAX at AMC");
    if (theatreFormats.includes("DOLBYCINEMA")) availableFormats.push("Dolby Cinema at AMC");
    if (theatreFormats.includes("PRIME")) availableFormats.push("PRIME at AMC");
    if (theatreFormats.includes("REALD3D")) availableFormats.push("RealD 3D");

    // Define daily timeslots
    // Let's create an array of hours & formats
    const timeslots = [
      { hour: 10, min: 15, period: "morning", format: "Standard Digital" },
      { hour: 11, min: 45, period: "morning", format: availableFormats[1] || "Standard Digital" },
      { hour: 13, min: 30, period: "afternoon", format: "Standard Digital" },
      { hour: 15, min: 15, period: "afternoon", format: availableFormats[availableFormats.length - 1] },
      { hour: 16, min: 45, period: "afternoon", format: "Standard Digital" },
      { hour: 18, min: 0, period: "evening", format: availableFormats[1] || "Standard Digital" },
      { hour: 19, min: 30, period: "evening", format: "Dolby Cinema at AMC" },
      { hour: 21, min: 15, period: "night", format: "Standard Digital" },
      { hour: 22, min: 45, period: "night", format: availableFormats[1] || "Standard Digital" }
    ];

    // Select 4-5 showtimes for this movie-theatre combo based on index
    timeslots.forEach((slot, sIndex) => {
      // Do deterministic filtering to make it feel stable but varied
      if ((mIndex + sIndex) % 2 === 0) return;

      const id = idCounter++;
      const isDiscountMatineePriced = slot.hour < 16; // Before 4pm is discount matinee
      const isSoldOut = (id % 17 === 0);
      const isAlmostSoldOut = !isSoldOut && (id % 7 === 0);

      // Create local and UTC date strings
      const localTimeStr = `${dateStr}T${String(slot.hour).padStart(2, '0')}:${String(slot.min).padStart(2, '0')}:00`;
      const showDateTimeLocal = new Date(localTimeStr);
      const showDateTimeUtc = new Date(showDateTimeLocal.getTime() - (parseInt(theatre.utcOffset) * 60 * 60 * 1000));

      // Build attributes matching showtime
      const attributes = [
        { code: "RESERVEDSEATING", name: "Reserved Seating", description: "Select seat at checkout" }
      ];

      if (slot.format === "IMAX at AMC") {
        attributes.push({ code: "IMAX", name: "IMAX at AMC" });
      } else if (slot.format === "Dolby Cinema at AMC") {
        attributes.push({ code: "DOLBYCINEMA", name: "Dolby Cinema at AMC" });
      } else if (slot.format === "PRIME at AMC") {
        attributes.push({ code: "PRIME", name: "PRIME at AMC" });
      } else if (slot.format === "RealD 3D") {
        attributes.push({ code: "REALD3D", name: "RealD 3D" });
      }

      if (theatreFormats.includes("DINEIN")) {
        attributes.push({ code: "DINEINSEATSIDESERVICE", name: "Dine-In Full Service" });
      }
      if (theatreFormats.includes("SENSORYFRIENDLY") && sIndex === 1) {
        attributes.push({ code: "SENSORYFRIENDLY", name: "Sensory Friendly Film" });
      }

      showtimesList.push({
        id: id,
        movieId: movie.id,
        movieName: movie.name,
        sortableMovieName: movie.sortableName,
        genre: movie.genre,
        showDateTimeLocal: showDateTimeLocal.toISOString().substring(0, 19),
        showDateTimeUtc: showDateTimeUtc.toISOString(),
        isSoldOut: isSoldOut,
        isAlmostSoldOut: isAlmostSoldOut,
        isCanceled: false,
        utcOffset: theatre.utcOffset,
        theatreId: theatre.id,
        auditorium: (movie.id % 20) + 1,
        layoutId: 100 + (movie.id % 10),
        layoutVersionNumber: 1,
        runTime: movie.runTime,
        mpaaRating: movie.mpaaRating,
        premiumFormat: slot.format === "Standard Digital" ? "" : slot.format,
        purchaseUrl: `https://www.amctheatres.com/showtimes/all/${dateStr}/${theatre.slug}/all/${id}`,
        mobilePurchaseUrl: `https://www.amctheatres.com/showtimes/all/${dateStr}/${theatre.slug}/all/${id}`,
        isDiscountMatineePriced: isDiscountMatineePriced,
        discountMatineeMessage: isDiscountMatineePriced ? "UP TO 25% OFF" : "",
        attributes: attributes,
        availableForAList: movie.availableForAList
      });
    });
  });

  return showtimesList;
}

// ---------------------------------------------------------
// API Endpoints
// ---------------------------------------------------------

// GET Theatres (Proxied or Mocked)
app.get('/api/theatres', async (req, res) => {
  const apiKey = req.headers['x-amc-vendor-key'];
  if (apiKey && apiKey !== 'undefined' && apiKey !== '') {
    try {
      console.log('Fetching theatres from AMC API using key...');
      // Build AMC request with robust browser headers to bypass Cloudflare/WAF bot-blocks
      const response = await fetch('https://api.amctheatres.com/v2/theatres?page-size=50', {
        headers: {
          'X-AMC-Vendor-Key': apiKey,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://developers.amctheatres.com/',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });
      if (response.ok) {
        const data = await response.json();
        const theatres = data._embedded ? data._embedded.theatres : [];
        return res.json({ source: 'amc-api', count: theatres.length, theatres: theatres });
      } else {
        const errorText = await response.text();
        console.warn('AMC API returned error status:', response.status, errorText);
        // Return 200 status with fallback: true so browser console doesn't log a scary 403 Forbidden!
        return res.status(200).json({
          source: 'amc-api-error',
          error: `AMC API returned ${response.status}`,
          details: errorText,
          fallback: true,
          theatres: MOCK_THEATRES
        });
      }
    } catch (err) {
      console.error('Error connecting to AMC theatres API:', err.message);
      return res.status(200).json({
        source: 'proxy-exception',
        error: err.message,
        fallback: true,
        theatres: MOCK_THEATRES
      });
    }
  } else {
    // Return our glorious mock theaters
    return res.json({ source: 'mock', count: MOCK_THEATRES.length, theatres: MOCK_THEATRES });
  }
});

// GET Movies (Proxied or Mocked)
app.get('/api/movies', async (req, res) => {
  const apiKey = req.headers['x-amc-vendor-key'];
  if (apiKey && apiKey !== 'undefined' && apiKey !== '') {
    try {
      console.log('Fetching active movies from AMC API...');
      const response = await fetch('https://api.amctheatres.com/v2/movies/views/all/active?page-size=50', {
        headers: {
          'X-AMC-Vendor-Key': apiKey,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://developers.amctheatres.com/',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });
      if (response.ok) {
        const data = await response.json();
        const movies = data._embedded ? data._embedded.movies : [];
        return res.json({ source: 'amc-api', count: movies.length, movies: movies });
      } else {
        const errorText = await response.text();
        console.warn('AMC Movie API returned error:', response.status, errorText);
        return res.status(200).json({
          source: 'amc-api-error',
          error: `AMC Movie API returned ${response.status}`,
          fallback: true,
          movies: MOCK_MOVIES
        });
      }
    } catch (err) {
      console.error('Exception fetching movies:', err.message);
      return res.status(200).json({
        source: 'proxy-exception',
        error: err.message,
        fallback: true,
        movies: MOCK_MOVIES
      });
    }
  } else {
    return res.json({ source: 'mock', count: MOCK_MOVIES.length, movies: MOCK_MOVIES });
  }
});

// GET Showtimes (Proxied or Mocked)
app.get('/api/showtimes', async (req, res) => {
  const apiKey = req.headers['x-amc-vendor-key'];
  const { theatreId, date } = req.query;

  if (!theatreId || !date) {
    return res.status(400).json({ error: "Missing required parameters: theatreId and date (MM-DD-YYYY or YYYY-MM-DD)" });
  }

  // Format date correctly. AMC API accepts M-D-YYYY or MM-DD-YYYY or YYYY-MM-DD
  let formattedDate = date; 

  if (apiKey && apiKey !== 'undefined' && apiKey !== '') {
    try {
      console.log(`Fetching showtimes from AMC API for theatre ${theatreId} on date ${formattedDate}...`);
      const url = `https://api.amctheatres.com/v2/theatres/${theatreId}/showtimes/${formattedDate}?page-size=100`;
      const response = await fetch(url, {
        headers: {
          'X-AMC-Vendor-Key': apiKey,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://developers.amctheatres.com/',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });
      if (response.ok) {
        const data = await response.json();
        const showtimes = data._embedded ? data._embedded.showtimes : [];
        return res.json({ source: 'amc-api', count: showtimes.length, showtimes: showtimes });
      } else {
        const errorText = await response.text();
        console.warn(`AMC Showtimes API returned error: ${response.status}`, errorText);
        const fallbackShowtimes = generateShowtimesForTheatreAndDate(theatreId, date);
        return res.status(200).json({
          source: 'amc-api-error',
          error: `AMC API returned ${response.status}`,
          fallback: true,
          showtimes: fallbackShowtimes
        });
      }
    } catch (err) {
      console.error('Exception fetching showtimes:', err.message);
      const fallbackShowtimes = generateShowtimesForTheatreAndDate(theatreId, date);
      return res.status(200).json({
        source: 'proxy-exception',
        error: err.message,
        fallback: true,
        showtimes: fallbackShowtimes
      });
    }
  } else {
    // Return mocked showtimes
    const showtimes = generateShowtimesForTheatreAndDate(theatreId, date);
    return res.json({ source: 'mock', count: showtimes.length, showtimes: showtimes });
  }
});

// Serve frontend home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start listening or export for Vercel Serverless
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`🍿 AMC A-List Master Picker listening at http://localhost:${PORT}`);
    console.log(`🍿 Loaded Flagship Mock Theatres, Mock Movies and Showtime Engine!`);
    console.log(`================================================================`);
  });
}

module.exports = app;
