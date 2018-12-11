const express = require("express");
const app = express();
const fetch = require("node-fetch");
const path = require("path");
const dexEnpoint = "https://pokeapi.co/api/v2/pokemon-species/";
const spriteEndpoint = "https://pokeapi.co/api/v2/pokemon/";
const PORT = process.env.PORT || 9001;

//ALLOW EXPRESS TO SERVE STATIC ASSETS
app.use(express.static(path.join(__dirname, "PokeDex", "dist", "PokeDex")));
//DAS CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//SPRITE ROUTE
app.get("/pokemon/:id", (req, res) => {
  let { id: pokeId } = req.params;
  console.log({ pokeId });
  pokeId = pokeId.toLowerCase().trim();
  let parsedEnpoint = `${spriteEndpoint}${pokeId}`;
  console.log({ parsedEnpoint });
  fetch(parsedEnpoint)
    .then(res => res.json())
    .then(data => {
      res.json(data);
    });
});
//POKEDEX ROUTE
app.get("/pokemon/pokedex/:id", (req, res) => {
  let { id: pokeId } = req.params;
  console.log({ pokeId });
  let parsedEnpoint = `${dexEnpoint}${pokeId}`;
  console.log({ parsedEnpoint });
  fetch(parsedEnpoint)
    .then(res => res.json())
    .then(data => {
      res.json(data);
    });
});

// app.use("*", (req, res) => {
//   console.log("serving file ");
//   res.sendFile(
//     path.join(__dirname, "PokeDex", "dist", "PokeDex", "index.html")
//   );
// });

app.listen(PORT, () => console.log(`App starting on port ${PORT}`));
