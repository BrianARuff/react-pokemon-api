import * as React from "react";

export default function Pokemon(props: any) {
  const [imgStr, setImgStr] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://pokeapi.co/api/v2/pokemon/" +
        props.pokemon[props.pokemonKey].name
    )
      .then((r) => r.json())
      .then((pm) => {
        setImgStr(pm.sprites.front_default);
      });
  });
  return (
    <div>
      <img src={imgStr} alt="" />
      <p>{props.pokemon[props.pokemonKey].name}</p>
    </div>
  );
}
