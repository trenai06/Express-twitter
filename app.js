const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

const posts = [
  {
    name: "Jun Pyo",
    tweet: "Money, my boys, style... I have it all ",
    image: "./Assets/JunPyo.jpg",
    likes: "1000 Likes",
  },

  {
    name: "Alli",
    image: "./Assets/VaderCoffee.jpg",
    tweet: "Coffee Recommendations????",
    likes: " 30 Likes",
  },

  {
    name: "Donald",
    image: "./Assets/KidsOnABus.jpg",
    tweet: "The truth is I got on the bus a boy. And I never got off the bus. I still haven't. 🚌 🚌 🚌",
    likes: "50 Likes",
  },

  {
    name: "Katniss",
    image: "./Assets/HungerGames.png",
    tweet: "Still a better love story than twilight 🤷🏻‍♀️",
    likes: " 8000 Likes",
  },

  {
    name: "Courtney",
    image: "./Assets/jawbreaker.webp",
    tweet: "#Squad Goals",
    likes: " 3000 Likes",
  },

  {
    name: "Amethyst",
    image: "./Assets/Amethyst.jpg",
    tweet: "GRWM: How to be cute and fight crime!",
    likes: " 320000000 Likes",
  },

  {
    name: "Bella",
    image: "./Assets/twilight.jpg",
    tweet: "You sure about that?? #IVolunteerAsImmortal",
    likes: " 500 Likes",
  },

  {
    name: "Miranda",
    image: "./Assets/MirandaBailey.webp",
    tweet: "Throwback Thursday! #IStayThatGirl",
    likes: " 30 Likes",
  },

  {
    name: "Rachel",
    image: "./Assets/Rachel.jpg",
    tweet: "Channeling my inner Britney. New Headshots!!",
    likes: " - 10000000000030 Likes",
  },

  {
    name: "Scott",
    image: "./Assets/ScottPilgrim.webp",
    tweet:
      "Missed Connection: Saw you at a party. Pretty sure you're the love of my life. Someone please help me find her. Picture for reference.",
    likes: " 200 Likes",
  },
];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/twitter.html"));
});

app.listen(3000);
console.log("Express is working!");
