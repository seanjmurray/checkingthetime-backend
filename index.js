const express = require('express')
const app = express()

const note =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const watch = {
  title: "Marathon diver",
  img: "https://i.imgur.com/BVxiejX.jpg",
  brand: "Marathon",
  model: "Medium Search and Rescue Auto",
  caliber: "test caliber",
  origin: "Canada/Swiss",
  notes: note,
};
const watch1 = {
    title: "Citizen diver",
    img: "https://i.imgur.com/GSOYp2e.jpg",
    brand: "Citizen",
    model: "Promaster GMT",
    caliber: "Eco Drive",
    origin: "Japan",
    notes: note,
  };
  const watch2 = {
    title: "Seiko 5",
    img: "https://i.imgur.com/ZOEDvYh.jpg",
    brand: "Seiko",
    model: "5 Sport",
    caliber: "test caliber",
    origin: "Japan",
    notes: note,
  };

app.use(function(req, res, next) {
    console.log(req)
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.route('/api/watches')
    .get((req,res) => {
        res.send([watch, watch1, watch2])
    })

app.listen(8080, () => {
    console.log('I am alive on 8080')
})