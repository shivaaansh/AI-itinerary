import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBnDhMj9v7PZmLbRSLkb3KucQYhnYmeLyM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tripDetails": {\n    "location": "Las Vegas, Nevada",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "hotelName": "Circus Circus Hotel, Casino & Theme Park",\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$",\n      "hotelImageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/b5/e4/exterior.jpg?w=1200&h=-1&s=1",\n      "geoCoordinates": {\n        "latitude": 36.1214,\n        "longitude": -115.169\n      },\n      "rating": 3.5,\n      "description": "Affordable hotel with a casino, theme park, and circus acts."\n    },\n    {\n      "hotelName": "Excalibur Hotel & Casino",\n      "hotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$",\n      "hotelImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1a/06/2e/a1/exterior.jpg",\n      "geoCoordinates": {\n        "latitude": 36.1026,\n        "longitude": -115.172\n      },\n      "rating": 3.5,\n      "description": "Medieval-themed hotel with affordable rooms and a variety of entertainment options."\n    },\n    {\n      "hotelName": "Luxor Hotel and Casino",\n      "hotelAddress": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",\n      "price": "$$",\n      "hotelImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0f/a4/91/d4/luxor-hotel-and-casino.jpg",\n      "geoCoordinates": {\n        "latitude": 36.0956,\n        "longitude": -115.176\n      },\n      "rating": 3.5,\n      "description": "Egyptian-themed hotel with budget-friendly rooms, a casino, and various dining options."\n    }\n ], \n  "itinerary": [\n    {\n      "day": 1,\n      "plan": [\n        {\n          "placeName": "Welcome to Las Vegas Sign",\n          "placeDetails": "Iconic welcome sign for photo opportunities.",\n          "placeImageUrl": "https://www.lasvegashowto.com/wp-content/uploads/2019/12/Welcome-to-Fabulous-Las-Vegas-Sign1.jpg",\n          "geoCoordinates": {\n            "latitude": 36.0808,\n            "longitude": -115.153\n          },\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "30 minutes"\n        },\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "Pedestrian mall with a light show and live music.",\n          "placeImageUrl": "https://www.vegas.com/wp-content/uploads/2022/11/FSE-SlotZilla-00.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1698,\n            "longitude": -115.142\n          },\n          "ticketPricing": "Free (Shows and attractions may have fees)",\n          "rating": 4.0,\n          "timeTravel": "2-3 hours" \n        }\n      ],\n      "bestTimeToVisit": "Evening" \n    },\n    {\n      "day": 2,\n      "plan": [\n        {\n          "placeName": "The Strip",\n          "placeDetails": "Walk the Strip and explore various hotels and casinos.",\n          "placeImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/Strip_Night_c_Paul_Brady_d06b1a36-9321-465d-9711-88559716c83a.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1146,\n            "longitude": -115.172\n          },\n          "ticketPricing": "Free (Shows and attractions may have fees)",\n          "rating": 4.5,\n          "timeTravel": "Half Day"\n        },\n        {\n          "placeName": "High Roller Observation Wheel",\n          "placeDetails": "Ride the Ferris wheel for panoramic city views.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/linq/High-Roller-Images/LINQ-High-Roller-Las-Vegas-at-night.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1179,\n            "longitude": -115.174\n          },\n          "ticketPricing": "$$", // Indicating moderate pricing\n          "rating": 4.0,\n          "timeTravel": "1 hour"\n        }\n      ],\n      "bestTimeToVisit": "Daytime and Evening"\n    },\n    {\n      "day": 3,\n      "plan": [\n        {\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Stunning floral displays and art installations.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/MGM/bellagio/attractions/conservatory-botanical-garden/bellagio-conservatory-botanical-garden-hero.jpeg",\n          "geoCoordinates": {\n            "latitude": 36.1136,\n            "longitude": -115.176\n          },\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "1-2 hours"\n        },\n        {\n          "placeName": "Fountains of Bellagio",\n          "placeDetails": "Choreographed water show set to music.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/MGM/bellagio/attractions/fountains-of-bellagio/bellagio-fountains-hero.jpeg",\n          "geoCoordinates": {\n            "latitude": 36.1136,\n            "longitude": -115.176\n          },\n          "ticketPricing": "Free",\n          "rating": 4.5,\n          "timeTravel": "30 minutes"\n        },\n        {\n          "placeName": "Arts District",\n          "placeDetails": "Explore art galleries, studios, and shops.",\n          "placeImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/Colorful_Mural_in_the_Arts_District_Credit_710_Agency_008d6aa6-313c-42db-9e23-3310b311c106.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1704,\n            "longitude": -115.141\n          },\n          "ticketPricing": "Free (Purchases may apply)",\n          "rating": 4.0,\n          "timeTravel": "2-3 hours"\n        }\n      ],\n      "bestTimeToVisit": "Daytime/Afternoon"\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});
