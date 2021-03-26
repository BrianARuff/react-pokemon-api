import * as React from "react";

type PokemonType = {
  abilities: [
    {
      ability: { name: string; url: string };
      is_hidden: boolean;
      slot: number;
      url: string;
    }
  ];
};

export default function DynamicPokemonForms(props: any) {
  const [pokemon, setPokemon] = React.useState<PokemonType | null>(null);
  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.name + "/")
      .then((res) => res.json())
      .then((pokemon) => setPokemon(pokemon))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ul>
      {pokemon?.abilities.map(({ ability }) => {
        return (
          <li key={ability.name}>
            <a href={ability.url}>{ability.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
