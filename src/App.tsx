import * as React from "react";
import "./scss/App.scss";

function App() {
  const [pokemon, setPokemon] = React.useState({});
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(() => ({ ...pokemon.results }));
      })
      .catch((err) => console.error(err));
  }, [pokemon]);
  return (
    <div>
      {Object.keys(pokemon).map((key) => {
        return <Pokemon key={key} pokemon={pokemon} pokemonKey={key} />;
      })}
    </div>
  );
}

function Pokemon(props: any) {
  const [imgStr, setImgStr] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        props.pokemon[props.pokemonKey].name
    )
      .then((r) => r.json())
      .then((pm) => {
        const copy = imgStr;
        // @ts-ignore
        copy.push(pm.sprites.front_default);
        setImgStr(copy);
      });
  }, [imgStr]);
  return (
    <>
      {imgStr.map((image) => {
        return image ? (
          <img key={Math.random() * 10000} src={image} alt="" />
        ) : (
          <p>No Image</p>
        );
      })}
    </>
  );
}

export default App;
