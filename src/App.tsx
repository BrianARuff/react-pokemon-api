import * as React from "react";
import "./scss/App.scss";
import Pokemon from "./Pokemon";

function App() {
  const [pokemon, setPokemon] = React.useState({});

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(() => ({ ...pokemon.results }));
      })
      .catch((err) => console.error(err));
  });
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }}>
      {Object.keys(pokemon).map((key) => {
        return <Pokemon key={key} pokemon={pokemon} pokemonIndex={key} />;
      })}
    </div>
  );
}

export default App;
