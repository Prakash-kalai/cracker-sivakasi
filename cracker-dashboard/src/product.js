// src/data/products.js
// Full product catalog (IDs 1..124) extracted from your price list images.
// Fields: id, name, category, mrp, price (60% discount), per, img (placeholder)

const products = [
  // SPARKLERS (1-19)
  { id: 1,  name: "7 Cm Electric Sparklers (10 Pcs)", 
    mrp: 24,
     price: 10, 
      per: "1 Box",
       category: "Sparklers",
        img: "https://via.placeholder.com/120?text=sparkler" },
        
  { id: 2,  name: "7 Cm Crackling Sparklers (10 Pcs)", mrp: 28, price: 11,  per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 3,  name: "7 Cm Green Sparklers (10 Pcs)", mrp: 30, price: 12,  per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 4,  name: "7 Cm Red Sparklers (10 Pcs)", mrp: 34, price: 13,  per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 5,  name: "10 Cm Electric Sparklers (10 Pcs)", mrp: 44, price: 17, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 6,  name: "10 Cm Crackling Sparklers (10 Pcs)", mrp: 50, price: 20, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 7,  name: "10 Cm Green Sparklers (10 Pcs)", mrp: 52, price: 20, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 8,  name: "10 Cm Red Sparklers (10 Pcs)", mrp: 56, price: 22, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 9,  name: "15 Cm Electric Sparklers (10 Pcs)", mrp: 100, price: 40, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 10, name: "15 Cm Crackling Sparklers (10 Pcs)", mrp: 110, price: 44, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 11, name: "15 Cm Green Sparklers (10 Pcs)", mrp: 115, price: 46, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 12, name: "15 Cm Red Sparklers (10 Pcs)", mrp: 120, price: 48, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 13, name: "30 Cm Electric Sparklers (10 Pcs)", mrp: 100, price: 40, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 14, name: "30 Cm Crackling Sparklers (10 Pcs)", mrp: 110, price: 44, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 15, name: "30 Cm Green Sparklers (10 Pcs)", mrp: 115, price: 46, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 16, name: "30 Cm Red Sparklers (10 Pcs)", mrp: 120, price: 48, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 17, name: "50 Cm Electric Sparklers (10 Pcs)", mrp: 420, price: 168, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 18, name: "50 Cm Crackling Sparklers (10 Pcs)", mrp: 480, price: 192, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },
  { id: 19, name: "Rotating Sparklers", mrp: 480, price: 192, per: "1 Box", category: "Sparklers", img: "https://via.placeholder.com/120?text=sparkler" },

  // GROUND CHAKKAR (20-26)
  { id: 20, name: "Disco Wheel (5 Pcs)", mrp: 100, price: 40, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 21, name: "4x4 Wheel (5 Pcs)", mrp: 360, price: 144, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 22, name: "Lotus Wheel (5 Pcs)", mrp: 440, price: 176, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 23, name: "Ground Chakkar Big (10 Pcs)", mrp: 100, price: 40, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 24, name: "Ground Chakkar Special (10 Pcs)", mrp: 180, price: 72, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 25, name: "Ground Chakkar Deluxe (10 Pcs)", mrp: 360, price: 144, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },
  { id: 26, name: "900 CC Wheel (5 Pcs)", mrp: 300, price: 120, per: "1 Box", category: "Ground Chakkar", img: "https://via.placeholder.com/120?text=wheel" },

  // DELUXE / WHEELS / BIJILI / FLOWER POTS / TWINKLING STARS / ONE SOUND CRACKERS (27-46)
  { id: 27, name: "Deluxe Spinner (10 Pcs)", mrp: 400, price: 160, per: "1 Box", category: "Wheels/Spinners", img: "https://via.placeholder.com/120?text=spinner" },
  { id: 28, name: "Flora Wheel", mrp: 400, price: 160, per: "1 Box", category: "Wheels/Spinners", img: "https://via.placeholder.com/120?text=spinner" },
  { id: 29, name: "Red Bijili (100's)", mrp: 80, price: 32, per: "1 Pkt", category: "Bijili Crackers", img: "https://via.placeholder.com/120?text=bijili" },

  // FLOWER POTS (30-35)
  { id: 30, name: "Flower Pots Small (10 Pcs)", mrp: 120, price: 48, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 31, name: "Flower Pots Big (10 Pcs)", mrp: 200, price: 80, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 32, name: "Flower Pots Special (10 Pcs)", mrp: 240, price: 96, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 33, name: "Flower Pots Ashoka (10 Pcs)", mrp: 300, price: 120, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 34, name: "Flower Pots Colour Koti (10 Pcs)", mrp: 480, price: 192, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 35, name: "Flower Pots Colour Koti Deluxe (10 Pcs)", mrp: 720, price: 288, per: "1 Box", category: "Flower Pots", img: "https://via.placeholder.com/120?text=fountain" },

  // TWINKLING STARS (36-37)
  { id: 36, name: "1 1/2\" Twinkling Star (10 Pcs)", mrp: 60, price: 24, per: "1 Box", category: "Twinkling Stars", img: "https://via.placeholder.com/120?text=star" },
  { id: 37, name: "4\" Twinkling Star (10 Pcs)", mrp: 150, price: 60, per: "1 Box", category: "Twinkling Stars", img: "https://via.placeholder.com/120?text=star" },

  // ONE SOUND CRACKERS (38-46)
  { id: 38, name: "2 3/4\" Kuruvi (5 Pcs)", mrp: 22, price: 9, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 39, name: "3 1/2\" Lakshmi (5 Pcs)", mrp: 25, price: 10, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 40, name: "4\" Lakshmi (5 Pcs)", mrp: 50, price: 20, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 41, name: "4\" Deluxe Lakshmi (5 Pcs)", mrp: 70, price: 28, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 42, name: "4\" Lakshmi Hulk (5 Pcs)", mrp: 80, price: 32, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 43, name: "4\" Lakshmi Gold (5 Pcs)", mrp: 80, price: 32, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 44, name: "5\" Hanuman (5 Pcs)", mrp: 120, price: 48, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 45, name: "6\" Rock (5 Pcs)", mrp: 150, price: 60, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },
  { id: 46, name: "2 Sound (5 Pcs)", mrp: 80, price: 32, per: "1 Pkt", category: "One Sound Crackers", img: "https://via.placeholder.com/120?text=onesound" },

  // PENCIL TORCHES (47-51)
  { id: 47, name: "12\" Hi Tech Pencil (10 Pcs)", mrp: 180, price: 70, per: "1 Box", category: "Pencil Torches", img: "https://via.placeholder.com/120?text=torch" },
  { id: 48, name: "Twitter Torch (2 Pcs)", mrp: 360, price: 140, per: "1 Box", category: "Pencil Torches", img: "https://via.placeholder.com/120?text=torch" },
  { id: 49, name: "Pop Corn Pencil (5 Pcs)", mrp: 500, price: 200, per: "1 Box", category: "Pencil Torches", img: "https://via.placeholder.com/120?text=torch" },
  { id: 50, name: "Water Queen Pencil (5 Pcs)", mrp: 500, price: 200, per: "1 Box", category: "Pencil Torches", img: "https://via.placeholder.com/120?text=torch" },
  { id: 51, name: "Karna Cooling Torch (2 Pcs)", mrp: 360, price: 140, per: "1 Box", category: "Pencil Torches", img: "https://via.placeholder.com/120?text=torch" },

  // BOMBS (52-56)
  { id: 52, name: "Atom Bomb (10 Pcs)", mrp: 120, price: 48, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },
  { id: 53, name: "Bullet Bomb Big (10 Pcs)", mrp: 75, price: 30, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },
  { id: 54, name: "Hydro Bomb (10 Pcs)", mrp: 150, price: 60, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },
  { id: 55, name: "Classic Bomb (10 Pcs)", mrp: 280, price: 110, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },
  { id: 56, name: "Agni Bomb (10 Pcs)", mrp: 450, price: 180, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },

  { id: 57, name: "Digital Bomb (10 Pcs)", mrp: 600, price: 240, per: "1 Box", category: "Bombs", img: "https://via.placeholder.com/120?text=bomb" },

  // PAPER BOMBS (58-59)
  { id: 58, name: "1/4 Kg Paper Bomb (1 Pce)", mrp: 125, price: 50, per: "1 Box", category: "Paper Bombs", img: "https://via.placeholder.com/120?text=paper" },
  { id: 59, name: "1/2 Kg Paper Bomb (1 Pce)", mrp: 250, price: 100, per: "1 Box", category: "Paper Bombs", img: "https://via.placeholder.com/120?text=paper" },

  // ROCKETS (60-64)
  { id: 60, name: "Baby Rocket (10 Pcs)", mrp: 120, price: 58, per: "1 Box", category: "Rockets", img: "https://via.placeholder.com/120?text=rocket" },
  { id: 61, name: "Two Sound Rocket (10 Pcs)", mrp: 320, price: 128, per: "1 Box", category: "Rockets", img: "https://via.placeholder.com/120?text=rocket" },
  { id: 62, name: "Rocket Bomb (10 Pcs)", mrp: 170, price: 68, per: "1 Box", category: "Rockets", img: "https://via.placeholder.com/120?text=rocket" },
  { id: 63, name: "Musical Rocket (5 Pcs)", mrp: 240, price: 96, per: "1 Box", category: "Rockets", img: "https://via.placeholder.com/120?text=rocket" },
  { id: 64, name: "Lunik Rocket (10 Pcs)", mrp: 300, price: 120, per: "1 Box", category: "Rockets", img: "https://via.placeholder.com/120?text=rocket" },

  // FANCY ITEMS (65-90)
  { id: 65, name: "Chota Fancy (1 Pce)", mrp: 100, price: 40, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 66, name: "Butterfly (5 Pcs)", mrp: 110, price: 44, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 67, name: "Bambaram (10 Pcs)", mrp: 240, price: 96, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 68, name: "Black Money (5 Pcs)", mrp: 460, price: 184, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 69, name: "Colour Smoke (3 Pcs)", mrp: 400, price: 160, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=smoke" },
  { id: 70, name: "Drone (5 Pcs)", mrp: 360, price: 144, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 71, name: "Electric Stone", mrp: 24, price: 10, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 72, name: "Helicopter (5 Pcs)", mrp: 280, price: 112, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 73, name: "Kit Kat", mrp: 50, price: 20, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 74, name: "Lolli Pop (5 Pcs)", mrp: 220, price: 88, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 75, name: "Money Bank (3 Pcs)", mrp: 490, price: 196, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 76, name: "Penta Sky Shot (5 Pcs)", mrp: 400, price: 160, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 77, name: "Pistol 5G", mrp: 480, price: 192, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 78, name: "Photo Flash (5 Pcs)", mrp: 120, price: 48, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 79, name: "Roll Cap (100 Roll)", mrp: 200, price: 80, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 80, name: "Shin Chan (5 Pcs)", mrp: 200, price: 80, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 81, name: "Siren Mega (3 Pcs)", mrp: 480, price: 192, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 82, name: "Spider (5 Pcs)", mrp: 340, price: 136, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 83, name: "Snake Tablet (Anaconda) (10 Pcs)", mrp: 180, price: 72, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=anaconda" },
  { id: 84, name: "90 Watts Digital Wala (3 Pcs)", mrp: 360, price: 144, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 85, name: "Canon Balls (6 Pcs)", mrp: 525, price: 210, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=canon" },
  { id: 86, name: "Top Gun", mrp: 450, price: 180, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 87, name: "Emu Egg (2 Pcs)", mrp: 420, price: 168, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 88, name: "Madurai Malli (3 Pcs)", mrp: 500, price: 200, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 89, name: "Old is Gold (25 Pcs)", mrp: 440, price: 176, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=fancy" },
  { id: 90, name: "Race Car (2 Pcs)", mrp: 1000, price: 400, per: "1 Box", category: "Fancy", img: "https://via.placeholder.com/120?text=car" },

  // AERIAL NOVELTIES (91-98)
  { id: 91, name: "2\" Fancy (3 Pcs)", mrp: 700, price: 280, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 92, name: "2\" Fancy (1 Pce)", mrp: 240, price: 96, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 93, name: "3\" Fancy (1 Pce)", mrp: 640, price: 256, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 94, name: "4\" Fancy (1 Pce)", mrp: 800, price: 320, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 95, name: "4\" Fancy 12 Steps (1 Pce)", mrp: 850, price: 340, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 96, name: "4\" Fancy 2 Ball's (1 Pce)", mrp: 900, price: 360, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 97, name: "4\" Fancy 3 Ball's (1 Pce)", mrp: 1100, price: 440, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },
  { id: 98, name: "7 Shot (5 Pcs)", mrp: 300, price: 120, per: "1 Pce", category: "Aerial Novelties", img: "https://via.placeholder.com/120?text=aerial" },

  // MULTI SHOTS (99-104)
  { id: 99, name: "12 Shot Rider (1 Pce)", mrp: 300, price: 120, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },
  { id: 100, name: "12 Shot Multi Colour (1 Pce)", mrp: 450, price: 180, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },
  { id: 101, name: "15 Shot Multi Colour (1 Pce)", mrp: 600, price: 240, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },
  { id: 102, name: "30 Shot Multi Colour (1 Pce)", mrp: 1020, price: 408, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },
  { id: 103, name: "60 Shot Multi Colour (1 Pce)", mrp: 2040, price: 816, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },
  { id: 104, name: "120 Shot Multi Colour (1 Pce)", mrp: 4000, price: 1600, per: "1 Box", category: "Multi Shots", img: "https://via.placeholder.com/120?text=multishot" },

  // MATCHES (105-108)
  { id: 105, name: "Deluxe 3 in 1 Match Box (10 Pcs)", mrp: 180, price: 72, per: "1 Box", category: "Matches", img: "https://via.placeholder.com/120?text=matches" },
  { id: 106, name: "Lamba 3 in 1 Match Box (10 Pcs)", mrp: 360, price: 144, per: "1 Box", category: "Matches", img: "https://via.placeholder.com/120?text=matches" },
  { id: 107, name: "Mini Laptop Matches", mrp: 550, price: 220, per: "1 Box", category: "Matches", img: "https://via.placeholder.com/120?text=matches" },
  { id: 108, name: "Laptop Matches", mrp: 650, price: 260, per: "1 Box", category: "Matches", img: "https://via.placeholder.com/120?text=matches" },

  // COLOUR FOUNTAINS (109-120)
  { id: 109, name: "Shower (5 Pcs)", mrp: 260, price: 104, per: "1 Box", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 110, name: "Peacock Multicolor (1 Pce)", mrp: 400, price: 160, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=peacock" },
  { id: 111, name: "Peacock Feather (5 Pcs)", mrp: 280, price: 112, per: "1 Box", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=peacock" },
  { id: 112, name: "Magical Peacock (1 Pce)", mrp: 400, price: 160, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=peacock" },
  { id: 113, name: "Pada Peacock (1 Pce)", mrp: 900, price: 360, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=peacock" },
  { id: 114, name: "4.5\" Mumbai beauty (1 Pce)", mrp: 300, price: 120, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 115, name: "6\" Water Queen Shower (1 Pce)", mrp: 480, price: 192, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 116, name: "Twenty 20 (5 Pcs)", mrp: 600, price: 240, per: "1 Box", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 117, name: "Tin Bear Fountain (1 Pce)", mrp: 300, price: 120, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 118, name: "Lemon Tree (1 Pce)", mrp: 250, price: 100, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 119, name: "Royal Fun (1 Pce)", mrp: 250, price: 100, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },
  { id: 120, name: "Appu Fountains", mrp: 525, price: 210, per: "1 Pce", category: "Colour Fountains", img: "https://via.placeholder.com/120?text=fountain" },

  // GIFT BOXES (121-124)
  { id: 121, name: "30 Item Gift Box", mrp: 0, price: 0, per: "1 Box", category: "Gift Boxes", img: "https://via.placeholder.com/120?text=gift" },
  { id: 122, name: "36 Item Gift Box", mrp: 0, price: 0, per: "1 Box", category: "Gift Boxes", img: "https://via.placeholder.com/120?text=gift" },
  { id: 123, name: "42 Item Gift Box", mrp: 0, price: 0, per: "1 Box", category: "Gift Boxes", img: "https://via.placeholder.com/120?text=gift" },
  { id: 124, name: "50 Item Gift Box", mrp: 0, price: 0, per: "1 Box", category: "Gift Boxes", img: "https://via.placeholder.com/120?text=gift" },
];

export default products;
