import * as React from "react";
import { Link } from "react-router-dom";

export default function Pokemon(props: any) {
  const [imgStr, setImgStr] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        props.pokemon[props.pokemonIndex].name
    )
      .then((r) => r.json())
      .then((pm) => {
        setImgStr(pm.sprites.front_default);
      });
  });
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={imgStr} alt="pic of pokemon" />
      <Link
        to={{
          pathname: "/pokemon/" + props.pokemon[props.pokemonIndex].name,
          state: props.pokemon[props.pokemonIndex],
        }}
      >
        {props.pokemon[props.pokemonIndex].name}
      </Link>
    </div>
  );
}
